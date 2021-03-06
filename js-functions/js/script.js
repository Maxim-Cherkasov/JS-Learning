//ДОМАШКА

/*
1. Изучить теорию
2. Решить задачи:


// Задача №1
// Кто попадет в консоль первым Вася или Коля?
function showName() {
	console.log('Вася!');
}
setTimeout(showName, 0);
console.log('Коля!');

// Задача №2
// Верно ли вызвана функция
showMessage();
function showMessage() {
	console.log('Сообщение');
}
// Задача №3
// Верно ли вызвана функция
showMessage();
let showMessage = function () {
	console.log('Сообщение');
}
// Задача №4
// Как решить проблему?
'use strict'
if (2 > 1) {
	function showMessage() {
		console.log('Message');
	}
}
showMessage(); // Error (showMessage is not defined)

*/
// Какая из функций вызвана верно?
/*
// 1
showMessage();
function showMessage() {
	console.log('Сообщение');
}

// 2
   function showMessage() {

	   // Локальная переменная
		let message = "Сообщение";
		console.log(Сообщение);
   }

	console.log(message);
	*/
/*
'use strict'

// Function declaration
if (2 > 1) {
	function showMessage() {
		console.log('Message');
	}
}

showMessage();

let getMessage;

// Function expression
if (2 > 1) {
	getMessage = function showMessage() {
		console.log('Message');
	}
}

getMessage();
*/
//========================================================================================================================================================
//========================================================================================================================================================
//Объявление функции (Function Declaration)
/*
function имя(параметры) {
	// тело (код) функции
}*/
//===========================================================

//Имя функции и её предназначение
/*
Как правило, в имени используются опеределенные префиксы,
обозначающие действие, после которых следует объект действия.

Например, функции, начинающиеся с
"show..." обычно что-то показывают,
"get..." – возвращают значение,
"calc..." – что-то вычисляют,
"create..." – что-то создают,
"check..." – что-то проверяют и возвращают логическое
значение, и т.д.

Примеры:
showMessage - показать сообщение
getOptions - получить параметры
calcSum - посчитать сумму
и т.д.
*/

// Функция вывода сообщения
/*
function showMessage() {
	console.log('message');
}
showMessage();
*/
/*
Функция должна делать только то,
что явно подразумевается её названием.
И это должно быть одним действием.
Два независимых действия обычно подразумевают две функции,
даже если предполагается, что они будут вызываться вместе (в этом случае мы
можем создать третью функцию, которая будет их вызывать).
*/

//===========================================================
//Запуск функции
/*
showMessage();

// Функция вывода сообщения
function showMessage() {
	console.log('Сообщение!');
}
showMessage();
showMessage();
*/

//===========================================================

/*
function getSumm() {
	let numOne, numTwo;

	function getNumOne() {
		numOne = 1;
	}
	function getNumTwo() {
		numTwo = 2;
	}
	getNumOne();
	getNumTwo();

	let numSumm = numOne + numTwo;
	console.log(numSumm);
}
getNumOne();
getSumm();
*/

/* -- Twitter example --
function oneHundredDaysOfCode() {
	twitter.log('Today i learn functions')
}

oneHundredDaysOfCode();
*/
//-----
/*
// Вложенность и видимость функций
"use strict"
if (2 > 1) {
	function getSumm() {
		let numOne, numTwo;

		function getNumOne() {
			numOne = 1;
		}
		function getNumTwo() {
			numTwo = 2;
		}
		getNumOne();
		getNumTwo();

		let numSumm = numOne + numTwo;
		console.log(numSumm);
	}
}
getSumm();
*/
//===========================================================
//Локальные и внешние переменные
/*
function showMessage() {
	// Локальная переменная
	let message = "Сообщение";
	console.log(message);
}

console.log(message);
*/

//-----
/*
// Внешняя переменная
let message;

function showMessage() {
	// Используется внешняя переменная
	message = "Сообщение";
}
console.log(message);

showMessage();
*/

//-----

/*
// Внешняя переменная
let message = "Сообщение №1";

function showMessage() {
	// Локальная переменная
	let message = "Сообщение №2";
	console.log(message);
}
console.log(message);
showMessage();

*/
//------

/*
// Глобальные переменные
let globalVar = "Я глобальная переменная";

function getSumm() {
	let numOne, numTwo;

	function getNumOne() {
		numOne = 1;
		console.log(globalVar);
	}
	function getNumTwo() {
		numTwo = 2;
	}
	getNumOne();
	getNumTwo();

	let numSumm = numOne + numTwo;
	console.log(globalVar);
}
console.log(globalVar);

getSumm();
*/

//===========================================================
/*
// Параметры (аргументы)
function calcSumm(numOne = 1, numTwo = 2) {
	console.log(`Переменная numOne:${numOne}`);
	console.log(`Переменная numTwo:${numTwo}`);

	let numSumm = numOne + numTwo;

	console.log(`Сумма:${numSumm}`);
}

calcSumm(5, 5);
*/

//------
/*
numTwo = numTwo || 2;
*/

/*
// Функции-колбэки
function calcSumm(numOne, numTwo, more, less) {
	let numSumm = numOne + numTwo;

	if (numSumm > 3) {
		more();
	} else {
		less();
	}
}

function showMoreMessage() {
	console.log('Больше чем 3');
}
function showLessMessage() {
	console.log('Меньше чем 3');
}
calcSumm(1, 1, showMoreMessage, showLessMessage);
*/

//===========================================================

/*
// Возврат результата
function calcSumm(numOne, numTwo) {

	let numSumm = numOne + numTwo;

	// Возврат
	return numSumm;

	// Дальше код не выполняется

}
let funcRezult = calcSumm(1, 2);

console.log(`Сумма: ${funcRezult}`);
*/

//------
/*
function calcSumm(numOne, numTwo) {

	let numSumm = numOne + numTwo;

	if (numSumm >= 3) {
		// Возврат
		return numSumm;
	} else {
		return 'Сумма меньше 3';
	}
	// Дальше код не выполняется

}
let funcRezult = calcSumm(1, 2);

console.log(funcRezult);
*/

//------
/*
function calcSumm(numOne, numTwo) {

	let numSumm = numOne + numTwo;

	return
	numSumm;

	// Дальше код не выполняется

}
let funcRezult = calcSumm(1, 2);

console.log(funcRezult);
*/
//------
/*
function calcSumm(numOne, numTwo) {

	let numSumm = numOne + numTwo;

	if (numSumm >= 3) {
		// Возврат
		return;
		// Дальше код не выполняется
	}
}
calcSumm(5, 5)
*/

//===========================================================
// Рекурсия
/*
function getSumm(numOne, numTwo) {
	let numSumm = calcSumm(numOne, numTwo);

	console.log(numSumm);
}
function calcSumm(numOne, numTwo) {
	return numOne + numTwo;

}
getSumm(5, 5);
*/

//------

//------
/*
function calcSumm(numOne, numTwo) {
	if (numTwo === 1) {
		return numOne;
	} else {
		return numOne * calcSumm(numOne, numTwo - 1);
	}
}
console.log(calcSumm(2, 3));
*/


//========================================================================================================================================================
/*
let showMessage = function () {
	console.log('Привет!');
};

showMessage();
*/

//-----

//-----
/*
//Объявление функции (Function Declaration)
function getSumm() {
	let summ = 1 + 2;
	console.log(summ);
};
getSumm();
*/
/*
function getSumm() {
	let summ = 1 + 2;
	console.log(summ);
};

	let someVar = getSumm;

	someVar();
	getSumm();
*/	
/*
// Функциональное выражение (Function Expression)
let showMessage = function () {
	console.log('Привет!');
};
showMessage();
*/

//-----
/*
'use strict'
if (2 > 1) {
	function getSumm() {
		let summ = 1 + 2;
		console.log(summ);
	};
}
getSumm();
*/
/*
let getSumm;

if (2 > 1) {
	getSumm = function () {
		let summ = 1 + 2;
		console.log(summ);
	};
}
getSumm();
*/

//===========================================================
//Функции стрелки(arrow functions)
/*
// Функциональное выражение (Function Expression)
let имя переменной = function (параметр, ...параметр) {
	return выражение;
};

// Cтрелочная функция (arrow function)
let имя переменной = (параметр, ...параметр) => выражение
*/
//-----

// Однострочная стрелочная функция
/*
let getMessage = (text, name) => text + ', ' + name + '!';
console.log(getMessage('Привет', 'Вася'));

// Многострочная стрелочная функция
let getMessage = (text, name) => {
	let message = text + ', ' + name + '!';
	return message;
};
console.log(getMessage('Привет', 'Вася'));
*/

//===========================================================
// Планирование setTimeout и setInterval
/*
Что бы реализовать планирование существуют два метода:
1.	setTimeout позволяет вызвать функцию один раз
	через определённый интервал времени
2.	setInterval позволяет вызывать функцию регулярно,
	повторяя вызов через определённый интервал времени.
*/
/*
setTimeout(функция или код, задержка, параметр, ...параметр);
setInterval(функция или код, задержка, параметр, ...параметр);
*/
/*
function showMessage(text, name) {
	console.log(`${text}, ${name}!`);
}
//setInterval(showMessage, 500, 'Привет', 'Вася');
setTimeout(showMessage, 1000, 'Привет', 'Вася');
*/
/* Recursion setTimeout 
function showMessage(text, name) {
	console.log(`${text}, ${name}!`);
	setTimeout(showMessage, 1000, 'Привет', 'Вася');
}

setTimeout(showMessage, 1000, 'Привет', 'Вася');
*/
/* clearTimeout 
function showNumber(num) {
	console.log(num);
	let timeId = setTimeout(showNumber, 1000, ++num);

	if (num === 6) {
		clearTimeout(timeId);
	}
}
setTimeout(showNumber, 1000, 1);
*/
/*
function showNumber(num) {
	console.log(num);
	if (num < 5) {
		setTimeout(showNumber, 1000, ++num);
	}
}

setTimeout(showNumber, 1000, 1);
*/
//---
/*
let result = 0;
function showNumber(num) {
	result += num;
	console.log(result);
	if (result === 5) {
		clearInterval(timeId);
	}
}
let timeId = setInterval(showNumber, 1000, 1);
*/

/*
function showNumber(num) {
	console.log(num);
	if (num < 15) {
	setTimeout(showNumber, 1000, ++num);
	}
}

setTimeout(showNumber, 1000, 1);
*/
//---
/*
setTimeout(function () {
	console.log('Привет!');
}, 1000);

setTimeout(() => {
	console.log('Привет!');
}, 1000);
*/

//----
/*
function showMessageOne() {
	console.log("А я первый!");
}
function showMessageTwo() {
	console.log("А я второй(");
}

setTimeout(showMessageTwo, 0);

showMessageOne();

*/
//===========================================================
/*
// Применение функций

// Функция соединения строк
function createMassage(text, name) {
	return `${text}, ${name}!`;
}
// Функция вывода в консоль
function showMassage(message) {
	console.log(message);
}
// Объединяющая функция, вызывает обе функции
function initMessage(text, name) {
	showMassage(createMassage(text, name));
}

initMessage('Привет', 'Фрилансер');
*/

//========================================================================================================================================================
//========================================================================================================================================================

// js.info
/*
let userName = 'John';

function showMessage() {
	let userName = "Bob";

	let message = 'Hello, ' + userName;
	alert(message);
}

showMessage();

alert(userName);
*/
/*
function showMessage(from, text) { // parameters: from, text
	alert(from + ': ' + text);
 }
 
 showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
 showMessage('Ann', "What's up?");
 showMessage('Penn', "hello");
 */
/*
 function showMessage(from, text) {
	 from = '*' + from + '*';

	 alert(from + ', ' + text);
 }

 let from = "Ann";

 showMessage(from, "Hello");
 */
/*
 function showMessage(text) {
	 if (text === undefined) {
		 text = 'empty message';
	 }

	 alert(text);
 }

 showMessage("errre");
 */
/*
function showCount(count) {
	alert(count ?? "unknown");
}

showCount(0);
showCount(null);
showCount();
*/
/*
function checkAge(age) {
	if (age >= 18) {
		return true;
	} else {
		return confirm('Do you have permission?');
	}
}

let age = prompt('How old are you?', 18);

if (checkAge(age)) {
	alert('Access granted');
} else {
	alert('Access denied');
}
*/
/*
function checkAge(age) {
	if (age > 18) {
		return true;
	} else {
		return confirm('А родители разрешили?');
	}
}

let age = prompt('Сколько вам лет?', 18);

if (checkAge(age)) {
	alert('Доступ получен');
} else {
	alert('Доступ закрыт');
}
*/
/*
function showMovie(age) {
	if ( !checkAge(age) ) {
	  return;
	}
 
	alert( "Вам показывается кино" ); // (*)
	// ...
 }
 */
/*
function showMovie(age) {
	if (!checkAge(age)) {
		return;
	}

	alert("Вам показывается кино");
}
*/


/*
function showMessage() {
	let message = "Hello I'm JavaScript";
	alert(message);
}

showMessage();
*/
/*
let userName = "John";

function showMessage() {
	let message = 'Hello, '+userName;
	alert(message);
}

showMessage();
*/
/*
let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

let message = 'Hello, ' + userName;
alert(message);
}

alert( userName ); // John before the function call



alert( userName ); // Bob, the value was modified by the function
*/

