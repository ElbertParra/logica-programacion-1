let numberOne = parseFloat(prompt("Ingresa el primer número:"));
let numberTwo = parseFloat(prompt("Ingresa el segundo número:"));
let numberThree = parseFloat(prompt("Ingresa el tercer número:"));

let result = document.getElementById("result");

if (isNaN(numberOne) || isNaN(numberTwo) || isNaN(numberThree)) {
    console.log("Atención: Ingresa solo números válidos.");
    result.textContent = "Atención: Ingresa solo números válidos.";

} else if (numberOne === numberTwo && numberTwo === numberThree) {
    console.log("Los números son iguales.");
    result.textContent = "Los tres números son iguales.";

} else {
    let largestNumber;
    let mediumNumber;
    let smallestNumber;

    if (numberOne > numberTwo && numberOne > numberThree) {
        largestNumber = numberOne;
        if (numberTwo > numberThree) {
            mediumNumber = numberTwo;
            smallestNumber = numberThree;
        } else {
            mediumNumber = numberThree;
            smallestNumber = numberTwo;
        }
    } else if (numberTwo > numberOne && numberTwo > numberThree) {
        largestNumber = numberTwo;
        if (numberOne > numberThree) {
            mediumNumber = numberOne;
            smallestNumber = numberThree;
        } else {
            mediumNumber = numberThree;
            smallestNumber = numberOne;
        }
    } else {
        largestNumber = numberThree;
        if (numberOne > numberTwo) {
            mediumNumber = numberOne;
            smallestNumber = numberTwo;
        } else {
            mediumNumber = numberTwo;
            smallestNumber = numberOne;
        }
    }

    console.log("De mayor a menor tus numeros: " + largestNumber + ", " + mediumNumber + ", " + smallestNumber);
    result.textContent = "De mayor a menor tus números: " + largestNumber + ", " + mediumNumber + ", " + smallestNumber;

    console.log("De menor a mayor tus números: " + smallestNumber + ", " + mediumNumber + ", " + largestNumber);
    result.textContent += "\nDe menor a mayor tus números: " + smallestNumber + ", " + mediumNumber + ", " + largestNumber;
}