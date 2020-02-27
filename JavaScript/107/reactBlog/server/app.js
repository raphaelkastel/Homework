const express = require('express');
const app = express();

const socketIo = require('socket.io');
const mongo = require('mongodb');
const bcrypt = require('bcrypt');
const session = require('express-session');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let posts;
let users;
let io;

app.use(require('cors')({
  origin: 'http://localhost:3000'
}));
app.use(session({
  secret: 'mySecret',
  cookie: {
    maxAge: 20000//,
    //secure: true
  },
  resave: false,
  saveUninitialized: false
}));
/*app.use((req, res, next) => {
  //res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});*/

app.route('/posts').
  get(async (req, res, next) => {
    const skip = +req.query.skip;
    const limit = +req.query.limit;

    try {
      const thePosts = await posts.find()
        .skip(skip)
        .limit(limit)
        .toArray();

      res.send(thePosts);
    } catch (e) {
      return next(e);
    }
  })
  
app.post('/login', async (req, res, next) => {
  try {
    const test = await users.find().toArray();
    console.log(req.body);
      const user = await users.find({username: req.body.user}).toArray();
      if (!user.length) return next(new Error(await users.find().toArray()));

      bcrypt.compare(req.body.password, user[0].password, (error, result) => {
          if (error) return next(error);
          if (!result) return next(new Error('Invalid password'));

          req.session.user = req.body.user;
          res.status(200).send("success");
      });
    } catch (e) {
      return next(e);
    }
  }
);

app.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.status(200).send("success");
});

const sessionOnlyMiddleware = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/');
  }
};
app.route('/posts',[sessionOnlyMiddleware]).
post( async (req, res, next) => {
    const newPost = {
      title: req.body.title,
      content: req.body.content,
      author: req.user,
      date: new Date()
    };

    try {
      await posts.insertOne(newPost);
      res.status(201).send(newPost);
    } catch (e) {
      return next(e);
    }
  });

app.post('/posts/:id/comments',[sessionOnlyMiddleware], async (req, res, next) => {
  const newComment = {
    content: req.body.content,
    author: req.user,
    date: new Date()
  };

  try {
    await posts.updateOne({ _id: mongo.ObjectId(req.params.id) },
      {
        $push: {
          comments: newComment
        }
      });

    res.status(201).send(newComment);
  } catch (e) {
    return next(e);
  }
});

app.use((req, res, next) => {
  const err = new Error('No such API method');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || 'oops');
});

async function connectToMongo() {
  const client = new mongo.MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db('test');
    posts = db.collection('posts');
    users = db.collection('users');
    /*users.insertOne({
  'username': 'test1',
  'password': bcrypt.hashSync('test', 10)
});*/
    numPosts = await posts.countDocuments();
  } catch (err) {
    console.error(err);
  }
}

connectToMongo().catch(e => console.error(e));

io = socketIo.listen(app.listen(3001));