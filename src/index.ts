//Definiçao de alguns parametros
type answer = "console"; //Usar futuramente para habilitar o console.log
type unidadeVelocidade = |"km/h"|"m/s";

//Velocidade Escalar media
export const velocidadeEscalarMedia = (deslocamento: number, tempo: number, unidadeMedida: unidadeVelocidade) => tempo < 0 ? "Nao existe tempo negativo!" : `${deslocamento/tempo} ${unidadeMedida}`;

//Conversor de unidade de Velocidade Media
export const converterVelocidadeMedia = (velocidade: number, converterPara: unidadeVelocidade) => {

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
export const funçaoHorariaDasPosicoes = (espaçoInicial: number, velocidade: number, tempo: number) => tempo < 0 ? "Nao existe tempo negativo!" : espaçoInicial + velocidade * tempo;

//Velocidade Relativa (Encontro)
export const velocidadeRelativaEncontro = (velocidadeA: number, velocidadeB: number, unidadeMedida: unidadeVelocidade) => `${velocidadeA + velocidadeB} ${unidadeMedida}`  

//Velocidade Relativa (Perseguição)
export const velocidadeRelativaPerseguiçao = (velocidadeA: number, velocidadeB: number, unidadeMedida: unidadeVelocidade) => `${velocidadeA - velocidadeB} ${unidadeMedida}`

//Velocidade Relativa (Afastamento)
export const velocidadeRelativaAfastamento = (velocidadeA: number, velocidadeB: number, unidadeMedida: unidadeVelocidade) => `${velocidadeA + velocidadeB} ${unidadeMedida}`

//Aceleração Media
export const aceleraçaoMedia = (variacaoVelocidade: number, tempo: number) => tempo < 0 ? "Nao existe tempo negativo!" : `${variacaoVelocidade / tempo} m/s²`;

//Função Horaria da Velocidade
export const funçaoHorariaDaVelocidade = (velocidadeInicial: number, aceleraçao: number, tempo: number) => tempo < 0 ? "Nao existe tempo negativo!" : `${velocidadeInicial + aceleraçao * tempo} m/s`;

//Função Horaria do Espaço
export const funçaoHorariaDoEspaço = (espaçoInicial: number, velocidadeInicial: number, tempo: number, aceleraçao:number) => tempo < 0 ? "Nao existe tempo negativo!" : `${espaçoInicial + (velocidadeInicial * tempo) + (aceleraçao * tempo ** 2)/2} m`;

//Velocidade Media (MUV)
export const velocidadeMediaMUV = (velocidadeA: number, velocidadeB:number, unidadeMedida: unidadeVelocidade, print?: answer) => {

    if (print == "console") {
        
        console.log(`${(velocidadeA + velocidadeB)/2} ${unidadeMedida}`);

    }

    return `${(velocidadeA + velocidadeB)/2} ${unidadeMedida}`;
}