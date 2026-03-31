// Coding Challenge # 3

// Data 1

let dolphinScore = (96 + 108 + 89) / 3;
let koalasScore = (89 + 91 + 110) / 3;
console.log(`Dolphin Score Average is ${dolphinScore}`);
console.log(`Koalas Score Average is ${koalasScore}`);

if(dolphinScore > koalasScore && dolphinScore >= 100){
    console.log("Dolphins win");
}
    

else if(koalasScore > dolphinScore && koalasScore >= 100){
    console.log("Koalas win");
}

else if(koalasScore === dolphinScore && koalasScore >= 100 && dolphinScore >= 100){
    console.log("Draw");
}

else{
    console.log("No team wins");
    
}

// Data 2
let dolphins = (97 + 112 + 101) / 3;
let koalas = (109 + 95 + 123) /3;
console.log(`Dolphins Average is ${dolphins}`);
console.log(`koalas Average is ${koalas}`);

if (dolphins > koalas && dolphin >= 100) {
    console.log("DOLPHINS WIN THE MATCG");
}
else if (koalas > dolphins && koalas >= 100) {
    console.log("KOALAS WIN THE MATCH");
}

else if (koalas === dolphins && koalas >= 100 && dolphins >= 100) {
    console.log("DRAW");
}

else{
    console.log("NO TEAM WINNER");
}