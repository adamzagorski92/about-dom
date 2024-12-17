console.log("How to download class");

let list = document.getElementById('list');
let firstElement = list.firstElementChild;
let lastElement = list.lastElementChild;

firstElement.setAttribute('class', 'blueviolet');

firstElement.className = firstElement.className + ' first';

lastElement.classList.add('last');
lastElement.classList.add('special');
lastElement.classList.add('blueviolet');

lastElement.classList.remove('special');

lastElement.classList.toggle('super-special'); //jeśli nie ma takiej klasy to ją doda
lastElement.classList.toggle('super-special'); // jeśli jest taka klasa to ją usunie

console.log(list);
console.log(firstElement);
console.log(lastElement);
console.log(lastElement.classList);