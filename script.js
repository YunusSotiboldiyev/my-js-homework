// Vazifa № 1
var test1 = 67;
var test2 = 72;
var test3 = 58;
var resultsTest = test1 + test2 + test3;
var resultOfTest = resultsTest / 3;
document.write(resultOfTest);
// Vazifa № 2
let name = prompt("Ismingizni kiriting");
let surName = prompt("Familiyangizni kiriting");
alert(`Salom,${surName} ${name} Astrumga hush kelibsiz`);
// Vazifa № 3
var num1 = prompt("1-sonni kiriting");
var num2 = prompt("2-sonni kiriting");
var num3 = num1 + num2;
console.log(`qo'shish natijasi: ${num3}`);
var num4 = num1 - num2;
console.log(`ayirilish natijasi: ${num4}`);
var num5 = num1 * num2;
console.log(`ko'paytirish natijasi: ${num5}`);
var num6 = num1 / num2;
console.log(`bo'lish natijasi: ${num6}`);
// Vazifa № 4
var celsius = prompt("Haroratni selsiy shkalasi bo'yicha kiriting");
var fahrenheit = (celsius * 9/5) + 32;
var kelvin = parseFloat(celsius) + 273.15;
console.log(`Fahrenheitda: ${fahrenheit}`);
console.log(`Kelvinda: ${kelvin}`);
// Vazifa № 5
var height = prompt("To'rtburchakning uzunligini kiriting");
var weight = prompt("To'rtburchakning enini kiriting");
var result = height*weight;
console.log(`To'rtburchakning maydoni: ${result}`);
// Vazifa № 6
var height2 = prompt("To'g'ri to'rtburchakning uzunligini kiriting");
var weight2 = prompt("To'g'ri to'rtburchakning enini kiriting");

var surface = height2 * weight2;
console.log(`To'g'ri to'rtburchakning yuzasi: ${surface}`);

var perimetr = 2 * (height2 + weight2);
console.log(`To'g'ri to'rtburchakning perimetri: ${perimetr}`);

