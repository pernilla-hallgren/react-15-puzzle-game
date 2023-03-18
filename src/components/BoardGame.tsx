import { useState } from "react";
import { isGameSolved, shuffleRandomOrder } from "../helpers/helpers";
import Tile from "./Tile";

const BoardGame = () => {
  const numbers: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0,
  ];
  const [randomNumbers, setRandomNumbers] = useState<number[]>(numbers);
  const [isRandomized, setIsRandomized] = useState<boolean>(false);
  const [gameSolved, setGameSolved] = useState<boolean>(false);
  const [showInfo, setShowInfo] = useState<boolean>(false);

  // SHUFFLE TILES
  const handleShuffle = () => {
    const shuffledNumbers = shuffleRandomOrder(randomNumbers);
    setRandomNumbers(shuffledNumbers);
    setIsRandomized(true);
    const gameFinished = isGameSolved(shuffledNumbers)
    setShowInfo(false)
    if(!gameFinished) {
      setGameSolved(false)
    }
  };

  // WIN GAME 
  const handleWinGame = () => {
    setRandomNumbers(numbers)
    setGameSolved(true)
  };

  // SHOW INSTRUCTIONS
  const handleShowInstructions = () => {
    setShowInfo(!showInfo)
  }

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

    const gameFinished = isGameSolved(shiftedTiles)
    if(gameFinished) {
      setGameSolved(true)
    }
  };
  

  return (
    <div className="container">
      <div className="btn-wrapper">
        <button className="btn" onClick={handleShuffle}>
          Shuffle
        </button>
        <button className="btn" onClick={handleShowInstructions}>Instructions</button>
      </div>
      {gameSolved && (
        <div>
          <h2>Congratulations, you won!</h2>
        </div>
      )}
      {showInfo ? (
        <p className="board__instructions">To solve the 15 puzzle game, identify misplaced tiles, move them towards their 
          correct position by clicking on adjacent tiles, and repeat until all tiles are in 
          the correct positions. You win when all the tiles are in ascending order. 
          Be patient and persistent.
          <br/><br/>
          Good Luck!
        </p>
      ) : null}
      <div>
        {isRandomized ? (
          <>
            <div className="board__wrapper">
              {randomNumbers.map((number, index) => (
                <Tile key={number} number={number} onClick={() => handleMoveTiles(number, index)}/>
              ))}
            </div>
            <div className="btn-section">
              <button className="btn win" onClick={handleWinGame}>Solve the game</button>
            </div>
          </>
        ) : (
          <p>Click shuffle to start the game!</p>
        )}
      </div>
    </div>
  );
};

export default BoardGame;
