import Grid from "./components/Grid";
import Button from "./components/Button";
import { useState, useEffect } from 'react'

const App = () => {
  const players = ['X', 'O'];
  const [player, setPlayer] = useState(players[1]);
  const [gridArray, setGridArray] = useState([
    [{ id: 1, clickable: true, value: null },
    { id: 2, clickable: true, value: null },
    { id: 3, clickable: true, value: null }],
    [{ id: 4, clickable: true, value: null },
    { id: 5, clickable: true, value: null },
    { id: 6, clickable: true, value: null }],
    [{ id: 7, clickable: true, value: null },
    { id: 8, clickable: true, value: null },
    { id: 9, clickable: true, value: null }]
  ])
  const [square, setSquare] = useState({});
  const [victory, setVictory] = useState(false);
  const [text, setText] = useState(`Currently playing`);

  useEffect(() => {
    winCondition()
  }, [gridArray])

  useEffect(() => {
    rebuildGrid(square)
  }, [square])

  const handleClick = (sq) => {
    if (!victory) {
      const newSquare = { id: sq.id, clickable: sq.clickable, value: player }
      setSquare(newSquare)
    }
  }

  const rebuildGrid = (receivedSquare) => {
    if (receivedSquare.clickable) {
      const newGrid = gridArray.map(inner => inner.map(square => square.id === receivedSquare.id ? { ...square, value: player, clickable: !square.clickable } : square))
      setGridArray(newGrid)
    } else if (receivedSquare.hasOwnProperty('clickable') && !receivedSquare.clickable) {
      alert('Cannot mark the same location as your opponent')
    }

  }

  const winCondition = () => {
    for (let i = 0; i < gridArray.length; i++) {
      const horizontal = gridArray[i][0].value === gridArray[i][1].value && gridArray[i][0].value === gridArray[i][2].value && gridArray[i][0].value !== null
      const leftDiag = gridArray[0][0].value === gridArray[1][1].value && gridArray[0][0].value === gridArray[2][2].value && gridArray[i][0].value !== null
      const rightDiag = gridArray[0][2].value === gridArray[1][1].value && gridArray[0][2].value === gridArray[2][0].value && gridArray[2][0].value !== null
      const vertical = gridArray[0][i].value === gridArray[1][i].value && gridArray[0][i].value === gridArray[2][i].value && gridArray[0][i].value !== null

      if (vertical || horizontal || leftDiag || rightDiag) {
        handleVictory()
      } else {
        console.log(player)
        player === 'X' ? setPlayer(players[1]) : setPlayer(players[0])
      }
    }
  }

  const handleVictory = () => {
    setVictory(true)
    setText(`Game over... Winner : ${player}`)
  }

  const resetGrid = () => {
    setGridArray([
      [{ id: 1, clickable: true, value: null },
      { id: 2, clickable: true, value: null },
      { id: 3, clickable: true, value: null }],
      [{ id: 4, clickable: true, value: null },
      { id: 5, clickable: true, value: null },
      { id: 6, clickable: true, value: null }],
      [{ id: 7, clickable: true, value: null },
      { id: 8, clickable: true, value: null },
      { id: 9, clickable: true, value: null }]
    ])
    setPlayer(player[0])
  }

  return (
    <div>
      <Grid gridArray={gridArray} onClick={handleClick} text={text} player={player} victory={victory} />
      <Button onClick={resetGrid} />
    </div>
  );
}

export default App;
