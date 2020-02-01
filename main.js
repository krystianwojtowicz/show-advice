let tab = ['walcz', 'przemysl to jeszcze raz'];
const btn = document.querySelector('.add');
const reset = document.querySelector('.clean');
const show = document.querySelector('.showAdvice');
const Possibilities = document.querySelector('.showOptions');

const add = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const newName = input.value;
    tab.push(newName);
    console.log(tab)
}

const resetOptions = (e) => {
    e.preventDefault();
    tab = [];
    console.log(tab);
}

const showAdvice = () => {
    alert(tab[Math.floor(Math.random() * tab.length)])
}

const showPossibilities = () => {
    alert(tab);
}

btn.addEventListener('click', add);
reset.addEventListener('click', resetOptions);
show.addEventListener('click', showAdvice);
Possibilities.addEventListener('click', showPossibilities);



