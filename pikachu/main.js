const $btn = document.getElementById('btn-kick');
const $btn2 = document.getElementById('btn-kick-back');

const character = {
    name: 'Pikachu',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-character'),
    elProgressbar: document.getElementById('progressbar-character')
}

const enemy = {
    name: 'Charmander',
    defaultHP: 100,
    damageHP: 100,
    elHP: document.getElementById('health-enemy'),
    elProgressbar: document.getElementById('progressbar-enemy')
}

$btn.addEventListener('click', function() {
    console.log('Kick1');
    
    changeHP (random(20), enemy);
});

$btn2.addEventListener('click', function() {
    console.log('Kick2');
    changeHP (random(20), character);
    
});

function init(){
    console.log('Start Game!');
    renderHP(character);
    renderHP(enemy);
}

function renderHP(person){
    renderHPLife(person);
    renderProgressbar(person);
}

function renderHPLife(person){
    person.elHP.innerText = person.damageHP + '/' + person.defaultHP;
}

function renderProgressbar(person){
    person.elProgressbar.style.width = person.damageHP + '%';
}

function changeHP(count, person){
    if (person.damageHP < count) {
        person.damageHP = 0;
        alert('Poor ' + person.name + ' lost the battle!');
        $btn.disabled = true;
        $btn2.disabled = true;
    } else {
        person.damageHP -= count;
    }

    renderHP(person);
}

function random(num){
    return Math.ceil(Math.random() * num);
}

init();