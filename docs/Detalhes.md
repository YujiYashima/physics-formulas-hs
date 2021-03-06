# Formulas e Funções

**Comece a usar o pacote com uma das seguintes inicializações do pacote:**

```javascript
const fisica = require('physics-formulas-hs')
```

```typescript
import * from 'physics-formulas-hs'
```

**Isso fará com que todas as formulas/funções passem para dentro da variavel.**


## Alguns detalhes

Ja começamos a utilizar o ```Typescript```, entao a tipagem é totalmente estática, porem existem regras dentro da fisica que impedem de usar alguns valores. Por isso, na documentaçao e nos videos terá algumas orientaçoes quanto ao uso de alguns numeros.

Para isso, usaramos topicos para inidicar o tipo de dado que deve ser inserido, sendo alguns com restriçoes ou totalmente livre:

**EX:**
- Deslocamento: Number **(Qualquer valor numerico)**
- Tempo: Number >= 0 **(Qualquer valor numerico maior ou igual a 0)**
- UnidadeMedida: unidadeVelocidade => "km/h" ou "m/s" **(Restriçao entre km/h ou m/s)**

## Funções Importantes

Antes de mostrar as principais funçoes, devemos ressaltar algumas funçoes e parametros importantes dentro da aplicaçao.

Crimaos 2 funçoes que vao facilitar na hora de testar o pacote, sendo elas: ```print()``` e ```apenasNumero()```.

1. A primeira funçao faz o papel do ```console.log```, porem criamos um atalho para facilitar:

    ```ts
    import { Print } from 'physics-formulas-hs';

    Print("Apareça no console!!"); // --> Apareça no console!!
    ```

2. A segunda funçao formata os retornos das formulas de fisica em apenas numericos. Todas as formulas a seguir, retornam uma String, contendo um numero e uma unidade de medida (**10 m/s**). Para que retorne apenas o Numero, usa-se esta funçao:

    ```ts
    import { ApenasNumero } from 'physics-formulas-hs';

    ApenasNumero("10 m/s"); // --> 10

    ApenasNumero(fisica.velocidadeEscalarMedia(10, 5, "km/h")); // --> 2
    ```

    >Pode-se usar uma outra funçao dentro dessa, ou seja, podemos formatar só em numero os retornos das formulas a seguir.

## Categorias de formulas

- [Cinematica](./docs/Cinematica.md)