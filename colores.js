
let ol=document.getElementsByTagName('ol');
for (elemol of ol){
//					let divs = document.getElementsByTagName('li');
divs=elemol.children;
let contador=0;
for (elemdiv of divs) {
if (!(contador%2)) {elemdiv.style.background='red';
} else {
elemdiv.style.background='blue';

}
contador++;
}}

let ul=document.getElementsByTagName('ul');
for (elemul of ul){
//					let divs = document.getElementsByTagName('li');
divs=elemul.children;
let contador=0;
for (elemdiv of divs) {
if (!(contador%2)) {
  elemdiv.style.background='green';
} else {
elemdiv.style.background='blue';

}
contador++;
}}




conocimientos.style.background='orange';

let tablas = document.getElementsByTagName('table');
for (tablita of tablas) {
tablita.row[0].cells[0].style.background='pink';

};
