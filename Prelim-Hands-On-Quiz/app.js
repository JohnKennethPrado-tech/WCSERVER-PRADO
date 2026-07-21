const math = require('./calculation');

const ratePerHour = 300;
const hoursPerDay = 4;
const daysPerWeek = 6;

const sss = 1200;
const pagIbig = 300;
const philHealth = 400;

const totalHours = math.multiply(hoursPerDay, daysPerWeek); // 4 * 6 = 24

const grossIncome = math.multiply(ratePerHour, totalHours); // 300 * 24 = 7200

const taxRate = 0.10;
const tax = math.multiply(grossIncome, taxRate); // 7200 * 0.10 = 720

const deduction1 = math.add(tax, sss);               // 720 + 1200 = 1920
const deduction2 = math.add(deduction1, pagIbig);    // 1920 + 300 = 2220
const totalDeductions = math.add(deduction2, philHealth); // 2220 + 400 = 2620

const netSalary = math.subtract(grossIncome, totalDeductions); // 7200 - 2620 = 4580

console.log(`Gross income: ${grossIncome}`);
console.log(`Tax: ${tax}`);
console.log(`SSS: ${sss}`);
console.log(`Pag-Ibig fund: ${pagIbig}`);
console.log(`PhilHealth: ${philHealth}`);
console.log(`Total deductions: ${totalDeductions}`);
console.log(`Net salary: ${netSalary}`);