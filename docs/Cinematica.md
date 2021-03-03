## Cinematica

### Velocidade Escalar Média

>Usa-se para calcular a ```Velocidade Escalar Média```. Sendo o resultado da divisao entre ```Deslocamento``` pelo ```Tempo```.

```javascript
fisica.velocidadeEscalarMedia(10, 5, "km/h");
// --> 2 km/h
```

- Deslocamento: Number
- Tempo: Number >= 0
- UnidadeMedida: unidadeVelocidade => "km/h" ou "m/s"
  
Links de apoio:
- [Video Aula](https://www.youtube.com/watch?v=1y8x1ApGDFk&list=PLNfWNKz4iEr8U354-5tSQPaiaybFvrlAy&index=1)
- [Leitura e Exercicios](https://brasilescola.uol.com.br/fisica/velocidade-escalar-media.htm)

---

### Converter Velocidade Média

>Usa-se para converter a ```Velocidade Escalar Média``` de **km/h** para **m/s** e vice-versa.

```javascript
fisica.converterVelocidadeMedia(10, "km/h"); // --> 36 km/h

fisica.converterVelocidadeMedia(36, "m/s"); // --> 10 m/s
```

- Velocidade: Number
- ConverterPara: unidadeVelocidade => "km/h" ou "m/s"

Links de apoio:
- [Video Aula](https://www.youtube.com/watch?v=1y8x1ApGDFk&list=PLNfWNKz4iEr8U354-5tSQPaiaybFvrlAy&index=1)
- [Leitura e Exercicios](https://mundoeducacao.uol.com.br/fisica/transformacao-km-h-para-m-s.htm)

---

### Funçao Horária das Posiçoes

>Usa-se para cacular a ```Funçao Horária das Posiçoes```, onde busca-se por uma posiçao final de acordo com o instante e com a velocidade.

```javascript
fisica.funçaoHorariaDasPosicoes(0, 10, 10); // --> 100 m
```

- Espaço Inicial: Number 
- Velocidade: Number
- Tempo: Number >= 0

>**Nao existe tempo negativo!!!**. Alem disso, lembre-se que a velocidade só aceita Number, porem ela se refere a uma velocidade em **m/s**. Entao, nao se esqueça de converter o **km/h** em **m/s** com a formula: ```converterVelocidadeMedia(..., "m/s")```!!

Links de apoio:
- [Video Aula](https://www.youtube.com/watch?v=OBkdQSY-gFA&list=PLNfWNKz4iEr8VBHz7HsWO0zMszS7mp0V-&index=1)
- [Leitura e Exercicios](https://exercicios.brasilescola.uol.com.br/exercicios-fisica/exercicios-sobre-funcao-horaria-espaco.htm)

---

### Velocidade Relativa (Encontro)

>Usa-se para calcular a ```Velocidade Relativa (Encontro)```, onde visa-se encontrar uma velocidade entre 2 corpos que vao se encontrar.

```javascript
fisica.velocidadeRelativaEncontro(10, 8, "m/s"); // --> 18 m/s

fisica.velocidadeRelativaEncontro(20, 10, "km/h"); // --> 30 km/h
```

- Velocidade A: Number 
- Velocidade B: Number
- UnidadeMedida: unidadeVelocidade => "km/h" ou "m/s"

Links de apoio:
- [Video Aula](https://www.youtube.com/watch?v=rkDl-p38-4Y&list=PLNfWNKz4iEr8VBHz7HsWO0zMszS7mp0V-&index=7)
- [Leitura e Exercicios](https://brasilescola.uol.com.br/fisica/velocidade-relativa.htm)

---