
//Task 1
function message(){

	if (window.navigator.onLine === true){
		console.log(alert('Browser is online'));
	} else console.log(alert('Browser is offline'));
};

message();


//Task 2

//function reload(){

	//window.location.reload()
//};

//console.log(reload());

//Task 3

//var redirection = setInterval (function(){
	//window.history.forward(window.location.href = "http://www.google.com");
//},3000);

//console.log(redirection);

//Task 4

//var a = 0;
//function numbersNumb(){
	
	//a++;
	//a < 16 ? console.log(a) : clearInterval(numbers);
//}

//var numbers = setInterval (numbersNumb,1000);

//Task 5
//var numb = Math.random() * 10;
//console.log(Math.round(numb));

//Task 6

var users = [
{
	name:"Mike",
	age:30,
	status:"inactive"

},
{	
	name:"Jane",
	age:32,
	status:"inactive"

},
{
	name:"Simon",
	age:34,
	status:"inactive"

},
{
	name:"Jill",
	age:35,
	status:"inactive"
},
{
	name:"Kim",
	age:28,
	status:"inactive"
}];



var answer = prompt("What is your name?");
var newUsers = users.filter(function(item){ return item.name==answer});



if (newUsers==0) {

		console.log("User with name " + answer + " doesn't exist.");
	} 
	 else users.forEach(function(item){ 

	 	if(item.name==answer) {item.status ="active"};

 });

localStorage.setItem("loggedInUser", answer)
console.log(localStorage.getItem("loggedInUser"));

setTimeout (function()
{
	users.forEach(function(item){ 

	 	if(item.name==answer) 
	 		{item.status ="active"};
	 });

	localStorage.removeItem("loggedInUser");

	console.log(answer +" is logged out")}, 60000);

	

	


