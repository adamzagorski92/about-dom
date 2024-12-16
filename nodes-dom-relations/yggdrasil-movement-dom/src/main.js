let list = document.getElementById('list');
 
// console.log(list); // lista
// console.log(list.childNodes); // list.childNodes
// console.log(list.children); //list.children

// console.log(list.firstChild); //list.firstChild
// console.log(list.firstElementChild); //list.firstElementChild
// console.log(list.lastChild); //list.lastChild
// console.log(list.lastElementChild); list.lastElementChild

let firstElementChild = list.firstElementChild;
let lastElementChild = list.lastElementChild;

// console.log(firstElementChild);
// console.log(lastElementChild);

// console.log(firstElementChild.parentNode);
// console.log(firstElementChild.parentElement);

// console.log(firstElementChild.nextSibling);
// console.log(firstElementChild.nextElementSibling);

// console.log(lastElementChild.previousSibling);
// console.log(lastElementChild.previousElementSibling);

console.log(firstElementChild.hasChildNodes());
console.log(firstElementChild.childNodes);
console.log("------------");
console.log( (firstElementChild.children.length >0) ? true: false);

console.log("------------");
console.log(firstElementChild.closest('#list'));

