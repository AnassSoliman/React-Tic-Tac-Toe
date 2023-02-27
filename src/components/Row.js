import Square from './Square'

const Row = ({ innerArray, onClick }) => {
    return (
        <div className='row'>
        {innerArray.map((square, i) => {
            return <Square key={i} square={square} onClick={onClick} />
        })}
    </div>
    )

}

export default Row
