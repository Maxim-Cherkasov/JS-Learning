//ДОМАШКА
/*
1. Изучить теорию
2. Какой или какие из вариантов не верны:
*/
/*
//Вариант №1
if (1 === "1") {
	console.log('Истина!');
} else {
	console.log('Ложь!');
}
//Вариант №2
if (5 == "5") {
	console.log('Истина!');
} else {
	console.log('Ложь!');
}

//Вариант №3
let message = (92 > '11' && 58 < 100) ? 'Истина!' : 'Ложь!';
console.log(message);

//Вариант №4
if (0) {
	console.log('Ложь!');
} else if (" ") {
	console.log('Истина!');
}
*/
//========================================================================================================================================================
//========================================================================================================================================================
/*
if (2 > 5) {
	//Код выполняется только если
	//выражение в скобках вернет true
	console.log(message);
}
*/
/*
let first = 5;
let second = 5;

if (first === second) {
	//Код выполняется только если
	//выражение в скобках вернет true
	console.log(message);
}
*/

/*
//Более сложное условие
if (2 + 1 === 3 && "1" == 1 || 10 > 5 && 10 === 1) {
	//Код выполняется только если
	//выражение в скобках вернет true
	console.log(message);
}
*/

/*
//Преобразование типов
if ("") {
	//Код выполняется только если
	//выражение в скобках вернет true
	console.log(message);
}
*/

/*
//Более короткая запись
//Код выполняется только если
//выражение в скобках вернет true
if (2 > 1) console.log(message);
*/

/*
if (58 / 2 > 80) {
	console.log(message);
} else {
	console.log('Условие не выполнено :(');
}
*/
/*
if (number > 10) {
	console.log(message);
} else {
	console.log('Условие не выполнено :(');
}*/

/*
let message = "Hi, i'm a freelancer";
let number = 5;

if (number > 50) {
	console.log('5 больше 50');
} else if (number > 30) {
	console.log('5 больше 30');
} else if (number > 10) {
	console.log('5 больше 10');
} else if (number > 1) {
	console.log('5 больше 1');
} else {
	console.log('Условие не выполнено :(');
}
*/

/*
//Условный оператор "?"

let message = "Привет";

let messageEnd;
if (5 > 1) {
	messageEnd = ", Вася!";
} else {
	messageEnd = ", Оля!";
}

message += messageEnd;
console.log(message);
//
let messageEnd = 5 > 10 ? ", Вася!" : ", Оля!";

message += messageEnd;
console.log(message);

*/
/*
let message = "hi";

let meassegeEnd = 5 > 10 ? "Hi, Vasya" : "Hi, Olya";
console.log(message);
*/

/*
let message = "Привет";
let messageEnd;

if (5 > 50) {
	messageEnd = ", Vasia";
} else if (5 > 30) {
	messageEnd = ", Olya";
} else if (5 > 1) {
	messageEnd = ", Misha";
} else {
	messageEnd = ", Innokentiy";
}

messageEnd = 5 > 10 ? ", Vasia" : 
    5 > 30 ? ", Olya" : 
	  5 > 10 ? ", Misha" : 
	    5 > 1 ? ", Andrey" : ", Innokentiy"

message += messageEnd;
console.log(message);
*/

/*
let year = prompt('In which year was ECMAScript-2015 specification published?', '');

if (year == 2015) {
  alert( 'You guessed it right!' );
} else {
  alert( 'How can you be so wrong?' ); // any value except 2015
}
*/

/*
let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

if (year < 2015) {
  alert( 'Too early...' );
} else if (year > 2015) {
  alert( 'Too late' );
} else {
  alert( 'Exactly!' );
}
*/

/*
let accessAllowed;
let age = prompt('How old are you?', '');

if (age > 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}

alert(accessAllowed);
*/

/*
let accessAllowed;
let age = prompt('How old are you', '');

if (age > 18) {
	accessAllowed = true;
} else {
	accessAllowed = false;
}

alert(accessAllowed);
*/

/*
let accessAllowed = (age > 18) ? true : false;
*/

/*
let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );
*/
/*
let age = prompt('What is your age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
	(age < 18) ? 'Hello!' :
	(age > 18) ? 'Greetings!' :
	'What an unusual age!';

	alert( message );
	*/

/*
let company = prompt('Which company created JavaScript?', '');

if (company == 'Netscape') {
  alert('Right!');
} else {
  alert('Wrong.');
}	
*/

/*
let company  = prompt('Which company created JavaScript', '');

if (company == 'Netscape') {
	alert('Right!');
} else {
	alert('Wrong!');
}
*/

/*
let jsName = prompt('What is the oficial name of JS', '');

if (jsName == 'Ecma') {
	alert('Right');
} else {
	alert('Wrong');
}
*/

/*
let result;

if (a + b < 4) {
  result = 'Below';
} else {
  result = 'Over';
}
*/

/*
let result = prompt(a + b < 4) ? Below : Over;
*/

/*
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
*/
/*
let message = (login == 'Employee') ? 'Hello' :
  (login == 'Director') ? 'Greetings' :
  (login == '') ? 'No login' :
  '';
*/
