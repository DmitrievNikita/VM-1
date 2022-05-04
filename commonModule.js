
module.exports.isSymmetric = function(matrix, length) {
    let tr = [...Array(length)].map(elem => Array(length).fill(0));
    this.transpose(matrix, tr, length);

    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (matrix[i][j] !== tr[i][j]) {
                return false;
            }
        }
    }

    return true;
}

module.exports.transpose = function(mat, tr, length)
{
    for(let i = 0; i < length; i++) {
        for(let j = 0; j < length; j++) {
            tr[i][j] = mat[j][i];
        }
    }
}


module.exports.mult = function(a, b) {
    if (!Array.isArray(a) || !Array.isArray(b) || !a.length || !b.length) {
        throw new Error('arguments should be in 2-dimensional array format');
    }
    let x = a.length,
    z = a[0].length,
    y = b[0].length;
    if (b.length !== z) {
        throw new Error('number of columns in the first matrix should be the same as the number of rows in the second');
    }
    let productRow = Array.apply(null, new Array(y)).map(Number.prototype.valueOf, 0);
    let product = new Array(x);
    for (let p = 0; p < x; p++) {
        product[p] = productRow.slice();
    }
    for (let i = 0; i < x; i++) {
        for (let j = 0; j < y; j++) {
            for (let k = 0; k < z; k++) {
                product[i][j] += a[i][k] * b[k][j];
            }
        }
    }
    return product;
}

module.exports.sum = function(a, b, sum = true) {

    const result = [];

    for (let i = 0; i < a.length; i++) {
        if (sum) {
            result.push(a[i] + b[i]);
        } else {
            result.push(a[i] - b[i]);
        }
    }

    return result;
}