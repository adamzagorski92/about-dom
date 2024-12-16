console.log("`childNodes' vs 'children'");

let list = document.getElementById('list');

console.log(list.childNodes); // zwraca to węzly drzewa DOM (nawet białe znaki, spacje, twarde spacje itp.)
console.log(list.children); //zwraca węzły które są elementami HTML