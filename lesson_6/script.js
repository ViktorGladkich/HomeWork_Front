// Задача 1

/*

for (let i = 0; i <= 10; i += 2) {
    console.log(i);
  }
  */

// Задача 2

/*

for (let i = 55; i >= 20; i--) {
  console.log(i);
}
const numbers = [3, 5, 11, 2, 8, 1, 6];
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}
const numbers_squared = [];
for (let i = 0; i < numbers.length; i++) {
  const squared = numbers[i] ** 2;
  numbers_squared.push(squared);
}
console.log(numbers_squared);

  */
  
  // Задача 3:
  //Создать переменную last_elem и передать в нее последний элемент из сформированного 
  //массива numbers_squared (обратиться к элементу массива по индексу)
/*

  const numbers = [3, 5, 11, 2, 8, 1, 6];
  const numbers_squared = [];
  for (let i = 0; i < numbers.length; i++) {
    const squared = numbers[i] ** 2;
    numbers_squared.push(squared);
  }
  console.log(numbers_squared);
  const last_elem_index = numbers_squared.length - 1;
  const last_elem = numbers_squared[last_elem_index];
  console.log(last_elem);
  */

  // Задача 4 

/*
  const user = {
    first_name: 'Ivan',
    last_name: 'Ivanov',
    age: 20,
    salary: 500
  };
  const name = `${user.first_name} ${user.last_name}`;
  const age = user.age;
  console.log(`User's name is ${name}. He is ${age} years old.`);
  */
  

  

