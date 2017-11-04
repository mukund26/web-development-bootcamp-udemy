// Array to store todos
var todos = [];

var input = prompt("What would you like to do?");

// Loop until user wants to quit application
while (input !== "quit"){
	if (input === "list") {
		listTodos();
	} else if (input === "new") {
		addTodo();
	} else if (input === "delete"){
		deleteTodo();
	}
	input = prompt("What would you like to do?");
}

console.log("Okay, thank you for using the Todo app!");

function listTodos(){
	console.log("**********");
	todos.forEach(function(todo, i){
		console.log(i + ": " +todo);
	});
	console.log("**********");
}

function addTodo(){
	var newTodo = prompt("Enter new todo");
	todos.push(newTodo);
	console.log("Todo added");
}

function deleteTodo(){
	var index = prompt("Enter index of todo to delete");
	todos.splice(index, 1);
	console.log("Todo deleted");
}