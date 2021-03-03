//Definiçao de algumas unidades de medidadas padroes
type unidadeVelocidade = |"km/h"|"m/s";

// Facilidade 1 - Print
const print = (e: any) => console.log(e);

// Facilidade 2 - Apenas Número
const apenasNumero = (valor: string) => Number(valor.split(" ")[0]);

export { print, apenasNumero, unidadeVelocidade };