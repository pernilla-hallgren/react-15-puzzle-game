import { useState } from "react";
import { shuffleRandomOrder } from "../helpers/helpers";

const BoardGame = () => {
  const numbers: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0,
  ];
  const [randomNumbers, setRandomNumbers] = useState<number[]>(numbers);
  const [isRandomized, setIsRandomized] = useState<boolean>(false);
  const [gameSolved, setGameSolved] = useState<boolean>(false);

  // SHUFFLE TILES
  const handleShuffle = () => {
    const shuffledNumbers = shuffleRandomOrder(randomNumbers);
    setRandomNumbers(shuffledNumbers);
    setIsRandomized(true);
  };

  // MOVE TILES
  const handleMoveTiles = (number: number, index: number) => {
    let zeroIndex = randomNumbers.indexOf(0); // this is the higest index 15 and the empty slot
    let valueIndex = randomNumbers.indexOf(number);
    console.log({ zeroIndex });
    console.log({ valueIndex });

    if (
      Math.abs(valueIndex - zeroIndex) === 4 || // check vertical and returns the absolute value of a number
      Math.abs(valueIndex - zeroIndex) === 1 // check horizontal 
    ) {
      shiftTiles(valueIndex, zeroIndex);
    }

    if (
      Math.abs(valueIndex - zeroIndex) === 8 || 
      Math.abs(valueIndex - zeroIndex) === 2 
    ) {
      shiftTiles(valueIndex, zeroIndex);
    }

    if (
      Math.abs(valueIndex - zeroIndex) === 12 || 
      Math.abs(valueIndex - zeroIndex) === 3 
    ) {
      shiftTiles(valueIndex, zeroIndex);
    }
  };

  // SHIFT TILES
  const shiftTiles = (valueIndex: number, zeroIndex: number) => {
    const shiftedTiles: number[] = [...randomNumbers];

    [shiftedTiles[valueIndex], shiftedTiles[zeroIndex]] = [shiftedTiles[zeroIndex], shiftedTiles[valueIndex]];
    setRandomNumbers(shiftedTiles);
  };
  

  return (
    <div>
      <button className="btn__shuffle" onClick={handleShuffle}>
        Shuffle
      </button>
      {gameSolved && (
          <div>
            <h2>Congratulations, you won!</h2>
          </div>
        )}
      <div className="container">
        {isRandomized ? (
          <div className="board__wrapper">
            {randomNumbers.map((number, index) => (
              <div
                key={number}
                onClick={() => handleMoveTiles(number, index)}
                className={
                  number === 0 ? "board__emptyTile" : "board__tile"
                }
              >
                {number}
              </div>
            ))}
          </div>
        ) : (
          <p>Click to start the game!</p>
        )}
      </div>
    </div>
  );
};

export default BoardGame;
