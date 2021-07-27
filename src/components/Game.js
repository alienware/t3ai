import { useState } from 'react';

import Board from './Board';

function Game() {
  const [finished, setFinished] = useState(false);

  return (
    <Board
      finished={finished}
      setFinished={setFinished}
    />
  );
}

export default Game;
