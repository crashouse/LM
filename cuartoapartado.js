let lista2 = [];
let salir=false;
let padre;
let padre2;
let eliminarnodo=document.getElementById("lista");
while (salir!=true) {
  let operaciones = +prompt ("Que operacion quieres realizar \n 1- Crear Nodo en LI al principio \n 2- Crear Nodo en LI al final \n 3- Remover el primer elemento \n 4- introducir nuevo elemento al principio \n 5-introducir un elemento al final \n 6-muestra el numero de elementos \n 7- mostrar posicion en el array \n  8- modificar el valor \n  9-Salir ","Seleccion ");

switch (operaciones) {
  case 1:

    let crearnodo = document.createElement('li');
    crearnodo.innerHTML = prompt("Introduce el valor");
  //lista.insertBefore(crearnodo, lista.chilren[0]);
padre=document.getElementById("lista");
padre.insertBefore(crearnodo, padre.children[0]);
alert(padre.innerHTML);
//let padre= getElementsByTagId(lista);
//alert (padre.innerHTML);
  //alert (lista.innerHTML);
    break;
  case 2:
    let crearnodo2 = document.createElement('li');
    crearnodo2.innerHTML = prompt("Introduce el valor");
    padre2=document.getElementById("lista");
 padre2.appendC3hild(crearnodo2);
 alert(padre2.innerHTML);

      break;
      case 3:

    let ultimo=eliminarnodo.lastElementChild;
    alert(eliminarnodo.innerHTML);
       ultimo.remove();
       alert(eliminarnodo.innerHTML);
       alert("Entra en case3");
       break;

     case 4:
       posicion= prompt ("Introduce un nuevo valor");
        node.remove(posicion)
        break;
case 5:
let elementos = document.querySelectorAll('ol > li:last-child');

 for (let elemol of elementos) {
   alert(elemol.innerHTML); //
 }
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
  default:alert("Error");
  break;
}


}
