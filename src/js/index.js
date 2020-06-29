import '../scss/main.scss';
import moment from 'moment';

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

console.log('UWAGA UWAGA');

const age = 24;
const firstName = 'Julia';
console.log(firstName);
console.log(age);

console.log(`Nazywam się ${firstName} i mam ${age}lata`)


function calculate(myNumber) {
    console.log(`I received ${myNumber}`);
    return myNumber * 5;
}

const myResult = calculate(age);
console.log(age);
console.log(myResult);

function greet(age, firstName) {
    console.log(`Witaj drogi odwiedzający, nazywam się ${firstName} i mam ${age} lata.`);
}

greet(24, 'Julia');

function createContent(querySelectorContent, content) {
    const element = document.querySelector(querySelectorContent);
    element.innerHTML = content;
}
//createContent('.header__text--js', 'witaj świecie!');
createContent('.flex__item--js', 'witaj świecie!');

var myVariable = 3;
myVariable === 4;

console.log(myVariable);

const deathStar = {
    diameter: 120000,
    fire: (target) => {
        console.log(`${target} destroyed 💥`)
    },
    isOperating: true,
    levels: 357,
    name: 'Death Star',
    population: 10000,
    isLightOn: true,
    commander: {
        name: `Darth Vader`,
        age: 44,
    }
}
console.log(deathStar.name)
console.log(typeof deathStar.commander.name)

deathStar.fire('Rebel ship')

const humanOne = {
    name: 'Julia',
    age: 24,
    address: {
        street: 'Gorlicka',
        city: 'Wrocław',
    }
}

const humanTwo = {
    name: 'Rafał',
    age: 29,
    address: {
        street: 'Słoneczna',
        city: 'Wrocław',
    }
}

console.log(humanTwo.address.city)
console.log(humanOne.address.city)

humanTwo.address.city = 'Kępno';

console.log(humanTwo.address.city)

console.log(humanTwo);
console.log(humanOne);

//humanOne.address = humanTwo.address

console.log(humanTwo);
console.log(humanOne);

//wyrazenia logiczne //
//JavaScript!= Java //

if ('Java' != 'Javascript') {
    console.log('Java is not Javascript');
}

if (2 == '2')
    console.log('True value')

if (humanOne.age < humanTwo.age) {
    console.log('Human one jest młodszy');
} else {
    console.log('Human two jest młodszy lub są równolatkami');
}

if ((humanOne.age == 24) && humanTwo.age) {
    console.log('To się wykona')
}

if ((humanOne.age == 24) || humanTwo.pet) {
    console.log('To się wykona')
}

if (!false) {
    console.log('To się wykona')
}

//else //

if (humanOne.address.street == humanTwo.address.street) {
    console.log('Human one and human two live on the same street');
} else {
    console.log('Human one and human two do not live on the same street');
}

if (humanOne.address.street == humanTwo.address.street) {
    console.log('Human one and human two live on the same street');
} else if (humanOne.address.street !== humanTwo.address.street) {
    console.log('Human one and human two do not live on the same street');
}

//switch case break-- znamy dokładne wartości mozna to tez zrobić przy uzyciu if//

const myNumber = 7

switch (myNumber) {
    case 7:
        console.log('jestem siódemką');
        break;
    case 9:
        console.log('jestem dziewiątką');
        break;
    default:
        console.log('jestem czymś innym');
}

(32 > 20) ? console.log('to prawda') : console.log('to nieprawda');

if (32 > 20) {
    console.log('to prawda')
} else {
    console.log('to nieprawda')
}

/** const button = document.querySelector('.action--js');
console.log(button)

const myClick = () => {
    const header = document.querySelector(".header__text--js");
    header.innerHTML = 'Cześć, mam na imię Julia, tworzę, robię błędy i uczę się na nich';
}
button.addEventListener('click',myClick) */

//lub//

const button = document.querySelector('.action--js');
console.log(button)

/** button.addEventListener('mouseenter',() => {
    const header = document.querySelector(".header__text--js");
    header.innerHTML = 'Cześć, mam na imię Julia, tworzę, robię błędy i uczę się na nich';
    header.classList.remove('klasa-z-js2');
    header.classList.add('klasa-z-js');
});

button.addEventListener('mouseleave',() => {
    const header = document.querySelector(".header__text--js");
    header.innerHTML = 'Hi my name is Julia I create, make mistakes and learn from them';   
    header.classList.remove('klasa-z-js');
    header.classList.add('klasa-z-js2');
}); */

button.addEventListener('mouseenter', () => {
    const header = document.querySelector(".header__text--js");
    header.innerHTML = 'Cześć, mam na imię Julia, tworzę, robię błędy i uczę się na nich';
    header.classList.toggle('klasa-z-js');
});

button.addEventListener('mouseleave', () => {
    const header = document.querySelector(".header__text--js");
    header.innerHTML = 'Hi my name is Julia I create, make mistakes and learn from them';
    header.classList.toggle('klasa-z-js');
});

const hamburger = document.querySelector('.hamburger--js');

hamburger.addEventListener('click', () => {
    const nav = document.querySelector ('.navigation--js');
    nav.classList.toggle('navigation--open')
});

const goaway = document.querySelector('.topbar--js');

goaway.addEventListener('mouseleave', () => {
    const nav = document.querySelector ('.navigation--js');
    nav.classList.toggle('navigation--open')
})

const startOfDay = moment().startOf('day').fromNow();

const timePlaceholder = document.querySelector('.time--js');
timePlaceholder.innerHTML = startOfDay;

