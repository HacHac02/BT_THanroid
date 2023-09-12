var dolphinsScore = [
    (96 + 108 + 89) / 3,
    (97 + 112 + 101) / 3,
    (97 + 112 + 101) / 3
];
var koalasScore = [
    (88 + 91 + 110) / 3,
    (109 + 95 + 123) / 3,
    (109 + 95 + 106) / 3
];

console.log(dolphinsScore);
console.log(koalasScore);
let winners = [];
let losers = [];
let draws = [];

dolphinsScore.forEach((value, index)=>{
    var result = `Data ${index+1}:`
    if(value > koalasScore[index])
        if (value >= 100)
            console.log(result + "Dolphins wins a trophy and Bonus 1")
        else
            console.log(result + "Dolphins wins a trophy")
    else if(koalasScore[index] > value){
        if (koalasScore[index] >= 100)
            console.log(result + "Koalas wins a trophy and Bonus 1")
        else
            console.log(result + "Koalas wins a trophy")
    }else{
        if (value >= 100)
            console.log(result + "Dolphins and Koalas draw and Bonus 2")
        else
            console.log(result + "Dolphins and Koalas draw")
    }

})


