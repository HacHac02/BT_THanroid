var data=[{
    'full name':'Mark Miller',
    mass:78,
    height:1.69 
},
{
    'full name':'John Smith',
    mass:92,
    height:1.95
}];

function calcBMI(value){
    return value.mass/(value.height*value.height)
}

var result= data.map((value)=>{
    value.BMI = calcBMI(value)
    return value
})

console.log(result)

var high
var low
data[0].BMI > data[1].BMI ? (high = 0,low = 1): (high = 1,low = 0)

console.log(`${data[high]["full name"]}'s BMI (${data[high].BMI.toFixed(2)}) is higher than ${data[low]["full name"]}'s (${data[low].BMI.toFixed(2)})`)



