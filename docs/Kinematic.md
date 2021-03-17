## Kinematics

### Average Scalar Velocity

>It is used to calculate the ```Average Scalar Velocity```. Being the result of the division between ```Displacement``` by ```Time```.

```javascript
physics.averageVelocity(10, 5, "km/h");
// --> 2 km/h
```

```ts
import { averageVelocity } from "physics-formulas-hs";

averageVelocity(10, 5, "km/h"); // --> 2 km/h
```

- Displacement: Number
- Time: Number >= 0
- velocityUnit: velocityUnits => "km/h" ou "m/s"
  
Supports Link:
- [Video Aula](https://www.youtube.com/watch?v=1y8x1ApGDFk&list=PLNfWNKz4iEr8U354-5tSQPaiaybFvrlAy&index=1)
- [Leitura e Exercicios](https://brasilescola.uol.com.br/fisica/velocidade-escalar-media.htm)

---

### Equation of Uniform Motion (Position)

>It is used to calculate the ```Equation Uniform Motion```, where a final position is sought according to the moment and the velocity.

```javascript
physcisc.uniformMotionEquationPosition(0, 10, 10); // --> 100 m
```

```ts
import { uniformMotionEquationPosition } from "physics-formulas-hs";

uniformMotionEquationPosition(0, 10, 10); // --> 100 m
```

- InitialPosition: Number 
- Velocity: Number
- Time: Number >= 0

>**There is no negative time !!!**. Also, remember that the velocity only accepts Number, but it refers to a velocity in **m / s**. So, don't forget to convert **km / h** to **m / s** with another package called ```physics-units-converter``` !!!

Supports Link:
- [Video Aula](https://www.youtube.com/watch?v=OBkdQSY-gFA&list=PLNfWNKz4iEr8VBHz7HsWO0zMszS7mp0V-&index=1)
- [Leitura e Exercicios](https://exercicios.brasilescola.uol.com.br/exercicios-fisica/exercicios-sobre-funcao-horaria-espaco.htm)

---

### Relative Velocity (Meeting)

>It is used to calculate the ```Relative Velocity ​​(Meeting)```, where the aim is to find a velocity between 2 bodies that are going to meet.

```javascript
physics.relativeVelocityMeet(10, 8, "m/s"); // --> 18 m/s

physics.relativeVelocityMeet(20, 10, "km/h"); // --> 30 km/h
```

- VelocityA: Number 
- VelocityB: Number
- velocityUnit: velocityUnit => "km/h" ou "m/s"

Supports Link:
- [Video Aula](https://www.youtube.com/watch?v=rkDl-p38-4Y&list=PLNfWNKz4iEr8VBHz7HsWO0zMszS7mp0V-&index=7)
- [Leitura e Exercicios](https://brasilescola.uol.com.br/fisica/velocidade-relativa.htm)

---
