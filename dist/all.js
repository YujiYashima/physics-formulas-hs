"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accelerationEquationPosition = exports.accelerationEquationVelocity = exports.averageAcceleration = exports.uniformMotionEquationPosition = exports.instantaneousVelocity = exports.instantaneousSpeed = exports.averageVelocity = exports.averageSpeed = exports.resultantOfVectors = exports.onlyNumbers = exports.print = void 0;
// ----------------------------------------------------
//                 FACILITIES FOR DEV
// ----------------------------------------------------
/**
    Displays on the screen (console / terminal)

    @example
    ```
    import physics = require('physics-formulas-hs');

    physics.print("My name is ...")
    //=> "My name is ..."
    ```
*/
var print = function (e) { return console.log(e); };
exports.print = print;
//Returns only the number without the unit of measure
var onlyNumbers = function (value) { return Number(value.split(" ")[0]); };
exports.onlyNumbers = onlyNumbers;
// ----------------------------------------------------
//                       VECTORS
// ----------------------------------------------------
//Resultant of vectors with the law of cosines (Parallelogram Law of Vectors)
var resultantOfVectors = function (vectorA, vectorB, angleDeg) {
    var rad = angleDeg * Math.PI / 180;
    var resultingSquared = (Math.pow(vectorA, 2) + Math.pow(vectorB, 2) + (2 * vectorA * vectorB * Math.cos(rad)));
    var resultant = Math.round(Math.sqrt(resultingSquared));
    return resultant;
};
exports.resultantOfVectors = resultantOfVectors;
// ----------------------------------------------------
//                      KINEMATICS
// ----------------------------------------------------
//Average Speed
var averageSpeed = function (distanceTraveled, timeInterval, velocityUnit) {
    if (timeInterval < 0)
        return "There is no negative time!";
    var sumDistance = distanceTraveled.reduce(function (a, b) {
        return a + b;
    });
    return (sumDistance / timeInterval) + " " + velocityUnit;
};
exports.averageSpeed = averageSpeed;
//Average Velocity
var averageVelocity = function (displacement, timeInterval, velocityUnit) {
    return timeInterval < 0 ? "There is no negative time!" : displacement / timeInterval + " " + velocityUnit;
};
exports.averageVelocity = averageVelocity;
//Instantaneous Speed
var instantaneousSpeed = function (positions, times) {
    var displacement = positions.reduce(function (initial, final) {
        return final - initial;
    });
    var timeInterval = times.reduce(function (initial, final) {
        return final - initial;
    });
    var speed = displacement / timeInterval;
    return speed < 0 ? speed * -1 + " m/s" : speed + " m/s";
};
exports.instantaneousSpeed = instantaneousSpeed;
//Instantaneous Velocity
var instantaneousVelocity = function (positions, times) {
    var displacement = positions.reduce(function (initial, final) {
        return final - initial;
    });
    var timeInterval = times.reduce(function (initial, final) {
        return final - initial;
    });
    var speed = displacement / timeInterval;
    return speed + " m/s";
};
exports.instantaneousVelocity = instantaneousVelocity;
//Equation of Uniform Motion (Displacement)
var uniformMotionEquationPosition = function (initialPosition, velocity, time) {
    return time < 0 ? "There is no negative time!" : initialPosition + velocity * time + " m";
};
exports.uniformMotionEquationPosition = uniformMotionEquationPosition;
//Average Acceleration
var averageAcceleration = function (velocityChange, time) {
    return time < 0 ? "There is no negative time!" : velocityChange / time + " m/s\u00B2";
};
exports.averageAcceleration = averageAcceleration;
//Constant Acceleration Equation (Velocity)
var accelerationEquationVelocity = function (initialVelocity, acceleration, time) {
    return time < 0 ? "There is no negative time!" : initialVelocity + acceleration * time + " m/s";
};
exports.accelerationEquationVelocity = accelerationEquationVelocity;
//Constant Acceleration Equation (Position)
var accelerationEquationPosition = function (initialPosition, initialVelocity, time, acceleration) {
    return time < 0 ? "There is no negative time!" : initialPosition + (initialVelocity * time) + (acceleration * Math.pow(time, 2)) / 2 + " m";
};
exports.accelerationEquationPosition = accelerationEquationPosition;
