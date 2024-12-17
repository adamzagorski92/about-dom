console.log("Event registration");

// PIERWSZY SPOSÓB REJESTRACJI ZDARZENIA
const sumUp = () => {
    console.log('Suming up');
}

// DRUGI SPOSÓB REJESTRACJI ZDARZENIA
let btnSumUp = document.getElementById('sum-up');
// btnSumUp.onclick= sumUp; // nie dajemy w funckji nawiasów(), bo chcemy, aby uruchomiła się na click, a nie wtedy, gdy załadujemy stronę

// TRZECI SPOSÓB REJESTRACJI ZDARZENIA
// using addEventListener()

btnSumUp.addEventListener('click', sumUp); // ważne, aby funkcja była bez nawiasu!

// btnSumUp.addEventListener('click', () => {
//     console.log('Summing up - anonymous');
// }); // Możemy też napisac swoją instrukcję w tym miejscu


console.log(btnSumUp);