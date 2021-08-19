const express = require('express');
const indexRouter = require('./routes/index');
const projectRouter = require('./routes/projects');
var path = require('path');

const app = express();

// set the view engine to ejs
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/projects', projectRouter);

module.exports = app;
