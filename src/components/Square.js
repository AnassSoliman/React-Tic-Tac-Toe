const Square = ({ square, onClick }) => {
    return (
        <span className={'square'} onClick={() => onClick(square)} >
            {square.value}
        </span>

    )
}

export default Square
