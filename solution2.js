// Prompt user for inputs
const basicSalary = parseFloat(prompt("Enter the basic salary:"));
const benefits = parseFloat(prompt("Enter the benefits:"));

// Define tax rates
const payeRates = [
  { upperLimit: 24000, rate: 0.1 },
  { upperLimit: 32333, rate: 0.25 },
  { upperLimit: Infinity, rate: 0.3 }
];

// Calculate PAYE (tax)
let paye = 0;
for (const rate of payeRates) {
  if (basicSalary <= rate.upperLimit) {
    paye = basicSalary * rate.rate;
    break;
  }
}

// Calculate NHIF deductions
let nhifDeductions = 0;
if (basicSalary <= 5999) {
  nhifDeductions = 150;
} else if (basicSalary <= 7999) {
  nhifDeductions = 300;
} else if (basicSalary <= 11999) {
  nhifDeductions = 400;
} else if (basicSalary <= 14999) {
  nhifDeductions = 500;
} else if (basicSalary <= 19999) {
  nhifDeductions = 600;
} else if (basicSalary <= 24999) {
  nhifDeductions = 750;
} else if (basicSalary <= 29999) {
  nhifDeductions = 850;
} else if (basicSalary <= 34999) {
  nhifDeductions = 900;
} else if (basicSalary <= 39999) {
  nhifDeductions = 950;
} else if (basicSalary <= 44999) {
  nhifDeductions = 1000;
} else if (basicSalary <= 49999) {
  nhifDeductions = 1100;
} else if (basicSalary <= 59999) {
  nhifDeductions = 1200;
} else if (basicSalary <= 69999) {
  nhifDeductions = 1300;
} else if (basicSalary <= 79999) {
  nhifDeductions = 1400;
} else if (basicSalary <= 89999) {
  nhifDeductions = 1500;
} else if (basicSalary <= 99999) {
  nhifDeductions = 1600;
} else {
  nhifDeductions = 1700;
}

// Calculate NSSF deductions
let nssfDeductions = 0;
if (basicSalary <= 6000) {
  nssfDeductions = basicSalary * 0.06;
} else if (basicSalary <= 18000) {
  nssfDeductions = basicSalary * 0.12;
}

// Calculate gross salary
const grossSalary = basicSalary + benefits;

// Calculate net salary
const netSalary = grossSalary - paye - nhifDeductions - nssfDeductions;

// Print the results
console.log("PAYE: " + paye);
console.log("NHIF Deductions: " + nhifDeductions);
console.log("NSSF Deductions: " + nssfDeductions);
console.log("Gross Salary: " + grossSalary);
console.log("Net Salary: " + netSalary);
