"use strict"

const calculateBMI = (weightKg, heightM) => Math.round((weightKg/(heightM**2))*100)/100;

function classifyBMI(bmi){
    //return bmi < 18.5 ? 'UnderWeight' : (funtion => {return bmi < 24.9 ? 'Normal' : 'OverWeight'})();
    return bmi < 18.5 ? 'UnderWeight' : bmi < 24.9 ? 'Normal' : 'OverWeight';
}

function printHealthReports(Name, W, H){
    console.log(`\n\n---Health Report for ${Name}---`);
    console.log(`Weight: ${W} | Height: ${H}`);
    console.log(`BMI: ${calculateBMI(W,H)} -- ${classifyBMI(calculateBMI(W,H))}`);
    console.log(`-----------------------------\n`);
};

printHealthReports('Ahmad', 55, 1.6);
printHealthReports('John', 48, 1.8);
printHealthReports('Mark', 78, 1.7);