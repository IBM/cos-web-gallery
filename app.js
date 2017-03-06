var express = require('express');
var cfenv = require('cfenv');
var bodyParser = require('body-parser');
var app = express();

// serve the files out of ./public as our main files
app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'ejs');
app.use(bodyParser.json());

var title = 'Simple COS Web Gallery';
// Serve index.ejs
app.get('/', function (req, res) {
  res.render('index', {status: '', title: title});
});

var imageUploadRouter = require('./src/routes/imageUploadRoutes')(title);
var galleryRouter = require('./src/routes/galleryRoutes')(title);

app.use('/gallery', galleryRouter);
app.use('/', imageUploadRouter);

// get the app environment from Cloud Foundry
var appEnv = cfenv.getAppEnv();

// start server on the specified port and binding host
var port = process.env.PORT || 3000;
app.listen(port, function() {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});