// Задача 1: Напишите функцию, которая принимает два числовых аргумента
// и возвращает наименьшее из них.

function minNumber(num1, num2) {
    if(num1 < num2) {
        return num1
    } else {
        return num2
    }
}
console.log(`Наименьшее число ${minNumber(10,5)}`)

//Задача 2: Напишите функцию, которая принимает два числовых аргумента 
// и выводит в консоль все четные числа от большего к меньшему.

function evenNumber(num1, num2) {
    if (num1 < num2) {
        const valueTemp = num1;
        num1 = num2;
        num2 = valueTemp;
    }

    for (let i = num1; i >= num2; i--) {
        if (i % 2 == 0) {
            console.log(i);
        }
    }
}
evenNumber(13, 5);

// Задача 3: Напишите функцию power, которая принимает два числовых аргумента 
// (основание степени и саму степень) и возвращает число в указанной степени. 
// Значение степени должно быть указано по умолчанию 2.

function power(number, grade = 2) {
    return Math.pow(number, grade);
}
console.log(`Ответ: ${power(2, 6)}`)
console.log(`Ответ: ${power(5)}`)

// Задача 4: Напишите функцию, которая принимает числовой аргумент n 
// и считает сумму чисел от 1 до n.

function sumNumber(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(`Ответ: ${sumNumber(7)}`)

// Задача 5: Напишите функцию, которая принимает два числовых аргумента n и m 
// и считает сумму четных чисел и нечетных чисел от n до m. 
//Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

function sumEvenNum(n, m) {
    let sumEven = 0;
    let sumNotEven = 0;

    for (let i = n; i <= m; i++) {
        if (i % 2 === 0) {
            sumEven += i;
        } else {
            sumNotEven += i;
        }
    }

    console.log("Сумма четных чисел: " + sumEven);
    console.log("Сумма нечетных чисел: " + sumNotEven);
}
sumEvenNum(2, 8);

// Задача 6: Напишите функцию, которая принимает в качестве аргументов массив строк, 
// а возвращает первый самый длинный элемент массива. 
// Если входной массив пуст, функция возвращает null. 
// Если есть несколько одинаковых по длине элементов - функция возвращает первый из этих элементов. 

function longesElement(strings) {
    if (strings.length == 0) {
        return null;
    }

    let longElement = strings[0];
    
    for (let i = 1; i < strings.length; i++) {
        if (strings[i].length > longElement.length) {
            longElement = strings[i];
        }
    }
    
    return longElement;
}
const strings = ['one', 'two', 'three', 'viktor'];
console.log(`Самый длинный массив: ${longesElement(strings)}`)




