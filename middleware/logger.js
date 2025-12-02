import colors from 'colors';

const logger = (req, res, next) => {

    let methodColors = {
        GET : 'green',
        POST : 'yellow',
        PUT : 'blue',
        DELETE : 'red',
    }

    let color = methodColors[req.method] || white

    console.log(`${req.method} ${req.protocol}://${req.host}${req.originalUrl}` [color])
    next()
};

export default logger;