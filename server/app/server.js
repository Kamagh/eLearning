const http = require('http');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
//const cookieParser = require('cookie-parser');
//const routes = require('./routes/routes');
//const socketio = require('socket.io');
const app = express();
const server = http.createServer(app);

/*const io = socketio(server, {
    cors: {
        origin: '*',
    },
});*/

app.post
const corsOptions = {
    origin: true,
    credentials: true,
    optionsSuccessStatus: 200,
};

/*io.on('connection', (socket) => {
    socket.on('boardId', (boardId) => {
        socket.join(boardId);
    });
    socket.on('taskId', (taskId) => {
        socket.join(taskId);
    });
});*/
app.use((req, res, next) => {
    req.io = io;
    return next();
});
//app.use(cookieParser());
//app.use(routes);

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', express.static('uploads'));

app.use((req, res) => {
    res.sendStatus(404);
});

module.exports = server;
