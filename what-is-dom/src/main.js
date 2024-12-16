console.log("What is DOM?");

// OBIEKT WINDOW

// window.alert("Hello!");
// alert("Hello!"); // to korzysta z DOM domyslnie

// window.prompt("Podaj swój wiek");

// let age = window.prompt("Podaj swój wiek");

// console.log(`Masz ${age} lat`);

// window.confirm("Akceptuję umowę");

// let accept = window.confirm("Akceptuję umowę");

// if(accept) {
//     console.log("Umowa zaakceptowana");
// } else {
//     console.log("Umowa nie zaakceptowana")
// }

// console.log(window); // tak mogę sobie sprawdzic jakie metody moge wywolać za pomocą DOM

// console.log(`Wewnętrzna wysokość okna przeglądarki wynosi ${window.innerHeight}`);
// console.log(`Zewnętrzna wysokość okna przeglądarki wynosi ${window.outerHeight}`);

// window.document.write('<h2>Adam</h2>');

// var number = 108;
// console.log(window);



// OBIEKT document // wewnętrzny DOM elementu window

// console.log(window.document);
// console.log(document);

// console.log(document.location); // można uruchomić przez live server - plugin do VSC

console.log(document.doctype);
console.log(document.head);
console.log(document.body);
console.log(document.title);
console.log(document.getElementsByTagName('body'));
console.log(document.documentElement); // element tylko do odczytu
console.log(document);
