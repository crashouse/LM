#!/bin/bash
#cambio
# Script desarrollado en 2º de ASIR por borrachos conocidos sin puertos abiertos
clear
let total=0
read -p "Introduce el numero de personas que sois " personas
# modificación 1 para evitar que se introduzca un valor vacio
while [ "$aceptacion" = '' ]

#Productos
 do
	#statements

	read -p "Producto quieres comprar: " producto
	read -p "Cantidad quieres comprar:" cantidad
  read -p "Precio del producto :" precio
let suma=$cantidad*precio
echo "has seleccionado"  $producto  "por un valor de "  $suma €
read -p "Si desea añadir otro producto pulse intro, para terminar escriba fin  " aceptacion

#let total= $total+$suma
total=`expr $total + $suma`
# comprobación de compra


done
let reparto=`expr $total/$personas`
echo ""
echo ---------------------------------------
echo "el total de la compra ha sido " $total
echo ---------------------------------------
echo ""
echo "A cada uno os toca pagar "  $reparto
echo ""
