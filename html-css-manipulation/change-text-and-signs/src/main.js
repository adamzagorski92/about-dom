let h1 = document.querySelector('h1');

console.log(h1.innerText); // pobiera tylko tekst 
console.log(h1.innerHTML); // wywołuje zawartość znacznika h1
console.log(h1.outerHTML); // wszystko związane z h1

// h1.innerText= '<span>DOM- Document Object Model</span> '; //to wstawia tylko tekst, więc span nie zostanie przekształcony na znacznik
// h1.innerHTML= '<span>DOM- Document Object Model</span> '; //zmienia wewnętrznego HTML
h1.outerHTML= '<span>DOM- Document Object Model</span> '; // zmienia treść wewnątrz znacznika jak i sam znacznik

