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

let fruits = ["Banana"];

let basket = fruits; //you can set one var equal to an array

basket.push('Apples');// and if you use push on that var you will directly add to the array
console.log(fruits);

for (var i=0; i < 3; i++){
    
    console.log(rows[i]);   
}// logs all the values in row one at a time, so in three different lines

for (let row of rows){
    console.log(rows);
}// this will run all the values at once three times making three lines of the same thing (not what we want right now)

let arr = [1, 2, 3, 4, 5];
arr[9]= 10;// positions 5-8 will be empty
arr.length;// shows the length of the array
arr.length = 0// you can set up a value for the lenght, if you set it up to 0 it clears the array completely
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[1][2]);
matrix.push([10, 11, 12]);
console.log(matrix);
matrix.pop();
console.log(matrix);