console.log("Mouse event");

let list = document.getElementById('list');

const mouseEvent = (e) => {
    console.log(`Event: ${e.type}),
        currentTarget: <${e.currentTarget.tagName.toLowerCase()}
        class="${e.currentTarget.className}"></${e.currentTarget.tagName.toLowerCase()}>,
        target: <${e.target.tagName.toLowerCase()} class="${e.target.className}"></${e.target.tagName.toLowerCase()}>`);

        console.log(`Mouse position: X=${e.clientX}, Y=${e.clientY}`); // śledzenie położenia myszy - zadziała dla mousemove
}

for (let listItem of list.children) {

    //listoItem.firstElementChild.innerText - zawiera w HTML tekst z nazwą zdarzzenia, pod które podpinam funkcję

    listItem.addEventListener(listItem.firstElementChild.innerText, mouseEvent);


}

// brakuje mi nieco zastosowań praktycznych wszystkich eventów myszy