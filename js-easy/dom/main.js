const items = document.querySelectorAll('.list li');

items.forEach((item) => {
    console.log(item.child);
});

const elem = document.querySelector('.list');
const first = elem.firstElementChild;
const last = elem.lastElementChild;
console.log(first.textContent);
console.log(last.textContent);

const elem2 = document.querySelector('img');
console.log(elem2.getAttribute('src'));
console.log(elem2.setAttribute('src', 'https://placehold.it/400x200'));

const list = document.querySelector('.list');
const add = () => {
    const newItem = document.createElement('li');
    newItem.textContent = '新しいアイテム';
    list.appendChild(newItem);
};
const remove = () => {
    list.removeChild(list.lastElementChild);
};

const addButton = document.querySelector('#add');
const removeButton = document.querySelector('#remove');

addButton.addEventListener('click', () => {
    add();
});

removeButton.addEventListener('click', () => {
    remove();
});

