import { useState } from 'react';

import styled from 'styled-components';

const SquareComponent = styled.div`
  align-items: center;
  border: 2px #e3e3e3 solid;
  cursor: not-allowed;
  display: flex;
  font-size: 3em;
  justify-content: center;
  min-height: 10vh;

  .empty&:hover {
    background-color: #c3c3c3;
    box-shadow: 0.05em 0.05em 0.1em 0.1em #282c34;
    cursor: progress;
    transform: scale(1.025);
    transition: transform ease 0.5s;
  }
`;

function Square(props) {
  const {
    chance,
    finished,
    position,
    setChance,
    updateBoard,
    updateMoves,
  } = props;

  let [className, setClassName] = useState('empty');
  let [clicked, setClicked] = useState(false);
  let [value, setValue] = useState('');

  const onHover = (value) => {
    if (finished === false && clicked === false) {
      setValue(value);
      setClassName('empty');
    }
  }

  const onChance = () => {
    if (finished === false && clicked === false) {
      setValue(chance);
      updateBoard(position, chance);
      updateMoves(position, chance);
      setClassName('');
      setChance(chance === 'X' ? 'O' : 'X');
      setClicked(true);
    }
  }

  return (
    <SquareComponent
      className={className}
      onClick={() => onChance()}
      onMouseEnter={() => onHover(chance)}
      onMouseLeave={() => onHover('')}
    >
      {value}
    </SquareComponent>
  )
}

export default Square;
