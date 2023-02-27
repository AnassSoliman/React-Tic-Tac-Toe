import Grid from "./components/Grid";
import { useState } from 'react'

const App = () => {
  const players = ['X', 'O'];
  const [player, setPlayer] = useState(players[0]);
  const [gridArray, setGridArray] = useState([
    [{ id: 1, clickable: true, value: '' },
    { id: 2, clickable: true, value: '' },
    { id: 3, clickable: true, value: '' }],
    [{ id: 4, clickable: true, value: '' },
    { id: 5, clickable: true, value: '' },
    { id: 6, clickable: true, value: '' }],
    [{ id: 7, clickable: true, value: '' },
    { id: 8, clickable: true, value: '' },
    { id: 9, clickable: true, value: '' }]
  ])

  const handleClick = (sq) => {
    sq.clickable ? rebuildGrid(sq) : alert('Cannot mark the same location as your opponent')
  }

  const rebuildGrid = (receivedSquare) => {
    player === 'X' ? setPlayer(players[1]) : setPlayer(players[0]);
    const newGrid = gridArray.map(inner => inner.map(square => square.id === receivedSquare.id ? {...square, value: player, clickable: !square.clickable} : square) ) // change X to player icon
    setGridArray(newGrid)
  }

  return (
    <div>
      <h1>Tic Tac Toe game</h1>
      <Grid gridArray={gridArray} onClick={handleClick} />
    </div>
  );
}

export default App;
