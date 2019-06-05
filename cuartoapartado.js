
let lista2 = [];
let salir=false;
let padre;
let padre2;
let variable2;
let mostrar='';
let eliminarnodo=document.getElementById("lista");
while (salir!=true) {
  let operaciones = +prompt ("Que operacion quieres realizar \n 1- Crear Nodo en LI al principio \n 2- Crear Nodo en LI al final \n 3- Remover el primer elemento \n 4- Remover ultimo elemento \n 5- Remover elemento concreto \n 6-muestra elemento en posicion \n 7- Mostrar contenido todos los elementos \n  8- modificar el valor \n 10 - Colorear un elemento concreto \n  11-Salir ","Seleccion ");

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
     ultimo.remove();
  
        break;

        case 5:
        // eliminar nodo en posicion concreta
let posicion= prompt("selecciona posición");
alert(posicion);
lista.removeChild(lista.children[posicion]);

break;


case 6:

// mostrar contenido elemento en posicion

let posicion2= prompt("selecciona posición");

alert(lista.children[posicion2].innerHTML);
break;



case 7:

// seleccionar li dentro de ol  y mostrar el contenido

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

let listadoelemento= document.getElementById('lista');


 let posicionnodo= +prompt("Introduce la posicion");
let valor= prompt("Introduce el nuevo valor");
listadoelemento.children[posicionnodo-1].textContent = valor;
break;


case 9 :

let cantidad = document.getElementById('lista');


alert (cantidad.length);
break;


case 10:

let preguntaelemento=prompt("introduce el numero de elemento");
let colorfondo = document.getElementById('lista').getElementsByTagName("li")[preguntaelemento-1];
colorfondo.style.background = '#FF00AA';

break;


case 11:
alert ("Adios");
salir=true;
break;
  default:alert("Error");
  break;
}


}
