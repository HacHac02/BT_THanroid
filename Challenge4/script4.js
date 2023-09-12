// § Data 1: Test for bill values 275, 40 and 430
var data =[275,40,430]
data.forEach((value,index)=>{
    var tip
    tip = value >= 50 && value <= 300 ?  value * 0.15 : value * 0.2
    console.log(`Data ${index+1}: The bill was ${value}, the tip was ${tip}, and the total value ${value+tip}`)
})
