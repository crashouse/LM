let alumnoAsir = {

notaPAR: 1,
notaFH : 2,
notaLM : 3,
notaISO : 4,
notaBD :5,
notaFOL : 6,
notaDescanso : 7

};

for (let nota in alumnoAsir) {
  alumnoAsir[nota]=prompt ("Introduce la nota de  "+nota);

};

for (nota in alumnoAsir) {

  alert (nota+":"+alumnoAsir[nota])
};
