const addArea = document.querySelector('#add-area');
const addBtn = document.querySelector('.add-btn');
const todo = document.querySelector('#todo');

const addFunc = () => {
    let isInputted = addArea.value;
    const list = document.createElement('li');
    const compBtn = document.createElement('button');
    if (isInputted === '') {
        alert('空欄です！');
    } else {
        list.textContent = isInputted;
        compBtn.textContent = '完了';
        todo.appendChild(list);
        list.appendChild(compBtn);
        addArea.value = '';
    }

    const compFunc = () => {
        todo.removeChild(list);
    };

    compBtn.addEventListener('click', compFunc);
};

addBtn.addEventListener('click', addFunc);
