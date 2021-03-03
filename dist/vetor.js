"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leiDosCossenosVetores = void 0;
//Resultante de vetores com a lei dos Cossenos
var leiDosCossenosVetores = function (vetorA, vetorB, anguloGraus) {
    var radiano = anguloGraus * Math.PI / 180;
    var resultanteAoQuadrado = (Math.pow(vetorA, 2) + Math.pow(vetorB, 2) + (2 * vetorA * vetorB * Math.cos(radiano)));
    var resultante = Math.sqrt(resultanteAoQuadrado);
    return resultante;
};
exports.leiDosCossenosVetores = leiDosCossenosVetores;
