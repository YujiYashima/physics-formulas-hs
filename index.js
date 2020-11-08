function velocidadeMedia(distancia, tempo, unidadeMedida) {

    return `${distancia/tempo} ${unidadeMedida}`  

}

const vel = (d, t, u) => `${d/t} ${u}`

module.exports = {
    velocidadeMedia,
    vel
}

console.log(vel(10, 1, "m/s"))