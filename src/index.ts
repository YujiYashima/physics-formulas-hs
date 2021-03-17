// ----------------------------------------------------
//               STANDARD MEASURING UNITS
// ----------------------------------------------------
type velocityUnits = |"km/h"|"m/s";


// ----------------------------------------------------
//                 FACILITIES FOR DEV
// ----------------------------------------------------

//Displays on the screen (console / terminal)
const print = (e: any) => console.log(e);

//Returns only the number without the unit of measure
const onlyNumbers = (value: string) => Number(value.split(" ")[0]);


// ----------------------------------------------------
//                       VECTORS
// ----------------------------------------------------

//	Resultant of vectors with the law of cosines (Parallelogram Law of Vectors)
const resultantOfVectors = (vectorA: number, vectorB: number, angleDeg: number) => {

    const rad = angleDeg * Math.PI/180;

    const resultingSquared = (Math.pow(vectorA, 2) + Math.pow(vectorB, 2) + (2 * vectorA * vectorB * Math.cos(rad)));

    const resultant = Math.round(Math.sqrt(resultingSquared));

    return resultant;
}


// ----------------------------------------------------
//                      KINEMATICS
// ----------------------------------------------------

//Average Velocity
const averageVelocity = (displacement: number, time: number, velocityUnit: velocityUnits) => {
    
    return time < 0 ? "There is no negative time!" : `${displacement/time} ${velocityUnit}`;
}

//Equation of Uniform Motion (Position)
const uniformMotionEquationPosition = (initialPosition: number, velocity: number, time: number) => {
    
    return time < 0 ? "There is no negative time!" : `${initialPosition + velocity * time} m`;
}

//Relative Velocity (Meeting)
const relativeVelocityMeet = (velocityA: number, velocityB: number, velocityUnit: velocityUnits) => {
    
    return `${velocityA + velocityB} ${velocityUnit}`;
}  

//Relative Velocity (Persecution)
const relativeVelocityPersecution = (velocityA: number, velocityB: number, velocityUnit: velocityUnits) => {
    
    return `${velocityA - velocityB} ${velocityUnit}`;
}

//Relative Velocity (Distance)
const relativeVelocityDistance = (velocityA: number, velocityB: number, velocityUnit: velocityUnits) => {
    
    return `${velocityA + velocityB} ${velocityUnit}`;
}

//Average Acceleration
const averageAcceleration = (velocityChange: number, time: number) => {
    
    return time < 0 ? "There is no negative time!" : `${velocityChange / time} m/s²`;
}

//Constant Acceleration Equation (Velocity)
const accelerationEquationVelocity = (initialVelocity: number, acceleration: number, time: number) => {
    
    return time < 0 ? "There is no negative time!" : `${initialVelocity + acceleration * time} m/s`;
}

//Constant Acceleration Equation (Position)
const accelerationEquationPosition = (initialPosition: number, initialVelocity: number, time: number, acceleration:number) => {
    
    return time < 0 ? "There is no negative time!" : `${initialPosition + (initialVelocity * time) + (acceleration * time ** 2)/2} m`;
}


// ----------------------------------------------------
//                 EXPORTS OF FUNCTIONS
// ----------------------------------------------------

//Dev
export { print, onlyNumbers };

//Vetores
export { resultantOfVectors };

//Cinematica
export { 
    averageVelocity, uniformMotionEquationPosition, relativeVelocityMeet, relativeVelocityPersecution, relativeVelocityDistance, averageAcceleration, accelerationEquationVelocity, accelerationEquationPosition
}

