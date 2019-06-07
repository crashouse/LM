#!/bin/bash
let pass;
echo ---Bienvenido al script ---
echo ''
echo CARGANDO
sleep 1
echo ''
echo - 1 - Introducir contenido en fichero
echo - 2 - Eliminar Contenido fichero
echo - 3 - Leer contenido fichero
echo ''
 read -p "Introduce opcion  " menu

case $menu in

  1)


while [ "$fichero" = '' ]

 do

	read -p "Introduce el nombre del fichero: " fichero
	read -p "Introduce el contenido: " contenido
echo $contenido>>$fichero
done
echo ''
echo "Operación Realizada con éxito"

;;
2)
while [ "$fichero" = '' ]

do

 read -p "Introduce el nombre del fichero: " fichero
 read -p "Introduce el contenido: " contenido
sed /cadena de texto/$contenido $fichero
done
echo "Operación Realizada con éxito"

;;
esac
