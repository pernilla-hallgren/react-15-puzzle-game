import useRandomOrder from "../hooks/useRandomOrder";

const BoardGame = () => {
  const numbers: number[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 0,
  ];
  const [randomNumbers, isRandomized, handleShuffle] =
    useRandomOrder(numbers);

  return (
    <div>
      <button className="btn__shuffle" onClick={handleShuffle}>Shuffel</button>
        <div className="container">
          {isRandomized ? (
            <div className="board__wrapper">
              {randomNumbers.map(number => (
                <div key={number} className="board__number">{number}</div>
              ))}
            </div>
            
          ) : (
            <p>Click the button to start the game!</p>
          )}
        </div>
    </div>
  );
};

export default BoardGame;
