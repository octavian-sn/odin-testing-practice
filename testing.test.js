import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './testing';

it('matches if first character is upper', () => {
    expect(capitalize('maria')).toEqual('Maria');
});

it('matches if the string is reversed', () => {
    expect(reverseString('reversed is better than normal')).toEqual('lamron naht retteb si desrever');
});

test('calculator adding', () => {
    expect(calculator.add(3,4)).toEqual(7);
})

test('calculator subtracting', () => {
    expect(calculator.subtract(12.5,6)).toEqual(6.5);
})

test('calculator dividing', () => {
    expect(calculator.divide(21,7)).toEqual(3);
})

test('calculator multiplying', () => {
    expect(calculator.multiply(5,5)).toEqual(25);
})

test('alphabet shift', () => {
    expect(caesarCipher('abcdefghijklmnopqrstuvwxyz')).toEqual('bcdefghijklmnopqrstuvwxyza');
})

test('sentence shifting with punctuation and case match', () => {
    expect(caesarCipher('You have power over your mind - not outside events. Realize this, and you will find strength. - Marcus Aurelius')).toEqual('Zpv ibwf qpxfs pwfs zpvs njoe - opu pvutjef fwfout. Sfbmjaf uijt, boe zpv xjmm gjoe tusfohui. - Nbsdvt Bvsfmjvt');
})

test('outputting object containing numerical operations from array items', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})