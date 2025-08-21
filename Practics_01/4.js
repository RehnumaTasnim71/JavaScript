function checkLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        console.log(year + " Leapyr");
    } else {
        console.log(year + " NOT Leapyr");
    }
}

checkLeapYear(2024);
checkLeapYear(2023); 
