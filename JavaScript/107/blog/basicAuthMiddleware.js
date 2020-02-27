module.exports = options => {
    return (req, res, next) => {
        if (req.headers.authorization) {
            console.log(req.headers.authorization);

            const userNamePasswordEncoded = req.headers.authorization.split(' ')[1];
            console.log(userNamePasswordEncoded);

            const buffer = Buffer.from(userNamePasswordEncoded, 'base64');
            console.log(buffer.toString());

            const userNamePassword = buffer.toString().split(':');
            const userName = userNamePassword[0];
            const password = userNamePassword[1];

            if (options.users[userName] && options.users[userName] === password) {
                req.user = userName;
                return next();
            }
        }
        res.writeHead(401, { 'WWW-Authenticate': 'Basic realm="PCS App"' });
        res.end();
    }
};