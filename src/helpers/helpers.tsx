export const shuffleRandomOrder = (numArray: number[]): number[] => {
  const shuffledArray = [
    ...numArray
      .filter(num => num !== 0)
      .sort(() => Math.random() - 0.5),
      0,
  ];
  return !isGameSolved(shuffledArray) ? shuffledArray : shuffleRandomOrder(shuffledArray)
};

export const isGameSolved = (numArray: number[]) => {
  return (
    numArray.slice(0, -1).every((numArray, index) => numArray === index + 1) && 
    numArray[numArray.length] === 0
  )
}