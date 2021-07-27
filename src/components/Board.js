import {
  useEffect,
  useState,
} from 'react';

import styled from 'styled-components';

import Square from './Square';

const BoardComponent = styled.div`
  border: 2px #e3e3e3 solid;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 50vw;
  max-height: 50vh;
  max-width: 50vh;
  width: 50vw;
`;

// Add redux manager to share state instead of passing as props
function Board(props) {
  const {
    finished,
    setFinished,
  } = props;

  const [board, setBoard] = useState(Array(9).fill(""));
  const [chance, setChance] = useState('X');
  const [moves, setMoves] = useState([]);

  const updateBoard = (index, chance) => {
    let updatedBoard = board.slice(0);
    updatedBoard[index] = chance;
    setBoard(updatedBoard);
  }

  const updateMoves = (index, chance) => {
    let move = {};
    move[index] = chance;
    setMoves([...moves, move]);
  }

  const checkBoard = () => {
    const winners = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    const [lastMove] = moves.slice(-1);
    if (lastMove) {
      let [lastPosition] = Object.keys(lastMove);
      lastPosition = parseInt(lastPosition);
      winners.map((value, index) => {
        if (value.indexOf(lastPosition) > -1) {
          if (
            board[value[0]] &&
            board[value[0]] === board[value[1]] &&
            board[value[0]] === board[value[2]]
          ) {
            setFinished(true);
            console.log(`${board[value[0]]} won the game.`)
          }
        }
      });
    }
  }

  useEffect(() => {
    checkBoard();
  }, [board]);

  return (
    <BoardComponent>
      {board.map((value, index) => (
        <Square
          key={index}
          finished={finished}
          chance={chance}
          position={index}
          setChance={setChance}
          updateBoard={updateBoard}
          updateMoves={updateMoves}
        />
      ))}
    </BoardComponent>
  )
}

export default Board;
