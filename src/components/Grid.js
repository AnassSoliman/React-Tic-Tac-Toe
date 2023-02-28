import Row from './Row'

const Grid = ({ gridArray, onClick, text, player, victory }) => {
    return (
        <div className='grid'>
            <h3 style={{color:'white'}}>{text} {victory ? '' : `: ${player}`}</h3>
            <div>
                {gridArray.map((innerArray, i) => {
                    return <Row key={i} innerArray={innerArray} onClick={onClick} />
                })}
            </div>
        </div>
    )
}

export default Grid
