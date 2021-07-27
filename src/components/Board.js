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
  width: 50vw;
  max-width: 50vh;
`;

function Board() {
  let [chance, setChance] = useState('X');

  return (
    <BoardComponent>
      {Array(9).fill("").map((value, index) => (
        <Square
          key={index}
          chance={chance}
          position={index}
          setChance={setChance}
        />
      ))}
    </BoardComponent>
  )
}

export default Board;
