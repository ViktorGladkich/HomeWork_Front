/*
1. Задача
Написать программу, которая через prompt считывает число и выводит 
в консоль число равное 10% от введенного числа:

const number = +prompt("Введите число");
const numberPercent = number * 0.1;
console.log("10% от числа:", numberPercent);

*/

/*
2. Задача
Написать программу, которая получает два числа и выводит наименьшее

const number1 = +prompt("Введите число");
const number2 = +prompt("Введите число");
const minNumber = Math.min(number1, number2);
console.log("Наменьшее число:", minNumber);

*/

/*
3. Задача
Написать программу, которая считывает через prompt число и выводит 
одно из следующих сообщений: Число меньше 100, Число больше 100 или Число равно 100

const number = +prompt("Введите число");
if (number < 100) {
  console.log("Число меньше 100");
} else if (number > 100) {
  console.log("Число больше 100");
} else {
  console.log("Число равно 100");
}

*/

/*
4. Задача
Написать программу, которая запрашивает у пользователя его имя и возраст (в годах) 
и выводит в консоль сообщение Hello, name, если пользователь совершеннолетний, 
или Hi, name, если пользователь несовершеннолетний.

const userName = prompt("Введите ваше имя");
const age = +prompt("Введите ваш возраст");
if (age >= 18) {
  console.log("Hello, " + userName);
} else {
  console.log("Hi, " + userName);
}

*/
