//ssassssssssss
console.log("Challenge 1")
var data=[{
    Mark:{height: 1.69, weight:78},
    John:{height: 1.95, weight:92}
},
{
    Mark:{height: 1.88, weight:95},
    John:{height: 1.76, weight:85}
}];

function calculate(weight,height){
    return weight/(height*height)
}

var result= data.map((value)=>{
    var bmiMark=calculate(value.Mark.weight,value.Mark.height);
    var bmiJohn=calculate(value.John.weight,value.John.height);
    value.Mark.bmi=bmiMark;
    value.John.bmi=bmiJohn;
    return value;
})


result.forEach((value,index)=>{
    console.log(`Data ${index+1}:`)
    console.log('Mark\'s BMI: '+value.Mark.bmi)
    console.log('Join\'s BMI: '+value.John.bmi)
})


markHigherBMIs = result.map((value,index)=>{
   return value.Mark.bmi> value.John.bmi? true :false 
})

console.log('----------')
console.log("Challenge 2")
markHigherBMIs.forEach((value,index)=>{
    var mess =  value ? 'Mark\'s BMI is higher than John\'s!' : "John's BMI is higher than Mark's!"
    console.log(`Data ${index+1}: ${value} (${mess})`)
})

console.log("----------")
markHigherBMIs.forEach((value,index)=>{
    MarkBMI = result[index].Mark.bmi.toFixed(2)
    JoinBMI = result[index].John.bmi.toFixed(2)
    var mess =  value ?
        `Mark's BMI (${MarkBMI}) is higher than John's (${JoinBMI})!` :
        `John's BMI (${JoinBMI}) is higher than Mark's (${MarkBMI})!`
    console.log(`Data ${index+1}: ${mess}`)
})




