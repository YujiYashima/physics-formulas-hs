//Resultante de vetores com a lei dos Cossenos
const leiDosCossenosVetores = (vetorA: number, vetorB: number, anguloGraus: number) => {

    const radiano = anguloGraus * Math.PI/180;

    const resultanteAoQuadrado = (Math.pow(vetorA, 2) + Math.pow(vetorB, 2) + (2 * vetorA * vetorB * Math.cos(radiano)));

    const resultante = Math.sqrt(resultanteAoQuadrado);

    return resultante;
}

export { leiDosCossenosVetores };