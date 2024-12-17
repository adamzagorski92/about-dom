console.log("Remove event");

const sumUp= () => {
    console.log('Summing up');
}

let btnSumUp = document.getElementById('sum-up');

// btnSumUp.removeAttribute('onclick');

//trochę inaczej działa, jak przypisuję funkcję w JS za pomocą callback

btnSumUp.onclick=sumUp; //Aby t o usunąć nalezy zrobić następiującop

// btnSumUp.onclick=null;

// natomiast używając eventListenera  musimy zrobić to jeszcze inaczej

btnSumUp.addEventListener('click', sumUp);

// btnSumUp.removeEventListener('click', sumUp);

// Przypinając funkcję anonimową niestety nie da jej się odpiąć, więc działaj zawsze tak, aby je podpinać pod zmienne

// Jeśli podepniesz dwie funkcje na raz, to możesz do tego dotrzeć za pomocą getEventListeners(obiekt) w konsoli przeglądarki - w JS to nie zadziała! 