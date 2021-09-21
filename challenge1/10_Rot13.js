// ROT13 is a simple letter substitution cipher that replaces a letter with the
// letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
//
// Create a function that takes a string and returns the string ciphered
// with Rot13. If there are numbers or special characters included in the
// string, they should be returned as they are. Only letters from the latin/english
// alphabet should be shifted, like in the original Rot13 "implementation".

function rot13( message ) {
  const messageSplit = message.split( '' );
  let encryptedMessage = [];
  messageSplit.forEach( char => {
    const charCode = char.charCodeAt(0)
    let newProtectedLetter = 0;
    if ( charCode <= 109 && charCode >= 97 ) {
      newProtectedLetter = charCode + 13;
    } else if ( charCode >= 109 && charCode <= 97 ) {
      newProtectedLetter = charCode - 13;
    } else if ( charCode <= 77 && charCode >= 65 ) {
      newProtectedLetter = charCode + 13;
    } else {
      newProtectedLetter = charCode - 13;
    }
    encryptedMessage.push( newProtectedLetter >= 65 ? String.fromCharCode( newProtectedLetter ) : char );
  } );
  return encryptedMessage.join( '' );
}

console.log( rot13( 'Test 12+123' ) );
