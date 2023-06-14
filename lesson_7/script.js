//Напишите функцию, которая принимает два числовых аргумента
//и выводит в консоль все четные числа от большего к меньшему.
/*
function printEvenNumbers(num1, num2) {
    const maxNum = Math.max(num1, num2);
    const minNum = Math.min(num1, num2);
  
    for (let i = maxNum; i >= minNum; i -= 2) {
      if (i % 2 == 0) {
        console.log(i);
      }
    }
  }
  
  printEvenNumbers(20, 2);
  */

// Напишите функцию power, которая принимает два числовых аргумента
//(основание степени и саму степень) и возвращает число в указанной степени.
//Значение степени должно быть указано по умолчанию 2.
/*  
function power(num, num2 = 2) {
    if (num2 == 0) {
      return 1;
    }
  
    let result = num;
    for (let i = 1; i < num2; i++) {
      result *= num;
    }
  
    return result;
  }
  
  console.log(power(6)); 
  console.log(power(5, 5)); 
  console.log(power(9, 0)); 
*/

// Напишите функцию, которая принимает числовой аргумент n
// и считает сумму чисел от 1 до n.

/*
function sumNumbers(num) {
    let sum = 0;
    for (let i = 1; i <= num; i++) {
      sum += i;
    }
    return sum;
  }
  
  console.log(sumNumbers(5)); 
  console.log(sumNumbers(10)); 
  */
// Напишите функцию, которая принимает два числовых аргумента n и m
// и считает сумму четных чисел и нечетных чисел от n до m.
//Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

/*  
function calcEven(num1, num2) {
    let evenSum = 0;
    let oddSum = 0;
  
    for (let i = num1; i <= num2; i++) {
      if (i % 2 == 0) {
        evenSum += i;
      } else {
        oddSum += i;
      }
    }
  
    console.log("Сумма четных чисел:", evenSum);
    console.log("Сумма нечетных чисел:", oddSum);
  }
  
  calcEven(1, 10);
  */
// Напишите функцию, которая принимает в качестве аргументов массив строк, 
// а возвращает первый самый длинный элемент массива. Если входной массив пуст, 
// функция возвращает null. Если есть несколько одинаковых по длине элементов 
// функция возвращает первый из этих элементов. (string.length > string.length) - сравнение длины строк

/*
function longString(strings) {
  if (strings.length == 0) {
    return null;
  }
  let longest = strings[0];
  for (let i = 1; i < strings.length; i++) {
    if (strings[i].length > longest.length) {
      longest = strings[i];
    }
  }

  return longest;
}
const strings = ["one", "two", "three"];
console.log(longString(strings));
*/
