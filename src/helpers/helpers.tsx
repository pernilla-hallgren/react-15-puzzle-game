export const shuffleRandomOrder = (numArray: number[]): number[] => {
  const shuffledArray = [
    ...numArray
      .filter(num => num !== 0)
      .sort(() => Math.random() - 0.5),
      0,
  ];
  return shuffledArray
};