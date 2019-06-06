#!/bin/bash
#cambio
# Script desarrollado en 2º de ASIR por borrachos conocidos sin puertos abiertos
clear
# modificación 1 para evitar que se introduzca un valor vacio
while [ "$lit" = '' ]

 do

	#statements
	read -p "Cuanta people vais a beber?: " pers
	read -p "Cuantas litronas vais a querer?: " num

	echo ------Litronas para la people------
	echo --------Escribe cruzcampo si quereis una CruzCampo---------
	echo --------Escribe cruzsur si quereis una Cruz Del Sur--------
	echo --------Escribe estrella si quereis una Estrella del sur---
	read -p "Que marca quereis?: " lit

# comprobación de que al menos hay una persona
	if [$pers = '']
	then
		lit=''
clear
		echo --- No puedes beber sin garganta ---

	fi

done
case $lit in
	cruzcampo)
		marc=150
		echo -------------------------
		echo -La CruzCampo vale 1,50€-
		echo -------------------------
		let pre=$marc*$num
		let res=$pre/$pers
		echo "Cada persona tiene que poner $res centimos para comprarla."
		echo "El total es $pre"
		echo "PD: Esto es meao de burra"
		echo "Para más información, pregunta por Esteban"
		;;
	cruzsur)
		marc=120
		echo --------------------------
		echo -La CruzDelSur vale 1,20€-
		echo --------------------------
		let pre=$marc*$num
		let res=$pre/$pers
		echo "Cada persona tiene que poner $res centimos para comprarla."
		echo "El total es $pre"
		echo "PD: Las del fondo siempre están más fresquitas XD"
		echo "Estudiad más, cabrones"
		;;
	estrella)
		if [ $num -eq 2 ]
		then
			marc=100
			echo -------------------------------------------
			echo  -La Estrella vale 1,00€ por comprar dos-
			echo -------------------------------------------
			let pre=$marc*$num
			let res=$pre/$pers
			echo "Cada persona tiene que poner $res centimos para comprarla."
			echo "El total es $pre"
			echo "PD: Las del fondo siempre están más fresquitas XD"
		else
			marc=110
                        echo ------------------------
                        echo -La Estrella vale 1,10€-
                        echo ------------------------
                        let pre=$marc*$num
                        let res=$pre/$pers
                        echo "Cada persona tiene que poner $res centimos para comprarla."
                        echo "El total es $pre"
                        echo "PD: Las del fondo siempre están más fresquitas XD"
			echo "Vosotros si que sabéis"
		fi
		;;
	*)
	echo "prueba de nuevo"

		;;

esac
