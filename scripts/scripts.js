function SquareNumber(num1, num2, equal) {
    if (equal === 'add') {
        console.log(num1 * num2);
    }
}

SquareNumber(7, 7, 'add');


function FahrenheitCelsius(num1, num2, num3, equal) {
    if (equal === 'add') {
        console.log(num1 * num2 + num3);
    }
}

FahrenheitCelsius(10.4, 25, 38.00, 'add');


let number = 27;

if (number <= 30 && number >= 20) {
    console.log("Number");
} else if (number <= 10) {
    console.log("Beginning of the range");
} else {
    console.log("End of the range");
}



let year1 = 2001;
let year2 = 2002;
let year3 = 2003;
let year4 = 2004;
let year5 = 2005;
let year6 = 2006;
let year7 = 2007;
let year8 = 2008;
let year9 = 2009;
let year10 = 2010;

let yearNumber = 2006;

if (yearNumber == year1 || yearNumber == year2 || yearNumber == year3 || yearNumber == year4 || yearNumber == year5 || yearNumber == year6 || yearNumber == year7 || yearNumber == year8 || yearNumber == year9 || yearNumber == year10) {
    console.log("მოცემული წელი ნაკიანია")
} else {
    console.log("წელი არ არის ნაკიანი.");
}




let vegetables = prompt()

switch (vegetables) {
    case "carrot":
    alert ("Hello")
    break;
    case "broccoli":
    alert("Welcome")
    break;
    default:
    alert("Neither")

}




let cation = "move";

switch (cation) {
    case "move":
        alert("you're moving!");
    break;
    case "jump":
        alert("you're jumping!");
    break;
    case "run":
        alert("you're running!");
    break;
    default:
        alert("invalid cation.")
}