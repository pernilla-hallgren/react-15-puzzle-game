export const shuffleRandomOrder = (numArray: number[]): number[] => {
  const shuffledArray = [
    ...numArray
      .filter(num => num !== 0)
      .sort(() => Math.random() - 0.5),
      0,
  ];
  return !isGameSolved(shuffledArray) ? shuffledArray : shuffleRandomOrder(shuffledArray)
};

// CHECK IF GAME IS SOLVED
export const isGameSolved = (numArray: number[]) => {
  return (
    // slice and create a shallow array from 0 index to second last index (15)
    // then check if all the numb are in right order compared to index 
    // check if last elemet in array is 0
    // return true or false
    numArray.slice(0, -1).every((numArray, index) => numArray === index + 1) && 
    numArray[numArray.length] === 0
  )
}