let userInput = document.querySelector('input');
let submitButton = document.querySelector('button');
let list = document.querySelector('ul');
let form = document.querySelector('form');

function addToDo(e){
    e.preventDefault();
    let item = document.createElement('li');
    let cancelButton = document.createElement('button');
    cancelButton.innerText = 'X';
    cancelButton.addEventListener('click', removeToDo);
    item.setAttribute('aria-checked', false);
    item.innerText = userInput.value;
    item.addEventListener('click', completeToDo);
    item.appendChild(cancelButton);
    list.appendChild(item);

}

function removeToDo(e){
    e.stopPropagation();
    e.target.parentNode.remove();
}

function completeToDo(e){
    if(e.target.getAttribute('aria-checked') === "true"){
        e.target.setAttribute('aria-checked', false);
    } else{
        e.target.setAttribute('aria-checked', true);

        let aside = document.querySelector('aside')
        aside.setAttribute('style', 'visibility: initial');

        setTimeout(() => {
            aside.setAttribute('style', 'visibility: hidden');
        }, 2000);
    }

    
}

form.addEventListener('submit', addToDo);

