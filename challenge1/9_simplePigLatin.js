// Move the first letter of each word to the end of it, then add "ay" to the
// end of the word. Leave punctuation marks untouched.
//
//     Examples
// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){
  const stringSplit = str.split(' ')
  let modifiedString = []
  stringSplit.forEach(word => {
    if (word !== '!' && word !== '?') {
      const wordSplit = word.split( '' )
      const firstLetter = wordSplit.shift()
      wordSplit.push( firstLetter )
      wordSplit.push( 'ay' )
      modifiedString.push( wordSplit.join( '' ) )
    } else {
      modifiedString.push(word)
    }
  })
  return modifiedString.join(' ')
}

 // pigIt( 'Pig latin is cool' )
console.log( pigIt( 'Hello world !' ) );
