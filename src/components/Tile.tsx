import { FunctionComponent } from "react";

type Props = {
  number: number;
  onClick?: (e?: any) => void;
};

const Tile: FunctionComponent<Props> = ({ number, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={number === 0 ? "board__tile__emptyTile" : "board__tile"}
    >
      {number}
    </div>
  );
};

export default Tile;
