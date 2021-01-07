// Elements pour lesquels vous créerez des datasets directement dans le code HTML.
let p1 = document.getElementById('p1');
let p2 = document.getElementById('p2');
let p3 = document.getElementById('p3');
let p4 = document.getElementById('p4');

// get and update datasets
let age = parseInt(p1.dataset.age) +10;
p1.dataset.age = age.toString();

let string = p2.dataset.string;
p2.dataset.string = string.length.toString();

let shop = p3.dataset.shopping.split('|');
p3.innerHTML = "";
for(let item of shop){
    p3.innerHTML += item.trim() + '<br>';
}

let test = p4.dataset.trueOrFalse;
test = test.toLowerCase() === 'true';
if(test){
    p4.innerHTML = 'La valeur est vrai';
}
else {
    p4.innerHTML = 'La valeur est fause';
}

// Elements pour lesquels vous créerez des datasets depuis JavaScript.
let p5 = document.getElementById('p5');
let p6 = document.getElementById('p6');
let p7 = document.getElementById('p7');
let p8 = document.getElementById('p8');

p5.dataset.age = '45';
p6.dataset.string ='chaine';
p7.dataset.shopping = 'chocolat | farine | lait | oeuf';
p8.dataset.trueOrFalse = 'False';

let age2 = (parseInt(p5.dataset.age) + 10).toString();
p5.dataset.age = age2;

p6.dataset.string = p6.dataset.string.length.toString();

let list = p7.dataset.shopping.split('|');
for(let idx of list) {
    p7.innerHTML += idx + '<br>';
}

let boolean = p8.dataset.trueOrFalse.toLowerCase();
boolean = boolean.toLowerCase() === 'true';
if(boolean){
    p8.innerHTML = 'La valeur est vrai';
}
else{
    p8.innerHTML = 'La valeur est fause';
}
