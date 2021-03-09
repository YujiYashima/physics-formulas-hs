// ----------------------------------------------------
//             UNIDADES DE MEDIDAS PADROES
// ----------------------------------------------------
type unidadeVelocidade = |"km/h"|"m/s";


// ----------------------------------------------------
//                FACILIDADES PARA O DEV
// ----------------------------------------------------

//Exibe na tela (console/terminal)
const print = (e: any) => console.log(e);

//Retorna só o numero sem a unidade de medida
const apenasNumero = (valor: string) => Number(valor.split(" ")[0]);


// ----------------------------------------------------
//                       VETORES
// ----------------------------------------------------

//Resultante de vetores com a lei dos Cossenos (Regra do Paralelogramo)
const resultanteDeVetores = (vetorA: number, vetorB: number, anguloGraus: number) => {

    const radiano = anguloGraus * Math.PI/180;

    const resultanteAoQuadrado = (Math.pow(vetorA, 2) + Math.pow(vetorB, 2) + (2 * vetorA * vetorB * Math.cos(radiano)));

    const resultante = Math.round(Math.sqrt(resultanteAoQuadrado));

    return `${resultante}`;
}


// ----------------------------------------------------
//                      CINEMATICA
// ----------------------------------------------------

//Velocidade Escalar media
const velocidadeEscalarMedia = (deslocamento: number, tempo: number, unidadeMedida: unidadeVelocidade) => {
    
    return tempo < 0 ? "Não existe tempo negativo!" : `${deslocamento/tempo} ${unidadeMedida}`;
}

//Função horaria das posições
const funçaoHorariaDasPosicoes = (espaçoInicial: number, velocidade: number, tempo: number) => {
    
    return tempo < 0 ? "Não existe tempo negativo!" : `${espaçoInicial + velocidade * tempo} m`;
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
    
    return tempo < 0 ? "Não existe tempo negativo!" : `${variacaoVelocidade / tempo} m/s²`;
}

//Função Horaria da Velocidade
const funçaoHorariaDaVelocidade = (velocidadeInicial: number, aceleraçao: number, tempo: number) => {
    
    return tempo < 0 ? "Não existe tempo negativo!" : `${velocidadeInicial + aceleraçao * tempo} m/s`;
}

//Função Horaria do Espaço
const funçaoHorariaDoEspaço = (espaçoInicial: number, velocidadeInicial: number, tempo: number, aceleraçao:number) => {
    
    return tempo < 0 ? "Não existe tempo negativo!" : `${espaçoInicial + (velocidadeInicial * tempo) + (aceleraçao * tempo ** 2)/2} m`;
}

//Velocidade Media (MUV)
const velocidadeMediaMUV = (velocidadeA: number, velocidadeB:number, unidadeMedida: unidadeVelocidade) => {

    return `${(velocidadeA + velocidadeB)/2} ${unidadeMedida}`;
}


// ----------------------------------------------------
//                 EXPORTS DE FUNÇOES
// ----------------------------------------------------

//Dev
export { print, apenasNumero };

//Vetores
export { resultanteDeVetores };

//Cinematica
export { 
    velocidadeEscalarMedia, funçaoHorariaDasPosicoes, velocidadeRelativaEncontro, velocidadeRelativaPerseguiçao, velocidadeRelativaAfastamento, aceleraçaoMedia, funçaoHorariaDaVelocidade, funçaoHorariaDoEspaço, velocidadeMediaMUV
};

