/* Задание 3.

Дана строка. Необходимо вывести в консоль перевёрнутый вариант. Например, "Hello" -> "olleH". */

//first option

let x = "example";

let splitx = x.split('');

let reversesplit = splitx.reverse();

let complete = reversesplit.join('');

console.log(complete);

//second option

let ourString = "murder";

function reverseStr(ourString) {
    let result = "";
    for (let i = ourString.length - 1; i >= 0; i--) {
        result += ourString[i];
    }
    return result;
}

console.log(reverseStr(ourString));
