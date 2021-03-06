# Formulas e Funções

**Comece a usar o pacote com a seguinte inicialização de variavel, ou importando o modulo:**

```javascript
const fisica = require('physics-formulas-hs')
```

```ts
import * as fisca from "physics-formulas-hs";
```

**Isso fará com que todas as formulas/funções passem para dentro da variavel.**

**É possivel ainda importar formulas especificas usando o typescript como será apresentado na documentação.**


## Alguns detalhes

Ja começamos a utilizar o ```Typescript```, entao a tipagem é totalmente estática, porem existem regras dentro da fisica que impedem de usar alguns valores. Por isso, na documentaçao e nos videos terá algumas orientaçoes quanto ao uso de alguns numeros.

Para isso, usaramos topicos para inidicar o tipo de dado que deve ser inserido, sendo alguns com restriçoes ou totalmente livre:

**EX:**
- Deslocamento: Number **(Qualquer valor numerico)**
- Tempo: Number >= 0 **(Qualquer valor numerico maior ou igual a 0)**
- UnidadeMedida: unidadeVelocidade => "km/h" ou "m/s" **(Restriçao entre km/h ou m/s)**

Alem disso, colocaremos a utilização das funções de 2 formas: a forma "require" e a forma "import", podendo ser utilizada ambas as possibilidades.

## Funções Importantes

Antes de mostrar as principais funçoes, devemos ressaltar algumas funçoes e parametros importantes dentro da aplicaçao.

Crimaos 2 funçoes que vao facilitar na hora de testar o pacote, sendo elas: ```print()``` e ```apenasNumero()```.

1. A primeira funçao faz o papel do ```console.log```, porem criamos um atalho para facilitar:

    ```javascript
    fisica.print("Apareça no console!!"); // --> Apareça no console!!
    ```

    ```ts
    import { print } from "physics-formulas-hs";
    print("Exiba no console!!"); // --> Exiba no console!!
    ```

2. A segunda funçao formata os retornos das formulas de fisica em apenas numericos. Todas as formulas a seguir, retornam uma String, contendo um numero e uma unidade de medida (**10 m/s**). Para que retorne apenas o Numero, usa-se esta funçao:

    ```javascript
    fisica.apenasNumero("10 m/s"); // --> 10

    fisica.apenasNumero(fisica.velocidadeEscalarMedia(10, 5, "km/h")); // --> 2
    ```

    ```ts
    import { apenasNumero } from "physics-formulas-hs";

    apenasNumero("10 m/s"); // --> 10

    apenasNumero(fisica.velocidadeEscalarMedia(10, 5, "km/h")); // --> 2
    ```

    >Pode-se usar uma outra funçao dentro dessa, ou seja, podemos formatar só em numero os retornos das formulas a seguir.

## Categorias de formulas

- [Vetor](https://github.com/YujiYashima/physics-formulas-hs/blob/main/docs/Vetor.md)

- [Cinemática](https://github.com/YujiYashima/physics-formulas-hs/blob/main/docs/Cinematica.md)

