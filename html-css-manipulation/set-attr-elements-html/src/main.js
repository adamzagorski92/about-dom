let list = document.getElementById('list');

list.setAttribute('role','list');

for (let listItem of list.children) {
    listItem.setAttribute('role', 'listitem');
}


console.log(list);
console.log(list.getAttribute('id'));