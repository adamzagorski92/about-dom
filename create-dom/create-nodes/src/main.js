console.log("Tworzenie  Dom");


/* Tworzenie elementu */
let liElement = document.createElement('li');
let txtNode = document.createTextNode('Seventh(7)')
let attrNode = document.createAttribute('class');
attrNode.value = 'last';

/* Spianamy to w całość */

liElement.appendChild(txtNode);
liElement.setAttributeNode(attrNode);

/* Wpinamy w HTMLa! */
let list = document.getElementById('list');
list.appendChild(liElement);

/* Pomocnicze console.logi */

console.log(liElement);
console.log(txtNode);
console.log(attrNode);
console.log(list);
