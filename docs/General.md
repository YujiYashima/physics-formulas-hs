# Formulas and Functions

**Start using the package with the following variable initialization, or by importing the module:**

```javascript
const physics = require('physics-formulas-hs')
```

```ts
import * as physics from "physics-formulas-hs";
```

**This will cause all formulas / functions to pass into the variable.**

**It is also possible to import specific formulas using typescript as it will be presented in the documentation.**


## Some details

We have already started using the ```Typescript```, so the project is strongly typed, however there are rules within physics that prevent us from using some values. For this reason, in the documentation and videos you will have some guidelines as to the use of some numbers.

For this, we use topics to indicate the type of data that must be inserted, some of which are restricted or totally free:

**EX:**
- Displacement: Number **(Any numerical value)**
- Time: Number >= 0 **(Any numeric value greater than or equal to 0)**
- MeasurementUnit: velocityUnits => "km/h" or "m/s" **(Restriction between km/h or m/s)**

In addition, we will use the functions in 2 ways: the "require" form and the "import" form, both of which can be used.

## Important Functions

Before showing the main functions, we must highlight some important functions and parameters within the application.

We created 2 functions that will facilitate when testing the package, namely: ```print()``` and ```onlyNumbers()```.

1. The first function plays the role of ```console.log()```, but we created a shortcut to make it easier:

    ```javascript
    physics.print("Show up on the console !!"); // --> Show up on the console !!
    ```

    ```ts
    import { print } from "physics-formulas-hs";
    print("Display on the console !!"); // --> Display on the console !!
    ```

2. The second function formats the returns of the physics formulas into numerics only. All the following formulas return a String, containing a number and a unit of measurement (**10m/s**). To return only the number, use this function:

    ```javascript
    physics.onlyNumbers("10 m/s"); // --> 10

    physics.onlyNumbers(physics.averageVelocity(10, 5, "km/h")); // --> 2
    ```

    ```ts
    import { onlyNumbers } from "physics-formulas-hs";

    onlyNumbers("10 m/s"); // --> 10

    onlyNumbers(fisica.averageVelocity(10, 5, "km/h")); // --> 2
    ```

    >You can use another function within this, that is, we can format the returns of the following formulas only in number.

## Formula categories

- [Vector](https://github.com/YujiYashima/physics-formulas-hs/blob/main/docs/Vector.md)

- [Kinematic](https://github.com/YujiYashima/physics-formulas-hs/blob/main/docs/Kinematic.md)

