let lista = [];
let salir=false;
let primero;
let ultimo;
while (salir!=true) {
  let operaciones = +prompt ("Que operacion quieres realizar \n 1- mostrar los elementos \n 2- extraer el primer elemento \n 3- extraer el ultimo elemento \n 4- introducir nuevo elemento al principio \n 5-introducir un elemento al final \n 6-muestra el numero de elementos \n 7- mostrar posicion en el array \n  8- modificar el valor \n  9-Salir ","Seleccion ");

switch (operaciones) {
  case 1:
    alert(lista);
    break;
    case 2:
      alert (lista.shift());
      break;
      case 3:
       alert (lista.pop());
       break;
       case 4:
        primero= prompt ("Introduce un nuevo valor");
        lista.unshift(primero);
        break;
case 5:
ultimo= prompt ("Introduce un nuevo valor");
lista.push(ultimo);
break;

case 6:
 alert (lista.length);
 break;

case 7:
numeroElemento = +prompt("Introduzca un numero para mostrar el elemento en dicha posición");

alert("Mostrando elemento numero en la posición " +numeroElemento+ ": " + lista[numeroElemento]);

break;


case 8:
posicion= +prompt ("Introduce la posicion ");
valorposicion=prompt("Introduce el valor");
lista[posicion]=valorposicion;

break;

case 9:
alert ("Adios");
salir=true;
  default:"Error"
}


};
