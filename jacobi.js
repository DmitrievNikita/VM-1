const commonModule = require('./commonModule');


module.exports = function (matrA, eps) {
    let length = matrA.length;

    let b = Array(length).fill(0);

    for (let i = 0; i < length; i++) {
        b[i] = matrA[i][length];
    }

    const matrB = [...Array(length)].map(elem => Array(length).fill(0));

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (i === j) {
                matrB[i][j] = 0;
            } else {
                matrB[i][j] = -( matrA[i][j] / matrA[i][i] );
            }
        }
    }

    const d = Array(length).fill(0);

    for (let i = 0; i < length; i++) {
        d[i] = b[i] / matrA[i][i];
    }

    let q = jacobiMaxValue(matrB);
    //console.log("q: " + q);

    matrixRounding(matrB);
    arrayRounding(d);

    let norm = 0;

    let xPrev = Array(length).fill(0);
    let x = copyArray(d);

    norm = findNorma(x, xPrev);

    while (norm > eps * ((1 - q) / q)) {

        const matrixX = arrayInMatrix(x);


        const mult = commonModule.mult(matrB, matrixX);

        const arr = matrixInArray(mult);

        const result = commonModule.sum(arr, d);

        xPrev = x;
        x = result;

        norm = findNorma(x, xPrev);

        //console.log(x);
    }


    //console.log(x);

    return x; 
}


function jacobiMaxValue(matrix) {
    let length = matrix.length;
    let max = 0;

    for (let i = 0; i < length; i++) {
        let sum = 0;
        for (let j = 0; j < length; j++) {
            if (i !== j) {
                sum += matrix[i][j];
            }
        }
        if (sum > max) {
            max = sum;
        }
    }

    return max;
}


function findNorma(xi, xi_1) { 
    let max = 0;
    for (let i = 0; i < xi.length; i++) {
        let current = Math.abs(xi[i] - xi_1[i]);
        if (current > max) {
            max = current;
        }
    }
    return max;
}

function matrixInArray(matrix) {
    const arr = [];
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            arr.push(matrix[i][j]);
        }
    }
    return arr;
}

function arrayInMatrix(arr) {
    const matrix = [];
    for (let i = 0; i < arr.length; i++) {
        matrix.push([arr[i]]);
    }
    return matrix;
}

function copyArray(arr) {
    const newArray = [];

    for (let i = 0; i < arr.length; i++) {
        newArray.push(arr[i]);
    }
    return newArray;
}

function matrixRounding(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[i][j] = Math.floor(matrix[i][j] * 100) / 100
        }
    }
}

function arrayRounding(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Math.floor(arr[i] * 100) / 100
    }
}