import { Aprendiz, NivelEducativo } from "./aprendiz.js";
export var ap = new Aprendiz("Luis Alberto", "Cortes Zambrano", "avatar.png", 30, NivelEducativo.POSGRADO);
var aprendrizTable = document.getElementById("aprendiz");
mostrarDatosAprendiz(ap);
function mostrarDatosAprendiz(aprendiz) {
    var tbodyAprendiz = document.createElement("tbody");
    tbodyAprendiz.innerHTML = "<tr><td colspan=2><img src=\"./".concat(aprendiz.avatar, "></img></td></tr>\n    <tr><td>Nombres:</td><td>").concat(aprendiz.nombres, "</td></tr>\n    <tr><td>Apellidos:</td><td>").concat(aprendiz.apellidos, "</td></tr>\n    <tr><td>Nivel educativo:</td><td>").concat(aprendiz.nivelEducativo, "</td></tr>\n    <tr><td>Edad:</td><td>").concat(aprendiz.edad, "</td></tr>");
    aprendrizTable.appendChild(tbodyAprendiz);
}
console.log(ap);
