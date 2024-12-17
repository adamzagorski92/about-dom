console.log("Add and change CSS");

let list = document.getElementById('list');

let firstEl = list.firstElementChild;
let lastEl = list.lastElementChild;

firstEl.style.color = 'red';

console.log(list);
console.log(firstEl);
console.log(lastEl);
console.log(firstEl.style.color);
console.log("Nie pojawi się kolor, bo za pomocą '.style' nie da się pobrać koloru z css");
console.log(document.querySelector('h1 > span').style.color);
console.log("-------End of comment----------")

lastEl.style.display = 'none';
