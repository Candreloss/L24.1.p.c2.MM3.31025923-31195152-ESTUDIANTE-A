import CL_estudiante from "./CL_estudiante.js";
import CL_becado from "./CL_becado.js";

let bec1 = new CL_becado("Mary", 132, 8);
let bec2 = new CL_becado("Alirio", 315, 35);

let salida = document.getElementById("salida");

salida.innerHTML = `Nombre del estudiante: ${bec1.nombre} <br>`
salida.innerHTML += `Acumulado de notas: ${bec1.notas} <br>`
salida.innerHTML += `Cantidad de materias: ${bec1.materias} <br>`
salida.innerHTML += `Promedio de notas: ${bec1.promNotas().toFixed(2)} <br>`
salida.innerHTML += `${bec1.nombre} ${bec1.beca()} <br> <br>`

salida.innerHTML += `Nombre del estudiante: ${bec2.nombre} <br>`
salida.innerHTML += `Acumulado de notas: ${bec2.notas} <br>`
salida.innerHTML += `Cantidad de materias: ${bec2.materias} <br>`
salida.innerHTML += `Promedio de notas: ${bec2.promNotas().toFixed(2)} <br>`
salida.innerHTML += `${bec2.nombre} ${bec2.beca()} <br> <br>`