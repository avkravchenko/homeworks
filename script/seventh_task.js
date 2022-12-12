/* Задание 7.

Дан массив. Нужно вывести в консоль количество чётных и нечётных элементов в массиве. Если в массиве есть нулевой элемент, то он учитывается и выводится отдельно. 

При выполнении задания необходимо учесть, что массив может содержать не только числа, но и, например, знаки, null и так далее. */

const arr = [0, 1, 2, null, 3, 4, 'i', 5, 6, true, 7, 8, {phoneBrand: 'iphone', phoneModel: 'XR', phonePrice: 300}, 9, 10];

const evenArr = [];

const oddArr = [];

const otherArr = [];

function letsFindOut(arr) {
    arr.every(function(elem) {
        
        if (elem === +elem && elem % 2 === 0 && elem > 0) {
            return evenArr.push(elem);
        }

        else if (elem === +elem && elem % 2 !== 0 && elem !==0){
            return oddArr.push(elem);
        }

        else {
            return otherArr.push(elem);
        }
    })
}

letsFindOut(arr);

console.log(evenArr);
console.log(oddArr);
console.log(otherArr);

console.log(evenArr.length);
console.log(oddArr.length);
console.log(otherArr.length);
