declare type velocityUnits = "km/h" | "m/s";
/**
    Displays on the screen (console / terminal)

    @example
    ```
    import physics = require('physics-formulas-hs');

    physics.print("My name is ...")
    //=> "My name is ..."
    ```
*/
declare const print: (e: any) => void;
declare const onlyNumbers: (value: string) => number;
declare const resultantOfVectors: (vectorA: number, vectorB: number, angleDeg: number) => number;
declare const averageSpeed: (distanceTraveled: number[], timeInterval: number, velocityUnit: velocityUnits) => string;
declare const averageVelocity: (displacement: number, timeInterval: number, velocityUnit: velocityUnits) => string;
declare const instantaneousSpeed: (positions: number[], times: number[]) => string;
declare const instantaneousVelocity: (positions: number[], times: number[]) => string;
declare const uniformMotionEquationPosition: (initialPosition: number, velocity: number, time: number) => string;
declare const averageAcceleration: (velocityChange: number, time: number) => string;
declare const accelerationEquationVelocity: (initialVelocity: number, acceleration: number, time: number) => string;
declare const accelerationEquationPosition: (initialPosition: number, initialVelocity: number, time: number, acceleration: number) => string;
export { print, onlyNumbers };
export { resultantOfVectors };
export { averageSpeed, averageVelocity, instantaneousSpeed, instantaneousVelocity, uniformMotionEquationPosition, averageAcceleration, accelerationEquationVelocity, accelerationEquationPosition };
