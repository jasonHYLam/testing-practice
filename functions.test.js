// const functions = require('./function');
const {
    capitalise,
reverseString,
calculator,
caesarCipher,
analyseArray,
} = require('./function');

test('capitalise a string', () => {
    // expect(functions.capitalise('rocks')).toBe('Rocks')
    expect(capitalise('rocks and rolling')).toBe('Rocks and rolling')
})

test('reverse a string', () => {
    expect(reverseString('Rocks and rolling')).toBe('gnillor dna skcoR')
})

test('add two numbers', () => {
    expect(calculator.add(1,3)).toBe(4)
})

test('subtract two numbers', () => {
    expect(calculator.subtract(100,3)).toBe(97)
})

test('divide two numbers', () => {
    expect(calculator.divide(42,6)).toBe(7)
})

test('divide two numbers with 1dp remainder', () => {
    expect(calculator.divide(41,6)).toBe(6.8)
})

test('multiply two numbers', () => {
    expect(calculator.multiply(10,3)).toBe(30)
})

test('caesarCipher for giraffe forwards', () => {
    expect(caesarCipher('giraffe', 5)).toBe('lnwfkkj')
})

test('caesarCipher for giraffe backwards', () => {
    expect(caesarCipher('giraffe', -5)).toBe('bdmvaaz')
})

test('caesarCipher for punctuation!', () => {
    expect(caesarCipher('giraffe, and sticks.', 5)).toBe('lnwfkkj, fsi xynhpx.')
})

test('caesarCipher for uppercase', () => {
    expect(caesarCipher('Giraffe! What are you doing!', 5)).toBe('Lnwfkkj! Bmfy fwj dtz itnsl!')
})

test('analyse the array', () => {
    expect(analyseArray([1,8,3,4,2,6])).toStrictEqual(
        {
            average: 4,
            min: 1,
            max: 8,
            length: 6,
        }
    )
})

