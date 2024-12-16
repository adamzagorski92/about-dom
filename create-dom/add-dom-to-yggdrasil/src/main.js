let liElement = document.createElement('li'); // tworzy element <li>
let txtNode = document.createTextNode('Seventh (7)'); // tworzy tekst
let attrNode = document.createAttribute('class'); // tworzy atrybut class
 
attrNode.value = 'last'; // ustawia wartość dla atrybutu class
 

// apen.child
// let list = document.getElementById('list');
// let documentFragment = new DocumentFragment();
// documentFragment.appendChild(liElement);
// list.appendChild(documentFragment);

// console.log(documentFragment);

list.appendChild(liElement); // dodaj element liElement do elementu list
 
 
list.insertBefore(liElement, list.firstElementChild); /* dodaj element liElement
przed element będący pierwszym dzieckiem elementu list */
  
 
list.replaceChild(liElement, list.firstElementChild); /* dodaj element liElement
zastępując pierwsze dziecko elementu list */
 
 
list.lastElementChild.insertAdjacentElement('afterend', liElement); /* dodaj element
liElement za ostatnim dzieckiem elementu list */
 
 
list.firstElementChild.insertAdjacentHTML('beforebegin', '<li>Zero (0)</li>') /* dodaj
element <li>Zero (0)</li> przed pierwszym dzieckiem elementu list */
 
 
list.lastElementChild.insertAdjacentText('beforeend', ' :)'); /* dodaj ':)' za ostatnim
dzieckiem elementu list */   


/* Czyli jest sporo metod, za pomocą, których możemy sobie sterować takim HTML'em i prawdopodobnie CSS'em również! W takim razie naszym zadaniem jest stworzyć stronę całkowicie za pomocą JS, aby działała ona jak aplikacja, a nie jak statyczna strona internetowa. Powoli zaczynam kumać o co tu chodzi. W React prawdopodobnie wszystko będzie się tworzyło za pomocą JS. Ale trzeba znać CSS i HTML, aby wiedzieć co konkretnie można tworzyć. */