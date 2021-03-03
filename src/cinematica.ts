import { unidadeVelocidade } from "./principal";

//Velocidade Escalar media
const velocidadeEscalarMedia = (deslocamento: number, tempo: number, unidadeMedida: unidadeVelocidade) => {

    return tempo < 0 ? "Nao existe tempo negativo!" : `${deslocamento/tempo} ${unidadeMedida}`;
}

//Conversor de unidade de Velocidade Media
const converterVelocidadeMedia = (velocidade: number, converterPara: unidadeVelocidade) => {

    switch (converterPara) {
        case "km/h":
            return `${Number(velocidade) * 3.6} ${converterPara}`;
    
        case "m/s":
            return `${Number(velocidade) / 3.6} ${converterPara}`;

        default:
            return "Conversão Inválida!";
    }
}

//Função horaria das posições
const funçaoHorariaDasPosicoes = (espaçoInicial: number, velocidade: number, tempo: number) => {

    tempo < 0 ? "Nao existe tempo negativo!" : `${espaçoInicial + velocidade * tempo} m`;
}
//Velocidade Relativa (Encontro)
const velocidadeRelativaEncontro = (velocidadeA: number, velocidadeB: number, unidadeMedida: unidadeVelocidade) => {

    return `${velocidadeA + velocidadeB} ${unidadeMedida}`; 
}

//Velocidade Relativa (Perseguição)
const velocidadeRelativaPerseguiçao = (velocidadeA: number, velocidadeB: number, unidadeMedida: unidadeVelocidade) => {

    return `${velocidadeA - velocidadeB} ${unidadeMedida}`;
}

//Velocidade Relativa (Afastamento)
const velocidadeRelativaAfastamento = (velocidadeA: number, velocidadeB: number, unidadeMedida: unidadeVelocidade) => {

    return `${velocidadeA + velocidadeB} ${unidadeMedida}`;
}

//Aceleração Media
const aceleraçaoMedia = (variacaoVelocidade: number, tempo: number) => {

    return tempo < 0 ? "Nao existe tempo negativo!" : `${variacaoVelocidade / tempo} m/s²`;
}

//Função Horaria da Velocidade
const funçaoHorariaDaVelocidade = (velocidadeInicial: number, aceleraçao: number, tempo: number) => {

    return tempo < 0 ? "Nao existe tempo negativo!" : `${velocidadeInicial + aceleraçao * tempo} m/s`;
}

//Função Horaria do Espaço
const funçaoHorariaDoEspaço = (espaçoInicial: number, velocidadeInicial: number, tempo: number, aceleraçao:number) => {
    
    return tempo < 0 ? "Nao existe tempo negativo!" : `${espaçoInicial + (velocidadeInicial * tempo) + (aceleraçao * tempo ** 2)/2} m`;
}

//Velocidade Media (MUV)
const velocidadeMediaMUV = (velocidadeA: number, velocidadeB:number, unidadeMedida: unidadeVelocidade) => {

    return `${(velocidadeA + velocidadeB)/2} ${unidadeMedida}`;
}

export {
    velocidadeEscalarMedia,
    converterVelocidadeMedia,
    funçaoHorariaDasPosicoes,
    velocidadeRelativaEncontro,
    velocidadeRelativaPerseguiçao,
    velocidadeRelativaAfastamento,
    aceleraçaoMedia,
    funçaoHorariaDaVelocidade,
    funçaoHorariaDoEspaço,
    velocidadeMediaMUV
}
