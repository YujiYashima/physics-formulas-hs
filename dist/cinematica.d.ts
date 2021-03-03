import { unidadeVelocidade } from "./principal";
declare const velocidadeEscalarMedia: (deslocamento: number, tempo: number, unidadeMedida: unidadeVelocidade) => string;
declare const converterVelocidadeMedia: (velocidade: number, converterPara: unidadeVelocidade) => string;
declare const funçaoHorariaDasPosicoes: (espaçoInicial: number, velocidade: number, tempo: number) => void;
declare const velocidadeRelativaEncontro: (velocidadeA: number, velocidadeB: number, unidadeMedida: unidadeVelocidade) => string;
declare const velocidadeRelativaPerseguiçao: (velocidadeA: number, velocidadeB: number, unidadeMedida: unidadeVelocidade) => string;
declare const velocidadeRelativaAfastamento: (velocidadeA: number, velocidadeB: number, unidadeMedida: unidadeVelocidade) => string;
declare const aceleraçaoMedia: (variacaoVelocidade: number, tempo: number) => string;
declare const funçaoHorariaDaVelocidade: (velocidadeInicial: number, aceleraçao: number, tempo: number) => string;
declare const funçaoHorariaDoEspaço: (espaçoInicial: number, velocidadeInicial: number, tempo: number, aceleraçao: number) => string;
declare const velocidadeMediaMUV: (velocidadeA: number, velocidadeB: number, unidadeMedida: unidadeVelocidade) => string;
export { velocidadeEscalarMedia, converterVelocidadeMedia, funçaoHorariaDasPosicoes, velocidadeRelativaEncontro, velocidadeRelativaPerseguiçao, velocidadeRelativaAfastamento, aceleraçaoMedia, funçaoHorariaDaVelocidade, funçaoHorariaDoEspaço, velocidadeMediaMUV };
