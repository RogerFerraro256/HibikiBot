var str = "20d20";
var res = str.split("d");

var results=[];

for (let i = 0; i < res[0]; i++) {
    
    var dice = Math.round(Math.random() * res[1]) + 1;

    results.push(dice);
}

//if(results.includes(2)){
//    console.log(results.toString());
//}


function getOccurrence(array, value) {
    return array.filter((v) => (v === value)).length;
}

console.log()