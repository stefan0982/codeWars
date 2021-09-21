// Complete the method/function so that it converts dash/underscore
// delimited words into camel casing. The first word within the output
// should be capitalized only if the original word was capitalized
// (known as Upper Camel Case, also often referred to as Pascal case).
//
// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase( str ) {
  const stringArray = str.split( '' );
  let outputString = [];
  stringArray.forEach( ( char, index ) => {
    if ( char === '-' || char === '_' ) {
      // stringArray.pop()
      outputString.push( stringArray[index + 1].toUpperCase() );
      delete stringArray[index + 1]
    } else {
        outputString.push( char );
    }
  } );
  return outputString.join( '' );
}

console.log( toCamelCase( 'the_stealth_warrior' ) );
