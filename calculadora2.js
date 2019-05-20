

let confirmacion= +prompt("Escribe para realizar una operacion (1=suma,2=resta,3=multiplicacion,4=division,5=resto,6=potencia)")

let op1=+prompt("elige el primer operando");
let op2=+prompt("elige el segundo operando");
let suma =(op1,op2)=>op1+op2;
let resta=(op1,op2)=>op1-op2;
let multiplicacion=(op1,op2)=>op1*op2;
let division=(op1,op2)=>op1/op2;
let resto=(op1,op2)=>op1%op2;
let potencia=(op1,op2)=>Math.pow(op1,op2);

do {
  switch(confirmacion) {
    case 1:
    alert( "el resultado de sumar " +op1+ " y " +op2+ " es " + suma(op1,op2));

      break;
    case 2:
    alert( "el resultado de restar " +op1+ " y " +op2+ " es " + resta(op1,op2));
      break;
    case 3:
      alert( "el resultado de multiplicar " +op1+ " y " +op2+ " es " + multiplicacion(op1,op2));
      break;

  case 4:
  alert( "el resultado de dividir " +op1+ " y " +op2+ " es " + division(op1,op2));
  break;
  case 5:
   alert(resto(op1,op2));
   break;
case 6:
alert(potencia(op1,op2));
break;
case 7:
break;
default:
    alert("No hay resultado");
    break;
  }
   confirmacion= +prompt("Escribe para realizar una operacion (1=suma,2=resta,3=multiplicacion,4=division,5=resto,6=potencia)")
if (confirmacion!=7){
   op1=+prompt("elige el primer operando");
   op2=+prompt("elige el segundo operando");
  }}
  while(confirmacion!=7)
