function velocidadeMedia(distancia: number, tempo: number, unidadeMedida: string) {

    return `${distancia/tempo} ${unidadeMedida}` 
}

console.log(velocidadeMedia(12, 1, "km/h"))