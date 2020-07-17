//first problem - feet To Mile
//second problem - wood-Calculator for 1 chair= 1,,, for 1 table= 3,,, for 1 bed= 5.
//third problem - brick-calculator for 1st 10 floor= 15 feet height;;; for second 10 floor= 12 feet;;; for 3rd to unlimited floor= 10 feet;;; 1k brick/perFeet;
//4th problem - find the tiny friend;;; search for the shortest name in a array by using function;


// feetToMile
function feetToMile(feet) {
    const mile = feet / 5280;
    return mile;
}
const test = feetToMile(5280);
console.log(test);

//  woodCalculator
function woodCalculator(chair, table, bed) {
    var woodPerChair = chair * 1;
    var woodPerTable = table * 3;
    var woodPerBed = bed * 5;
    var totalWood = woodPerBed + woodPerChair + woodPerTable;
    return totalWood;
}
const test1 = woodCalculator(0, 0, 1);
console.log('you will need total' ,test1,'piece of wood');

//  tinyFriend
function tinyFriend(friend) {
    var smallName = Infinity;
    var tinyName;
    for (var i = 0; i < friend.length; i++) {
        if (friend[i].length < smallName) {
            smallName = friend[i].length;
            tinyName = friend[i];
        }
    }
    return tinyName;
 }

// brickCalculator
function brickCalculator(floor) {
    var brickCount;
    if (floor <= 10) {
        brickCount = floor * 15 * 1000;
        return brickCount;
    }
    brickCount = 10 * 15 * 1000;
    if(floor > 10 ){
        if (floor < 20){
            const secondBuilding = floor - 10;
            brickCount = brickCount + (secondBuilding * 12 * 1000);
            return brickCount;
        }
        brickCount = brickCount + (10 * 12 * 1000);
     }
    if (floor > 20 && floor <= Infinity ){
        var thirdBuilding = floor - 20;
        brickCount = brickCount + (thirdBuilding * 10 * 1000);
     }
    return brickCount;
}
var test3 = brickCalculator(11);
console.log(test3);
