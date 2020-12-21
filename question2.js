// a = [1, 2, 3, X, 8, 9]
// b = [X, 6, 5, 4]
// sumA = 30;
// sumB = 22;

function findX(x) {
    const a = [1, 2, 3, x, 8, 9];
    const b = [x, 6, 5, 4];
    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return [a.reduce(reducer), b.reduce(reducer)];
}

console.log(findX(7));