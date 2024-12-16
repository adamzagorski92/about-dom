console.log("Dostęp do elementów DOM");

// metody zwracające pojedynczy 'Element'

let articles = document.getElementById('articles'); // przyjmuje parametr ID i zwraca cay elementhtml 

console.log(articles);

let paragraph = document.querySelector('.content');

console.log(paragraph);

// metody zwracające kolekcję 'HTMLCollection'

let paragraphs = document.getElementsByClassName('content'); // zwraca wszystkie elementy w formie tablicy/kolekcji
console.log(paragraphs);

let allParagraphs =document.getElementsByTagName('p');

console.log(allParagraphs);

let paragraphContent = document.querySelectorAll('p.content');

console.log(paragraphContent);

