// A, C, F, J, O
// Opção: D
// Próxima letra: O


let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let letters = ['a', 'c', 'f', 'j'];
let indexes = [];
let pattern = [];

function findNextLetter(array1, array2, array3, array4) {
    for (let i=0; i < array1.length; i++) {
        for (let j=0; j < array2.length; j++) {
            if (array1[i]===array2[j]) {
                array3.push(i);
            }
        }
    }

    for (let x = 0; x < (array3.length-1); x++) {
        let diff = Math.abs(array3[x] - array3[x+1]);
        array4.push(diff);
    }   

    if (array4.length >= 3) {
        let first_diff = array4[1] - array4[0];
        let second_diff = array4[2] - array4[1];
        if (first_diff === second_diff) {
            let nextNumberInterval = array4[array4.length-1]+first_diff;
            let guessNextLetter = array1[array1.indexOf(array2[array2.length-1]) + nextNumberInterval];
            return guessNextLetter;
        }
    } else {
        return 'Array is too short to identify a pattern';
    }  
}

console.log(findNextLetter(alphabet, letters, indexes, pattern));



