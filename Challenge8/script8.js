var bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
var tips = [], totals = []

function calcTip(value) {
    return value >= 50 && value <= 300 ? value * 0.15 : value * 0.2
}

bills.forEach((value) => {
    var tip = calcTip(value)
    tips.push(tip)
    totals.push(tip + value)
})

console.log("Array tip: " + tips)
console.log("Array total: " + totals)

//4. Write a function 'calcAverage'
function calcAverage(arr){
    var sum = 0
    arr.forEach((value)=>{
        sum += value
    })
    return sum/arr.length
}

console.log(calcAverage(bills),bills)

