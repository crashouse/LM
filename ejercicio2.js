let numero=prompt('Que numero quieres selecionar', '1');
let confirmacion=confirm(`¿es ${numero} su eleccion?`);
let numero2;
while (confirmacion!=true) {
numero=prompt('Selecciona el primer numero', '1');
confirmacion=confirm(`¿es ${numero} su eleccion?`);
  }
