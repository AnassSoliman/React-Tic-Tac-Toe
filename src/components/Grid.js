import Row from './Row'

const Grid = ({ gridArray, onClick }) => {
    return (
        <div className='grid'>
            {gridArray.map((innerArray, i) => {
                return <div key={i}><Row innerArray={innerArray} onClick={onClick} /></div>
            })}
        </div>
    )
}

export default Grid
