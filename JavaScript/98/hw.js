
const app = require('connect')();


app.use((req, res, next) => {
    res.setHeader('content-type', 'text/html');
    next();
});

//app.use(require('./queryParser'));
const url = require('url');
app.use((req, res, next) => {
    const parsedUrl = url.parse(req.url, true);
    req.query = parsedUrl.query;
    if(req.query.magicWord != "please"){
        res.end('<h1>YOU SHALL NOT PASS!</h1>');
    }else{next();}
});

app.use('/about', (req, res, next) => {
    res.end('<h1>PCS is a great place!</h1>');
});

app.use('/sayHello', (req, res, next) => {
    res.end(`Hello ${req.query.name || 'stranger'}`);
});

app.use('/sayGoodbye', (req, res, next) => {
    res.end(`Goodbye ${req.query.name || 'stranger'}`);
});

app.use('/makeError', (req, res, next) => {
    throw new Error('OOPS!');
});

app.use((error, req, res, next) => {
    res.statusCode = 500;
    res.write(`<h5>Server error: ${error.message}</h5>`);
    next(error);
});

app.use((error, req, res, next) => {
    res.end(`<h5>Really, its a server error: ${error.message}</h5>`);
});

app.use((req, res, next) => {
    res.statusCode = 404;
    res.write('<h5>No such page!</h5>');
    next();
});

app.listen(80);