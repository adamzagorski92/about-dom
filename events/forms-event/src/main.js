console.log("Zdarzenia formularzy");

let formLogin = document.querySelector('form.login');

const submitForm = (event) => {
    event.preventDefault();
    console.log(`submit() - blocked by event.preventDefault()`);
}

const resetForm = (event) => {
    console.log(`reset()`);
}

formLogin.addEventListener('submit', submitForm);
formLogin.addEventListener('reset', resetForm);

// target.addEventListener(type (String), listener (function), options (optional));

// DOSTĘPNE OPCJE W OPTIONS
// capture // true – nasłuchuje zdarzenia w fazie przechwytywania (capture phase), false – w fazie bąbelkowania.
// once // true – listener wywoływany tylko raz, po czym automatycznie usuwany.
// passive // true – oznacza, że preventDefault() nie będzie używane, co poprawia wydajność przy zdarzeniach scrolla.