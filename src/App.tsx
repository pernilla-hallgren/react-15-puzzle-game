import "./assets/styles/main.scss";
import BoardGame from "./components/BoardGame";

const App = () => {

  return (
    <main className="main-wrapper">
      <h1>15 Puzzle Game</h1>
      <BoardGame />
    </main>
  );
};

export default App;
