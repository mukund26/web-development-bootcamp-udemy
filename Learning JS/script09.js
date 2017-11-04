// Array to store todos
var todos = [];

var input = prompt("What would you like to do?");

// Loop until user wants to quit application
while (input !== "quit"){
	if (input === "list") {
		console.log(todos);
	} else if (input === "new") {
		var newTodo = prompt("Enter new todo");
		todos.push(newTodo);
	}
	input = prompt("What would you like to do?");
}

console.log("Okay, thank you for using the Todo app!");