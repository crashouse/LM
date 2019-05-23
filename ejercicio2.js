let numero=prompt('Que numero quieres selecionar', '1');
let confirmacion=confirm(`¿es ${numero} su eleccion?`);
let numero2;
while (confirmacion!=true) {
numero=prompt('Selecciona el primer numero', '1');
confirmacion=confirm(`¿es ${numero} su eleccion?`);
  }
numero2=prompt('Selecciona el segundo numero','1');
confirmacion2=confirm('el segundo numero ha sido introducido');
while (numero!=numero2) {
    if (numero2>numero)

    {
    alert ('el numero es mayor');
    numero2=prompt('Selecciona el segundo numero','1');

  }
  else {
if (numero2<numero)
    alert ('el numero es menor');
    numero2=prompt('Selecciona el segundo numero','1');
  }


}
alert('has acertado');
alert ('Enhorabuena');
//prueba de commit
//23 de mayo de 2019
