console.log("Remove event");

// event properties
const sumUp= (event) => {
    // console.log(event);
    console.log(`Target: ${event.target.outerHTML}`);
    console.log(`Event type: ${event.type}`);
}

let btnSumUp = document.getElementById('sum-up');

btnSumUp.addEventListener('click', sumUp);
btnSumUp.addEventListener('dblclick', sumUp);


//event.preventDefoult()

let a108 = document.getElementById('akademia108');
a108.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('Default action stopped');
});

// event.stiopPropagation()

for (let btn of document.querySelectorAll('button.edit')) {
    btn.addEventListener('click', (event) => {
        event.stopPropagation();
        alert('Edit user');
    });

    btn.closest('div.row').addEventListener('click', (event) =>{
        alert('About user');
    });
}


