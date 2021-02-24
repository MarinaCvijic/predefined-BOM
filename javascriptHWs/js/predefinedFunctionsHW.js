
// Task 1

var sentence = "Lorem ipsum dolor sit amet";

function lowerCase(sentence){

	
	console.log(sentence.toLowerCase());
}
lowerCase(sentence);

// Task 2

function upperCase(sentence){
	if(sentence.indexOf('sit')) {

		console.log('There is sit in the sentence.');

	} else {console.log('There is not sit in the sentence.');}

	
	
}
upperCase(sentence);

//Task 3

function lastLetter(sentence){

	
console.log(sentence.indexOf(sentence.slice(-1), sentence.length-1));
	
	
}
lastLetter(sentence);

//Task 4

function newStrings(sentence){

	var newString = sentence.split(' ');
	
	console.log(newString.slice(0,3));
	
	
}
newStrings(sentence);

// Task 5

var actorSentence = "Piter is an actor."

function changeLetters(act){

	var actor = act.split(' ');
	actor.splice(0,1, "Pitor");
	actor.splice(3,3, "acter.");
	console.log(actor.join(' '));

	
	}
changeLetters(actorSentence);


//Task 6

var someData = [34, 23, 14, 56, 23, 44, 65];

function number(no){
		var numbers = no.splice(3,1);
		console.log(no);

}
number(someData)

//Task 7


var data = [34, 23, 14, 56, 23, 44, 65];

function otherData(act){
	 data.shift();
	 var noNumber = data.slice(0,3);
	var otherData = data.slice(3,6);
	otherData.reverse();
	console.log(noNumber.concat(otherData));

	
	}

otherData(data);


// Task 8

var someNumbers = [334, 233, 212, 199, 154, 122];

var someNewNumbers = function(numbers){
	     return numbers.map(function(numb,index){

			if (index>0) { 

				return numb - numbers[index - 1];

			} else return numb;
		
			
		
		});

		};

		



console.log(someNewNumbers(someNumbers));


//Task 9

var students = [
{
	name:"Jim",
	avgGrade: 8.5556
},
{
	name:"Mike",
	avgGrade: 8.5492
},
{
	name:"Anna",
	avgGrade: 8.9322
},
{
	name:"Jack",
	avgGrade: 8.6111
}
];
var studentsData = students.filter(function(item){
				
				if(item.avgGrade > 8.5){
			item.avgGrade = item.avgGrade.toFixed(2);
			return item;
				}
				
				
			
		

		

});
console.log(studentsData);