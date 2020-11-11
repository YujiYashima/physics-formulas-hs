/*-----------------------------------CINEMATICA-----------------------------------*/

//Velocidade Escalar media
function velocidadeEscalarMedia(distancia, tempo, unidadeMedida) {
    return `${distancia/tempo} ${unidadeMedida}`  
}

//Conversor de unidade de Velocidade Media
function converterVelocidadeMedia(velocidade, converterPara) {

    switch (converterPara) {
        case "km/h":
            return `${velocidade * 3.6} km/h`;
    
        case "m/s":
            return `${velocidade / 3.6} m/s`;

        default:
            return "Conversão Inválida!";
    }
}

//Função horaria das posições
function funçaoHorariaDasPosicoes(espaçoInicial, velocidade, tempo) {
    
    return `${espaçoInicial + velocidade * tempo} m` 
}

//Velocidade Relativa (Encontro)
function velocidadeRelativaEncontro(velocidadeA, velocidadeB, unidadeMedida) {

    return `${velocidadeA + velocidadeB} ${unidadeMedida}`  
}

//Velocidade Relativa (Perseguição)
function velocidadeRelativaPerseguicao(velocidadeA, velocidadeB, unidadeMedida) {
    return `${velocidadeA - velocidadeB} ${unidadeMedida}`  
}

//Velocidade Relativa (Afastamento)
function velocidadeRelativaAfastamento(velocidadeA, velocidadeB, unidadeMedida) {

    return `${velocidadeA + velocidadeB} ${unidadeMedida}`  
}

//Aceleração Media
function aceleraçaoMedia(variacaoVelocidade, tempo) {

    return `${variacaoVelocidade / tempo} m/s^2`
}

//Função Horaria da Velocidade
function funçaoHorariaDaVelocidade(velocidadeInicial, aceleraçao, tempo) {
    
    return `${velocidadeInicial + aceleraçao * tempo} m/s`
}

//Função Horaria do Espaço
function funçaoHorariaDoEspaço(espaçoInicial, velocidadeInicial, tempo, aceleraçao) {

    return `${espaçoInicial + (velocidadeInicial * tempo) + (aceleraçao * tempo ** 2)/2} m`
}

//Velocidade Media (MUV)
function velocidadeMediaMUV(velocidadeA, velocidadeB , unidadeMedida) {
    
    return `${(velocidadeA + velocidadeB)/2} ${unidadeMedida}`
}

module.exports = {
    velocidadeEscalarMedia,
    converterVelocidadeMedia,
    funçaoHorariaDasPosicoes,
    velocidadeRelativaEncontro,
    velocidadeRelativaPerseguicao,
    velocidadeRelativaAfastamento,
    aceleraçaoMedia,
    funçaoHorariaDaVelocidade,
    funçaoHorariaDoEspaço,
    velocidadeMediaMUV
}