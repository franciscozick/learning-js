var columOne = ['X', '-', '-'];
var columTwo = ['-', 'O', '-'];
var columThree = ['X', '-', 'O'];

var rows = [columOne, columTwo, columThree];
console.log(rows[1][1]);

var columFour = ['X', '-', '-'];
rows.push(columFour); // To push new variable it needs to be added before pushing it 
console.log(rows[3][0]);

columOne.shift();// shift removes the first value from the array
console.log(columOne);
columOne.unshift('X');//unshift adds any new value to the front of the array
console.log(columOne);

console.log(columOne);
columOne.pop();
console.log(columOne);//removes the last value of the array
