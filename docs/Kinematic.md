## Kinematics

### Average Speed

>It is used to calculate the ```Average Speed```. Being the result of the division between ```Distance``` by ```Time``` (d/Δt).

```javascript
physics.averageSpeed(10, 5, "km/h");
// --> 2 km/h
```

```ts
import { averageSpeed } from "physics-formulas-hs";

averageSpeed(10, 5, "km/h"); // --> 2 km/h
```

Distance | Time | MeasurementUnit
:---: | :---: | :---:
`Number` | `Number` | `VelocityUnits`
Any Numeric value greater than or equal to 0 `>= 0` | Any Numeric value greater than or equal to 0 `>= 0` | `km/h` or `m/s`
  
Supports Link:
- [Video lessons](https://youtu.be/6arvL--EHJU)
- [Reading articles](https://brasilescola.uol.com.br/fisica/velocidade-escalar-media.htm)

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