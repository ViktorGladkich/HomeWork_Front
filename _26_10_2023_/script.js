//const object = [
//    {
//        name: "Viktor",
//        age: 28,
//        email: "viktor@mail.ru"
//    },
//    {
//        name: "Maria",
//        age: 17,
//        email: "maria@mail.ru"
//    },
//    {
//        name: "Slava",
//        age: 19,
//        email: "slava@mail.ru"
//    }
//]
//const findObj = document.querySelector("object")
//for (let i = 0; i < object.length; i++) {
//   if (object[i].age >= 18) {
//     console.log(object[i].name)
//   }
//    
//}


// Написать цикл, который создает множество параграфов с каждым десятым числом 
// в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50). 
// Добавить созданные параграфы в div с классом numbers.
const findNumbers = document.querySelector(".numbers")
for (let i = 100; i >= 50; i-=10) {
    findNumbers.insertAdjacentHTML("beforeend", `<p></p>`)
}

// Написать цикл, который проходится по массиву строк, 
// для каждой строки создает параграф и добавляет его в div с классом strings_container. 
// Строки взять произвольные.
const arrStrings = [ "Viktor", "Slava", "Arsen", "Alina", "Bogdan"]
const container = document.querySelector(".strings_container")
for (let i = 0; i < arrStrings.length; i++) {
    container.insertAdjacentHTML("beforeend", `<p>${arrStrings[i]}</p>`)
}

// Написать цикл, который проходится по массиву с объектами - у объектов свойства first_name, 
// last_name и  age (данные взять произвольные) - 
// и создает карточки только для совершеннолетних пользователей. 
// Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. 
// Добавить все карточки в div с классом users_container.
const object = [
    {
        first_name: "Viktor",
        last_name: "Gladkich",
        age: 28
    },
    {
        first_name: "Alina",
        last_name: "Baranova",
        age: 17
    },
    {
        first_name: "Bogdan",
        last_name: "Lechanow",
        age: 32
    },
    {
        first_name: "Alex",
        last_name: "Gardalov",
        age: 16
    }
]
const users_container = document.querySelector(".users_container")
for (let i = 0; i < object.length; i++) {
    if (object[i].age >= 18) {
        users_container.insertAdjacentHTML("beforeend", `<p>${object[i].first_name} ${object[i].last_name} ${object[i].age}</p>`)
    }
}


