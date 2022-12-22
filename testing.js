function capitalize(a) {
  let chars = a.split('');
  let upper = chars[0].toUpperCase()
  chars[0] = upper
  return chars.join('');
}
  
function reverseString(a) {
  let chars = a.split('');
  return (chars.reverse()).join('')
}

const calculator = {
  add: function(a, b) {
    return a + b
  },
  subtract: function(a, b) {
    return a - b
  },
  divide: function(a, b) {
    return a / b
  },
  multiply: function(a, b) {
    return a * b
  }
}

function caesarCipher(a, b = 1) {
  let lowers = a.toLowerCase();
  let array = lowers.split('');
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let upperAlphabet = 'abcdefghijklmnopqrstuvwxyz'.toUpperCase().split('');
  let uppers = [];
	// Mark upper-case positions
  for (let i = 0; i <= a.length; i++) {
		if (upperAlphabet.includes(a[i])) uppers.push(i)
	}

	// Shift all letters
  for (let i = 0; i <= array.length; i++) {
    if (alphabet.includes(array[i])) {
      let current = alphabet.find(element => element === array[i]);
      let next = alphabet[alphabet.indexOf(current) + b]
			array[i] === 'z' ? array[i] = 'a' : array[i] = next
    }
  }

	// Change lower cases to upper-cases back up again
	uppers.forEach(position => {
		array[position] = array[position].toUpperCase();
	})
	
  return array.join('');
}

export {capitalize, reverseString, calculator, caesarCipher}