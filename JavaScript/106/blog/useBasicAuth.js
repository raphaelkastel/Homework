const app = require('connect')();

app.use(require('./logger'));

let requests = 0;
app.use((req, res, next) => {
    console.log(`There have been ${++requests} requests so far`);
    next();
});

app.use('/home', (req, res, next) => {
    res.end('Welcome to the PCS site');
});

app.use('/about', (req, res, next) => {
    res.end('PCS is a great place where everyone does their homework');
});

app.use(require('./queryParser'));

app.use(require('./basicAuthMiddleware')({
    users: {
        donald: 'potus',
        nancy: 'pelosi'
    }
}));

app.use('/admin', (req, res, next) => {
    res.end('This is the admin page!');
});

app.listen(80);