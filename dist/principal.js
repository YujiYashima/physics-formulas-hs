"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apenasNumero = exports.print = void 0;
// Facilidade 1 - Print
var print = function (e) { return console.log(e); };
exports.print = print;
// Facilidade 2 - Apenas Número
var apenasNumero = function (valor) { return Number(valor.split(" ")[0]); };
exports.apenasNumero = apenasNumero;
