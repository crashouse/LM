
let numero=prompt('Que tabla quieres ver', '1');
let confirmacion=confirm(`¿es ${numero} su eleccion?`);
while (confirmacion!=true) {
numero=prompt('Que tabla quieres ver', '1');
confirmacion=confirm(`¿es ${numero} su eleccion?`);
  }
if (numero>0) {
for (let tabla=1;tabla<=10;tabla++) {

  alert (`El numero ${numero} multiplicado por ${tabla} es ${numero*tabla}`);
}


}
else {

alert('introduce un numero');

}
