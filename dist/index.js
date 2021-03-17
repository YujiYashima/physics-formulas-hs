"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accelerationEquationPosition = exports.accelerationEquationVelocity = exports.averageAcceleration = exports.relativeVelocityDistance = exports.relativeVelocityPersecution = exports.relativeVelocityMeet = exports.uniformMotionEquationPosition = exports.averageVelocity = exports.resultantOfVectors = exports.onlyNumbers = exports.print = void 0;
// ----------------------------------------------------
//                 FACILITIES FOR DEV
// ----------------------------------------------------
//Displays on the screen (console / terminal)
var print = function (e) { return console.log(e); };
exports.print = print;
//Returns only the number without the unit of measure
var onlyNumbers = function (value) { return Number(value.split(" ")[0]); };
exports.onlyNumbers = onlyNumbers;
// ----------------------------------------------------
//                       VECTORS
// ----------------------------------------------------
//	Resultant of vectors with the law of cosines (Parallelogram Law of Vectors)
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
//Average Velocity
var averageVelocity = function (displacement, time, velocityUnit) {
    return time < 0 ? "There is no negative time!" : displacement / time + " " + velocityUnit;
};
exports.averageVelocity = averageVelocity;
//Equation of Uniform Motion (Position)
var uniformMotionEquationPosition = function (initialPosition, velocity, time) {
    return time < 0 ? "There is no negative time!" : initialPosition + velocity * time + " m";
};
exports.uniformMotionEquationPosition = uniformMotionEquationPosition;
//Relative Velocity (Meeting)
var relativeVelocityMeet = function (velocityA, velocityB, velocityUnit) {
    return velocityA + velocityB + " " + velocityUnit;
};
exports.relativeVelocityMeet = relativeVelocityMeet;
//Relative Velocity (Persecution)
var relativeVelocityPersecution = function (velocityA, velocityB, velocityUnit) {
    return velocityA - velocityB + " " + velocityUnit;
};
exports.relativeVelocityPersecution = relativeVelocityPersecution;
//Relative Velocity (Distance)
var relativeVelocityDistance = function (velocityA, velocityB, velocityUnit) {
    return velocityA + velocityB + " " + velocityUnit;
};
exports.relativeVelocityDistance = relativeVelocityDistance;
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
