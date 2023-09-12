// 1. Create a function 'printForecast' 

function printForecast(arr){
    var str = ""
    arr.forEach((value,index)=>{
        str += `...${value}oC in ${index+1} days`
    })
    console.log(str)
}

var data1=[17,21,23]
var data2=[12,5,-5,0,4]

printForecast(data1)
printForecast(data2)