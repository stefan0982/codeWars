// Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.
//
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

const moveZeros = ( arr ) => {
  // let modifiedArray = [];
  // let zerosArray = []
  // arr.forEach(number => {
  //   if ( number !== 0) {
  //     modifiedArray.push(number)
  //   } else {
  //     zerosArray.push(0)
  //   }
  // })
  const zerosArray = arr.filter(number => number === 0)
  const modifiedArray = arr.filter(number => number !== 0)
  return [...modifiedArray, ...zerosArray]
};

console.log( moveZeros( [ 1, 2, 0, 1, 0, 1, 0, 3, 0, 1 ] ) );
