import { useState } from "react";

const useRandomOrder = (numbers: number[]): [number[], boolean, () => void] => {
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
  const [isRandomized, setIsRandomized] = useState<boolean>(false);

  const shuffleArray = (array: number[]): number[] => {
    const shuffledArray = [...array];
    return shuffledArray.sort(() => Math.random() - 0.5);
  };

  const handleShuffle = () => {
    setRandomNumbers(shuffleArray(numbers));
    setIsRandomized(true);
  };

  return [randomNumbers, isRandomized, handleShuffle];
};

export default useRandomOrder;
