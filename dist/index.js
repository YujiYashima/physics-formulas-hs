"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.velocidadeMediaMUV = exports.funçaoHorariaDoEspaço = exports.funçaoHorariaDaVelocidade = exports.aceleraçaoMedia = exports.velocidadeRelativaAfastamento = exports.velocidadeRelativaPerseguiçao = exports.velocidadeRelativaEncontro = exports.funçaoHorariaDasPosicoes = exports.converterVelocidadeMedia = exports.velocidadeEscalarMedia = void 0;
//Velocidade Escalar media
var velocidadeEscalarMedia = function (deslocamento, tempo, unidadeMedida) { return tempo < 0 ? "Nao existe tempo negativo!" : deslocamento / tempo + " " + unidadeMedida; };
exports.velocidadeEscalarMedia = velocidadeEscalarMedia;
//Conversor de unidade de Velocidade Media
var converterVelocidadeMedia = function (velocidade, converterPara) {
    switch (converterPara) {
        case "km/h":
            return Number(velocidade) * 3.6 + " " + converterPara;
        case "m/s":
            return Number(velocidade) / 3.6 + " " + converterPara;
        default:
            return "Conversão Inválida!";
    }
};
exports.converterVelocidadeMedia = converterVelocidadeMedia;
//Função horaria das posições
var funçaoHorariaDasPosicoes = function (espaçoInicial, velocidade, tempo) { return tempo < 0 ? "Nao existe tempo negativo!" : espaçoInicial + velocidade * tempo; };
exports.funçaoHorariaDasPosicoes = funçaoHorariaDasPosicoes;
//Velocidade Relativa (Encontro)
var velocidadeRelativaEncontro = function (velocidadeA, velocidadeB, unidadeMedida) { return velocidadeA + velocidadeB + " " + unidadeMedida; };
exports.velocidadeRelativaEncontro = velocidadeRelativaEncontro;
//Velocidade Relativa (Perseguição)
var velocidadeRelativaPerseguiçao = function (velocidadeA, velocidadeB, unidadeMedida) { return velocidadeA - velocidadeB + " " + unidadeMedida; };
exports.velocidadeRelativaPerseguiçao = velocidadeRelativaPerseguiçao;
//Velocidade Relativa (Afastamento)
var velocidadeRelativaAfastamento = function (velocidadeA, velocidadeB, unidadeMedida) { return velocidadeA + velocidadeB + " " + unidadeMedida; };
exports.velocidadeRelativaAfastamento = velocidadeRelativaAfastamento;
//Aceleração Media
var aceleraçaoMedia = function (variacaoVelocidade, tempo) { return tempo < 0 ? "Nao existe tempo negativo!" : variacaoVelocidade / tempo + " m/s\u00B2"; };
exports.aceleraçaoMedia = aceleraçaoMedia;
//Função Horaria da Velocidade
var funçaoHorariaDaVelocidade = function (velocidadeInicial, aceleraçao, tempo) { return tempo < 0 ? "Nao existe tempo negativo!" : velocidadeInicial + aceleraçao * tempo + " m/s"; };
exports.funçaoHorariaDaVelocidade = funçaoHorariaDaVelocidade;
//Função Horaria do Espaço
var funçaoHorariaDoEspaço = function (espaçoInicial, velocidadeInicial, tempo, aceleraçao) { return tempo < 0 ? "Nao existe tempo negativo!" : espaçoInicial + (velocidadeInicial * tempo) + (aceleraçao * Math.pow(tempo, 2)) / 2 + " m"; };
exports.funçaoHorariaDoEspaço = funçaoHorariaDoEspaço;
//Velocidade Media (MUV)
var velocidadeMediaMUV = function (velocidadeA, velocidadeB, unidadeMedida, print) {
    if (print == "console") {
        console.log((velocidadeA + velocidadeB) / 2 + " " + unidadeMedida);
    }
    return (velocidadeA + velocidadeB) / 2 + " " + unidadeMedida;
};
exports.velocidadeMediaMUV = velocidadeMediaMUV;
