
// kahoot
// function greet () {
//     console.log('Hello!');
//     // return 'Mike'
// }
//
// console.log(greet());


// Function expression



// const sum = function (value1, value2) {
//     const result = value1 + value2;
//     return result
// }
//
// console.log(sum(5, 10));
//
//
//
//
// // Function declaration
//
// console.log(multiply(5, 10));
//
// function multiply (value1, value2) {
//     const result = value1 * value2;
//     return result;
// }
//
// console.log(a)
// var a = 5;
// console.log(a)






// Псевдомасив arguments

// function getSum () {
//     let sum = 0;
//     console.log(arguments.length);
//
//     for (const number of arguments) {
//         sum += number;
//     }
//
//
//
//     return sum;
// }
//
// console.log(getSum(5, 5, 10, 20, 60, 20));





// Області видимості, присвоєння за посиланням та значенням

// // Example 1
// let someValue = 4;
//
// if (true) {
//
//     someValue = 11;
// }
//
// console.log(someValue);



// // Example 2
// let someValue = 4;
//
// if (true) {
//     let someValue = 11;
//     console.log(someValue);
// }
//
// console.log(someValue);



//// Example 3
// let someValue = 4;
//
// if (true) {
//     if (true) {
//         someValue = 24;
//     }
//     let someValue = 11;
// }
//
// console.log(someValue);

// console.log(hello)
//
// let hello = 'Hey';

// // Example 4
// let someValue = 2;
//
//
// function checkScope(someValue) { // let someValue = 2
//
//     someValue = 45;
//     return someValue;
// }
//
// checkScope(someValue)
//
// console.log(someValue);


// Example 5
// let someValue = 2;
//
//
// function checkScope() {
//     someValue = 45;
//     return someValue;
// }
//
// checkScope(someValue)
//
// console.log(someValue);



// // Example 6
// let someValue = 2;
//
//
// function checkScope() {
//     someValue = 42;
//     return someValue;
// }
//
// checkScope()
//
// console.log(someValue);



// Example 7
// let someArray = ['Hello', 'my', 'name', 'scope'];
//
//
// function checkScope(arr) {
//     arr.splice(0,3)
// }
//
// checkScope(someArray)
//
// console.log(someArray);

// let a = 5;
//
// function changeNumber (number) {
//     let a;
//     a = 10
// }
//
// changeNumber(a)
//
// console.log(a);



// Example 8
// let someArray = ['Hello', 'my', 'name', 'scope'];
//
// function checkScope(arr) {
//     arr = Array.from(arr)
//     arr.splice(0,3)
// }
//
// checkScope(someArray)
//
// console.log(someArray);












// Практика



// Task-1;
// Створи функцію яка буде перевіряти чи кожен елемент масиву більше ніж вказане значення. Функція приймає два параметри.
// 1 - Масив чисел
// 2 - Число яке потрібно порівнювати з усіма елементами масиву.
// Функція повертає повідомлення про успішну або не успішну перевірку (повідомлення "Success ✅" "Fail ❌")

// const numbers = [25, 12, 67, 40, 18];
//
// function checkValue(numberArray, minValue) {
//     let isAllNumbersBigger = true;
//
//     for (const number of numberArray) {
//         if (minValue > number) {
//             isAllNumbersBigger = false;
//         }
//     }
//
//     return isAllNumbersBigger;
// }
//
// console.log(checkValue(numbers, 10));
// console.log(checkValue(numbers, 13));




// Застосування функції + патерн раннє повернення

// const numbers = [25, 12, 67, 40, 18];

// function checkValue(arr, target) {
//     for (const number of numberArray) {
//         if (minValue > number) {
//             return false;
//         }
//     }
//
//     return true;
// }

// console.log(checkValue(numbers, 10));
// console.log(checkValue(numbers, 13));







// Task-2
// Створити функцію яка буде розбивати початковий масив на потрібну кількість елементів розділюячи на декілька масивів.Функція приймає 2 параметри
// 1 - масив значень
// 2 - потрібну кількість елементіа в масиві
//  Функція повертає масив масивів


// const data = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// function getCombination(arr, count) {
//     const result = [];
//
//     for (let i = 0; i < arr.length; i += count) {
//         const arrayPart = arr.slice(i, i + count);
//         console.log(arrayPart)
//         result.push(arrayPart);
//     }
//
//     return result;
// }
// console.log(getCombination(data, 2)); // [[1, 2], [3, 4],[5, 6],[7, 8], [9]]
// console.log(getCombination(data, 3)); // [[1, 2, 3], [4, 5, 6], [7, 8, 9]]









// Example 3 - Площа прямокутника
// Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
// значення яких будуть передані до параметра dimensions у вигляді рядка. Значення гарантовано розділені пробілом.

// function getRectArea(dimensions) {
//     const arrNumbers = dimensions.split(' ');
//     const firstSide = Number(arrNumbers[0]);
//     const secondSide = +arrNumbers[1];
//
//     return firstSide * secondSide;
// }
//
// console.log(getRectArea('8 11'));
// console.log(getRectArea('15 11'));

// let arr = [];
//
// console.log(fillArray(2, 10));
//
// function fillArray(min, max) {
//     console.log(min)
//     for (let i = min; i <= max; i += 2) {
//         arr.push(i)
//     }
// }
//
// console.log(arr)

// Напиши функцію яка на основі масиву користувачів що поставили лайк формує та повертає рядок.
// Функцію має повернути текст, як вказано у прикладах:

// [] --> "no one likes this"
// ["Peter"] --> "Peter likes this"
// ["Jacob", "Alex"] --> "Jacob and Alex like this"
// ["Max", "John", "Mark"] --> "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"] --> "Alex, Jacob and 2 others like this"

// function createText (arr) {
//     switch (arr.length) {
//         case 0:
//             return "no one likes this";
//         case 1:
//             return `${arr[0]} likes this`;
//         case 2:
//             return `${arr[0]} and ${arr[1]} likes this`;
//         case 3:
//             return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
//         default:
//             return `${arr[0]}, ${arr[1]} and ${arr.length - 2} others like this`;
//     }
// }
//
// console.log(createText([]));
// console.log(createText(["Peter"]));
// console.log(createText(["Jacob", "Alex"]));
// console.log(createText(["Max", "John", "Mark"]));
// console.log(createText(["Alex", "Jacob", "Mark", "Max"]));