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
                onClick={() => handleMove(number, index)}
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
