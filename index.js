const squareRootMethod = require("./squareRootMethod");
const commonModule = require("./commonModule");
const jacobi = require("./jacobi");

// const eps = 0.0001;
const eps = 2 * Math.pow(10, -2);

// const matrix = [[ -4, 1, 1, 2 ],
//             [ 1, -9, 3, 5 ],
//             [ 1, 2, -16, 13 ]];

let m = "Никита".length;
let k = "ДмитриевНикитаИгоревич".length;
console.log(k);

const matrix = [
    [ 12 + k,       2,   m / 4,     1,           2, 1 ],
    [      4, 113 + k,       1,     m / 10,  m - 4, 2 ],
    [      1,       2, -24 - k,     3,           4, 3 ],
    [      1,   2 / m,       4,  33 + k,         4, 4 ],
    [     -1,       2,      -3,   3 + m,   -44 - k, 5 ],

];

// const { x, y } = choletsky(matrix);


// for (let i = 0; i < y.length; i++) {
//     let num = Math.floor(y[i] * 100) / 100;
//     y[i] = Math.floor(y[i] * 100) / 100;
// }

// console.log(x);
// console.log(y);



console.log("_______________________________");


const mat1 = [
    [-4, 1, 1, 2],
    [1, -9, 3, 5],
    [1, 2, -16, 13],
];

const b = [
    2,
    5, 
    13
];

const { x: x1, y: y1 } = squareRootMethod(matrix);

for (let i = 0; i < x1.length; i++) {
    let num = Math.floor(x1[i] * 100) / 100;
    x1[i] = Math.floor(x1[i] * 100) / 100;
}

// for (let i = 0; i < y1.length; i++) {
//     let num = Math.floor(y1[i] * 100) / 100;
//     y1[i] = Math.floor(y1[i] * 100) / 100;
// }

console.log("Метод квадратного корня:");
console.log(x1);
//console.log(y1);


const matrix44 = [
    [-4, 1, 1, 2],
    [1, -9, 3, 5],
    [1, 2, -16, 13],
];


console.log("Метод Якоби:");
console.log(jacobi(matrix, eps));