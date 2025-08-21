function monthlySavings(payments, livingCost) {
    if (!Array.isArray(payments) || typeof livingCost !== "number") {
        return "invalid input";
    }

    let totalIncome = 0;
    for (let pay of payments) {
        if (typeof pay !== "number") return "invalid input"; 
        if (pay >= 3000) {
            totalIncome += pay - (pay * 0.2); 
        } else {
            totalIncome += pay;
        }
    }

    let savings = totalIncome - livingCost;

    if (savings >= 0) {
        return savings;
    } else if (savings <= 0) {
        return "earn more";
    }
}


console.log(monthlySavings([1000, 2000, 3000], 5400));
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([900, 2700, 3400], 10000));
console.log(monthlySavings(100, [900, 2700, 3400]));
