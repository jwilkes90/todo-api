var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Meet mom for lunch',
	completed: false
}, {
	id: 2,
	description: 'Go to market',
	completed: false
}, {
	id: 3,
	description: 'Take George for a walk',
	completed: true
}];

app.get('/', function (req,res) {
	res.send('Todo API Root');
});

// GET /todos (way to get all todo items)
//app.get(url going to be using in Postman, function (req, res) {})

// app.get('/todos', function (req, res) {
// 	res.json(todos);
//});

	//response.json(pass in whatever we want to send back to the caller)


//GET /todos/:id (way to get a single todo item)
app.get('/todos/:id', function (req,res) {
	var todoID = parseInt(req.params.id, 10);
	var matchedTodo;

	todos.forEach(function (todo) {
		if (todoID === todo.id) {
			matchedTodo = todo;
		}
	});

	if (matchedTodo) {
		res.json(matchedTodo);
	} else {
		res.status(404).send();
	} 
	//res.send('Asking for todo with id of ' + req.params.id)
});

app.listen(PORT, function () {
	console.log('Express listening on port: ' + PORT);
});