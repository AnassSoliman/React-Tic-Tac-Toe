import {FaRegCircle, FaTimes} from 'react-icons/fa'

const Square = ({ square, onClick }) => {
    return (
        <div className={'square'} onClick={() => onClick(square)} >
            {square.value === 'X' ? <FaTimes className='vertical-center'/> : square.value === 'O' ? <FaRegCircle className='vertical-center'/> : ''}
        </div>

    )
}

export default Square
