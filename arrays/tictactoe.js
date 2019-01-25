var columOne = ['X', '-', '-'];
var columTwo = ['-', 'O', '-'];
var columThree = ['X', '-', 'O'];

var rows = [columOne, columTwo, columThree];
for (let row of rows) {
    let rowText = '';
    for (let char of row) {
        rowText += char;
    }
    console.log(rowText);
} // this will run all the values at once three times making three lines of the same thing (not what we want right now)

function middle(border, filling){
    var midChar = border
    for ( var i = 0; i < 15; i++ ){
        midChar += filling
    } 
    midChar += border
    return midChar
}



let colums = [
    []
]

function pushArray(Pushed, number ){
    for (var i = 0; i < number ; i++){
    colums.push(Pushed);
    }
}
function popArray(Pushed, number){
   Pushed
    for (var i = 0; i < number; i++){
        colums.pop();
    }
}
function logArray(Pushed, number){
    pushArray(Pushed, number);
    for (var i = 0; i < number; i++){
        console.log(colums[i]);
    }
    popArray(Pushed, number);
    }

logArray(middle('+', '-',), 15);
