const express = require('express');
const taskManager = require('./app.js');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());

app.post('/createTask', function (req, res) {
	taskManager.createTask(req.body.params, function(results) {
		res.send(results);
	});
});

app.put('/updateTask', function (req, res) {
	taskManager.updateTask(req.params, function(results) {
		res.send(results);
	});
});

app.delete('/deleteTask', function (req, res) {
	taskManager.deleteTask(req.params, function(results) {
		res.send(results);
	});
});

app.get('/getAllTasks', function (req, res) {
	taskManager.getAllTasks(function(results) {
		res.send(results);
	});
});

module.exports = app;
