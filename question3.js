// a = [2, 1, 3, 5, 3, 2]

const a = [2, 1, 3, 5, 1, 5, 3, 2, 4];

function locateDuplicate(arr) {
    Array.min = function( array ){
        return Math.min.apply( Math, array );
    };

    const valuesAlreadySeen = [];
    const dups = [];
    const dupsInd = [];    

    for (let i=0; i < arr.length; i++) {
        let value = arr[i];
        if (valuesAlreadySeen.indexOf(value) === -1) {
            valuesAlreadySeen.push(value);
        } else {
            dups.push(value);
        }
    }

    for (let j = 0; j < dups.length; j++) {
        dupsInd.push(arr.lastIndexOf(dups[j]));        
    }

    return arr[Array.min(dupsInd)];
}

console.log(locateDuplicate(a));