function capitalise(string) {
    let capitalisedString = '';

    //create array from the string
    // loop through the array and add to capitalisedString
    [...string].forEach((letter, index) => {
    // if the first loop, then capitalise it
        if (index === 0) return capitalisedString = capitalisedString + letter.toUpperCase()
        capitalisedString = capitalisedString + letter
    })
    return capitalisedString;
}

function reverseString(string) {
    let reversedString = '';
    //reverse the array
    // take the end letter, and add it to reversedString
    //
    [...string].reverse().forEach(letter => {
        return reversedString = reversedString + letter
    })
    return reversedString
    }

const calculator = {
    add: function(a, b) {
        return a + b
    },

    subtract: function(a, b) {
        return a-b;
    },

    divide: function(a, b) {
        return Math.round(a/b * 10)/10;
    },
    multiply: function(a, b) {
        return a*b;
    },
}

function caesarCipher(string, shift) {
    let newString = '';
    // needs a buffer on eitherside. on the left, for negative shift and + 26; on the right, for end letters and + 26.
    let alphabet = [...'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'];
    // get the letter that is away by the specified shift

    function checkCase(char) {
        if ([...' !,.'].includes(char)) return null
        else if (char.toUpperCase() === char) return 'upper'
        else if (char.toLowerCase() === char) return 'lower'
    }

    function addLetter(char) {
        // get the index of the original letter
        const shiftIndex = alphabet.findIndex((letter) => char.toLowerCase() === letter)+shift+26;
        // if the letter is uppercase, add the uppercase version
        if (checkCase(char) === 'upper') return newString += alphabet[shiftIndex].toUpperCase();
            //else, add the lowercase version
        else if (checkCase(char) === 'lower') return newString += alphabet[shiftIndex];
    }

    [...string].forEach(char => {
        // shift if the character is a letter
        if (checkCase(char) != null) addLetter(char)
        // else, char is punctuation; do not shift
        else return newString += char;
    })
    return newString;
}

function analyseArray(array) {
    let object = {
        average: array.reduce((el, sum) => sum+el, 0) / array.length,
        min: Math.min(...array),
        max: Math.max(...array),
        length: array.length,
    }
    console.log(object)
    return object;
}

module.exports = {
    capitalise,
    reverseString,
    calculator,
    caesarCipher,
    analyseArray,
}