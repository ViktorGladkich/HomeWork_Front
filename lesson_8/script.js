// Задача:
// Написать цикл, который создает множество параграфов с каждым десятым числом
// в промежутке от 100 до 50 (т.е. 100, 90, 80, 70, 60, 50).
// Добавить созданные параграфы в div с классом numbers.

// const numbersDiv = document.querySelector(".numbers");
// for (let i = 100; i >= 50; i -= 10) {
//   const paragraph = document.createElement("p");
//   paragraph.innerText = i;
//   numbersDiv.appendChild(paragraph);
// }

// Задача:
// Написать цикл, который проходится по массиву строк, для каждой строки
// создает параграф и добавляет его в div с классом strings_container.
// Строки взять произвольные.

// const strings = ["Первая строка", "Вторая строка", "Третья строка"];
// const container = document.querySelector(".strings_container");
// let paragraphsHTML = "";

// for (let i = 0; i < strings.length; i++) {
//   paragraphsHTML += `<p>${strings[i]}</p>`;
// }
// container.innerHTML = paragraphsHTML;

const users = [
  { firstName: "Viktor", lastName: "Gladkich", age: 27 },
  { firstName: "Oleg", lastName: "Baranov", age: 18 },
  { firstName: "Hamzat", lastName: "Esterbaev", age: 32 },
  { firstName: "Alex", lastName: "Donaev", age: 43 },
];

const container = document.querySelector(".users_container");
let cardsUsers = "";

for (let i = 0; i < users.length; i++) {
  if (users[i].age >= 18) {
    cardsUsers += `
        <div class="user_card">
          <p>Имя: ${users[i].firstName}</p>
          <p>Фамилия: ${users[i].lastName}</p>
          <p>Возраст: ${users[i].age}</p>
        </div>
      `;
  }
}
container.innerHTML = cardsUsers;
