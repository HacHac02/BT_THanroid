// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
var data=[
    {
        Dolphins:[44,23,71],
        Koalas:[65,54,49]
    },{
        Dolphins:[85,54,41],
        Koalas:[23,34,27]
    }
]

// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
function calcAverage(arr){
    return arr.reduce((pre,cur)=>{
        return pre+cur
    },0)/arr.length
}

// 2. Use the function to calculate the average for both teams
var averageScore = data.map((value,index)=>{
    var result = {
        Dolphins: calcAverage(value.Dolphins),
        Koalas: calcAverage(value.Koalas)
    }
    console.log(`Data ${index+1}: avegare score of Dolphins(${result.Dolphins}) and Koalas(${result.Koalas})`)    
    return result
})
console.log(averageScore)

// 3. Create a function 'checkWinner'
function checkWinner(value,index){
    var scoreDol = value.Dolphins
    var scoreKoa = value.Koalas
    if(scoreDol > scoreKoa*2){
        console.log(`Data ${index+1}: Dolphins win (${scoreDol} vs. ${scoreKoa})`)
    }else if(scoreKoa > scoreDol*2){
        console.log(`Data ${index+1}: Koalas win (${scoreKoa} vs. ${scoreDol})`)
    }else{
        console.log(`Data ${index+1}: No team wins`)
    }
}   

// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
averageScore.forEach(checkWinner)



