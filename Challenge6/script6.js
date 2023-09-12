// 1. Write a function 'calcTip' 
function calcTip(valueBill) {
    return valueBill >= 50 && valueBill <= 300 ? valueBill * 0.15 : valueBill * 0.2
}

// Test the function using a bill value of 100
console.log("Test the function using a bill value of 100: " + calcTip(100))

//2. Test data: 125, 555 and 44
var bills = [275, 40, 430]
console.log("Array bill: " + bills)

// 3. Create an array 'tips' 
var tips = bills.map(calcTip)

console.log("Array tip: " + tips)

// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
var total = []
for(let index in bills)
    total.push(bills[index] + tips[index])

console.log("Array total:  " + total)




