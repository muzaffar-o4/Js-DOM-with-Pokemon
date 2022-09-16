// let persons = [
//     { userId: 1, username: 'Ali', surname: 'Valiyev', image: 'https://picsum.photos/200/200', age: 22 },
//     { userId: 2, username: 'nodir', surname: 'Valiyev', image: 'https://picsum.photos/200/200', age: 21 },
//     { userId: 3, username: 'qodir', surname: 'Valiyev', image: 'https://picsum.photos/200/200', age: 21 },
//     { userId: 4, username: 'botir', surname: 'Valiyev', image: 'https://picsum.photos/200/200', age: 21 },
//     { userId: 5, username: 'abbos', surname: 'Valiyev', image: 'https://picsum.photos/200/200', age: 21 },
//     { userId: 6, username: 'jabbor', surname: 'Valiyev', image: 'https://picsum.photos/200/200', age: 22 },
//     { userId: 7, username: 'salim', surname: 'Valiyev', image: 'https://picsum.photos/200/200', age: 23 },
//     { userId: 8, username: 'sarvar', surname: 'Valiyev', image: 'https://picsum.photos/200/200', age: 22 },
//     { userId: 9, username: 'anvar', surname: 'Valiyev', image: 'https://picsum.photos/200/200', age: 25 },
//     { userId: 10, username: 'salima', surname: 'Valiyeva', image: 'https://picsum.photos/200/200', age: 22 },
//     { userId: 11, username: 'malika', surname: 'Valiyeva', image: 'https://picsum.photos/200/200', age: 20 },
//     { userId: 12, username: 'nodira', surname: 'Valiyeva', image: 'https://picsum.photos/200/200', age: 22 },
// ];


// let container = document.getElementById('div');

// for (let i = 0; i < persons.length; i++) {

//     let cardEl = document.createElement('div');
//     cardEl.setAttribute('class', 'card');

//     let imgEl = document.createElement('img');
//     imgEl.setAttribute('src', persons[i].image);
//     imgEl.style.width = '100%';

//     let h3El = document.createElement('h3');
//     h3El.textContent = persons[i].username.toUpperCase();

//     let h4El = document.createElement('h4');
//     h4El.textContent = persons[i].surname;

//     let pEl = document.createElement('p');
//     pEl.textContent = persons[i].age;

//     cardEl.append(imgEl, h3El, h4El, pEl);

//     container.append(cardEl);

// }





// HomeWork in JavaScript

// const list = document.body.querySelector('.list')

// let userName = prompt('Ismingizni kiriting?');


// const arr = new Set();

// for (let i = 0; i < userName.length; i++) {
//     userName = userName.charAt(0).toUpperCase() + userName.slice(1)
//     if (userName[i] === '-') {
//         alert("'Natog'ri ma'lumot..!!")
//         arr.clear()
//     }
//     else {
//         arr.add(userName);
//         userName = prompt('Ismingizni kiriting?');
//     }
// }


// arr.forEach((ism) => {
//     let newLi = document.createElement('li')

//     newLi.textContent = ism

//     list.appendChild(newLi)
// });


import pokemon from './pokemon.js';

let container = document.getElementById('div');

pokemon.forEach((el) => {

    let cardEl = document.createElement('div');
    cardEl.setAttribute('class', 'card');

    let imgEl = document.createElement('img');
    imgEl.setAttribute('src', el.img);
    imgEl.style.width = '100%';

    let h3El = document.createElement('h3');
    h3El.textContent = el.name.toUpperCase();

    let h4El = document.createElement('h4');
    h4El.textContent = `This is num: ${el.num}`;

    let pEl = document.createElement('p');
    pEl.textContent = `This is height: ${el.height}, This is weight: ${el.weight}`;

    cardEl.append(imgEl, h3El, h4El, pEl);

    container.append(cardEl);
})