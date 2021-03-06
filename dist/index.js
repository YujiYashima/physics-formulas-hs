"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.velocidadeMediaMUV = exports.funçaoHorariaDoEspaço = exports.funçaoHorariaDaVelocidade = exports.aceleraçaoMedia = exports.velocidadeRelativaAfastamento = exports.velocidadeRelativaPerseguiçao = exports.velocidadeRelativaEncontro = exports.funçaoHorariaDasPosicoes = exports.converterVelocidadeMedia = exports.velocidadeEscalarMedia = exports.resultanteDeVetores = exports.apenasNumero = exports.print = void 0;
// ----------------------------------------------------
//                FACILIDADES PARA O DEV
// ----------------------------------------------------
//Exibe na tela (console/terminal)
var print = function (e) { return console.log(e); };
exports.print = print;
//Retorna só o numero sem a unidade de medida
var apenasNumero = function (valor) { return Number(valor.split(" ")[0]); };
exports.apenasNumero = apenasNumero;
// ----------------------------------------------------
//                       VETORES
// ----------------------------------------------------
//Resultante de vetores com a lei dos Cossenos (Regra do Paralelogramo)
var resultanteDeVetores = function (vetorA, vetorB, anguloGraus) {
    var radiano = anguloGraus * Math.PI / 180;
    var resultanteAoQuadrado = (Math.pow(vetorA, 2) + Math.pow(vetorB, 2) + (2 * vetorA * vetorB * Math.cos(radiano)));
    var resultante = Math.round(Math.sqrt(resultanteAoQuadrado));
    return "" + resultante;
};
exports.resultanteDeVetores = resultanteDeVetores;
// ----------------------------------------------------
//                      CINEMATICA
// ----------------------------------------------------
//Velocidade Escalar media
var velocidadeEscalarMedia = function (deslocamento, tempo, unidadeMedida) {
    return tempo < 0 ? "Não existe tempo negativo!" : deslocamento / tempo + " " + unidadeMedida;
};
exports.velocidadeEscalarMedia = velocidadeEscalarMedia;
//Conversor de unidade de Velocidade Media
var converterVelocidadeMedia = function (velocidadeMedia) {
    var num = Number(velocidadeMedia.split(" ")[0]);
    var unidade = velocidadeMedia.split(" ")[1];
    switch (unidade) {
        case "km/h":
            return Number(num) / 3.6 + " m/s";
        case "m/s":
            return Number(num) * 3.6 + " km/h";
        default:
            return "Conversão Inválida!";
    }
};
exports.converterVelocidadeMedia = converterVelocidadeMedia;
//Função horaria das posições
var funçaoHorariaDasPosicoes = function (espaçoInicial, velocidade, tempo) {
    return tempo < 0 ? "Não existe tempo negativo!" : espaçoInicial + velocidade * tempo + " m";
};
exports.funçaoHorariaDasPosicoes = funçaoHorariaDasPosicoes;
//Velocidade Relativa (Encontro)
var velocidadeRelativaEncontro = function (velocidadeA, velocidadeB, unidadeMedida) {
    return velocidadeA + velocidadeB + " " + unidadeMedida;
};
exports.velocidadeRelativaEncontro = velocidadeRelativaEncontro;
//Velocidade Relativa (Perseguição)
var velocidadeRelativaPerseguiçao = function (velocidadeA, velocidadeB, unidadeMedida) {
    return velocidadeA - velocidadeB + " " + unidadeMedida;
};
exports.velocidadeRelativaPerseguiçao = velocidadeRelativaPerseguiçao;
//Velocidade Relativa (Afastamento)
var velocidadeRelativaAfastamento = function (velocidadeA, velocidadeB, unidadeMedida) {
    return velocidadeA + velocidadeB + " " + unidadeMedida;
};
exports.velocidadeRelativaAfastamento = velocidadeRelativaAfastamento;
//Aceleração Media
var aceleraçaoMedia = function (variacaoVelocidade, tempo) {
    return tempo < 0 ? "Não existe tempo negativo!" : variacaoVelocidade / tempo + " m/s\u00B2";
};
exports.aceleraçaoMedia = aceleraçaoMedia;
//Função Horaria da Velocidade
var funçaoHorariaDaVelocidade = function (velocidadeInicial, aceleraçao, tempo) {
    return tempo < 0 ? "Não existe tempo negativo!" : velocidadeInicial + aceleraçao * tempo + " m/s";
};
exports.funçaoHorariaDaVelocidade = funçaoHorariaDaVelocidade;
//Função Horaria do Espaço
var funçaoHorariaDoEspaço = function (espaçoInicial, velocidadeInicial, tempo, aceleraçao) {
    return tempo < 0 ? "Não existe tempo negativo!" : espaçoInicial + (velocidadeInicial * tempo) + (aceleraçao * Math.pow(tempo, 2)) / 2 + " m";
};
exports.funçaoHorariaDoEspaço = funçaoHorariaDoEspaço;
//Velocidade Media (MUV)
var velocidadeMediaMUV = function (velocidadeA, velocidadeB, unidadeMedida) {
    return (velocidadeA + velocidadeB) / 2 + " " + unidadeMedida;
};
exports.velocidadeMediaMUV = velocidadeMediaMUV;
