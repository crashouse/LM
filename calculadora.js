
let operando1 = +prompt ("introduce el primer operando");
let operando2= +prompt("introduce el segundo operando");
calculabasica ("Pulse Ok para hacer una suma o pulse cancel o esc para hacer una resta",operando1,operando2,suma,resta)
calculabasica ("Pulse Ok para hacer una multiplicacion o pulse cancel o esc para hacer una division",operando1,operando2,multiplicacion,division)

function calculabasica (pregunta,op1,op2,func1,func2){

let condicion=confirm(pregunta);

if (condicion==true)

{
  alert (func1 (op1,op2))
  }
  else{
  alert (func2(op1,op2))
  }  }

function suma (op1,op2){
return operando1+operando2;}

function resta (op1,op2){
  return operando1-operando2;
  }
function division (op1,op2){
  return operando1/operando2;
    }
    function multiplicacion (op1,op2){
    return operando1*operando2;
    }
