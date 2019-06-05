let lista2 = [];
let salir=false;
let padre;
let padre2;
let mostrar='';
let eliminarnodo=document.getElementById("lista");
while (salir!=true) {
  let operaciones = +prompt ("Que operacion quieres realizar \n 1- Crear Nodo en LI al principio \n 2- Crear Nodo en LI al final \n 3- Remover el primer elemento \n 4- Remover ultimo elemento \n 5- Remover elemento concreto \n 6-muestra elemento en posicion \n 7- Mostrar contenido todos los elementos \n  8- modificar el valor \n  9-Salir ","Seleccion ");

switch (operaciones) {
  case 1:

    let crearnodo = document.createElement('li');
    crearnodo.innerHTML = prompt("Introduce el valor");

padre=document.getElementById("lista");
padre.insertBefore(crearnodo, padre.children[0]);
alert(padre.innerHTML);

    break;
  case 2:
    let crearnodo2 = document.createElement('li');
    crearnodo2.innerHTML = prompt("Introduce el valor");
    padre2=document.getElementById("lista");
 padre2.appendChild(crearnodo2);
 alert(padre2.innerHTML);

      break;
      case 3:
//eliminar el primer nodo
    let primero=eliminarnodo.firstElementChild;
    alert(eliminarnodo.innerHTML);
       primero.remove();
       alert(eliminarnodo.innerHTML);
       break;

     case 4:
 // eliminar el ultimo nodo
     let ultimo=eliminarnodo.lastElementChild;
     alert(eliminarnodo.innerHTML);
        ultimo.remove();
        alert(eliminarnodo.innerHTML);
        alert("Entra en case3");
        break;

        case 5:
        // eliminar nodo en posicion concreta
let posicion= prompt("selecciona posición");
alert(posicion);
lista.removeChild(lista.children[posicion]);

break;


case 6:

let posicion2= prompt("selecciona posición");

alert(lista.children[posicion2].innerHTML);
break;
//mostrar elementos


case 7:

let elementos = document.querySelectorAll('ol > li');
let posicion3=1;
 for (let elemol of elementos) {

mostrar= mostrar + "posicion" + posicion3 + ":" + elemol.innerHTML + "\n";
posicion3++;


 }
 alert (mostrar);
 mostrar='';
break;



case 8:

posicion4= prompt("Introduce la posicion");
lista4= prompt("Introduce el nuevo valor");

let 


break;

case 9:
alert ("Adios");
salir=true;
break;
  default:alert("Error");
  break;
}


}
