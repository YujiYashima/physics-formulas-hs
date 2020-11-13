# Formulas e Funções

**Comece a usar o pacote com a seguinte inicialização de variavel:**

```javascript
const fisica = require('physics-formulas-hs')
```

**Isso fará com que todas as formulas/funções passem para dentro da variavel**


## Alguns detalhes

Como ainda nao estamos usando o **Typescript**, nao temos uma tipagem estática, ou seja, as variaveis sao dinamicas.

Nas funções, nao fica claro se deve usar ```Number``` ou ```String```, pois como ja dito, o Javascript usa a tipagem dinamica.

Entao, usaramos topicos para inidicar o tipo de dado que deve ser inserido, até usarmos o Typescript:

**EX:**
- Deslocamento: Number
- Tempo: Number >= 0
- UnidadeMedida: String => "km/h" ou "m/s"

## Categorias de formulas

- <a href="#cinematica">Cinemática</a>
  

## Cinematica

#### Velocidade Escalar Média

>Usa-se para calcular a ```Velocidade Escalar Média```. Sendo o resultado da divisao entre ```Deslocamento``` pelo ```Tempo```.
```javascript
fisica.velocidadeEscalarMedia(10, 5, "km/h");
// --> 2 km/h
```
- Deslocamento: Number
- Tempo: Number >= 0
- UnidadeMedida: String => "km/h" ou "m/s"
  
Links de apoio:
- [Video Aula](https://www.youtube.com/watch?v=1y8x1ApGDFk&list=PLNfWNKz4iEr8U354-5tSQPaiaybFvrlAy&index=1)
- [Leitura e Exercicios](https://brasilescola.uol.com.br/fisica/velocidade-escalar-media.htm)

---
