const input = document.querySelector('#favchap');
const addButton = document.querySelector('button[type="submit"]');
const list = document.querySelector('#list');

const li = document.createElement('li');

const deleteButton = document.createElement('button');

li.textContent = input.value;

deleteButton.textContent = 'x';

li.append(deleteButton);
list.append(li);