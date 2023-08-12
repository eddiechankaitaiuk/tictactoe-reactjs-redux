
import { useSelector, useDispatch } from 'react-redux'
import { STATE  } from '../redux/TicTaeToe'


const Button = ({buttonID}) => {

  const gameSetting = useSelector(state => state)
  const dispatch = useDispatch()
  
  return (
    <button data-id={buttonID} onClick ={() => dispatch({type:"buttonClick", payload:{buttonID: buttonID}})} className={gameSetting.buttonsStatus[buttonID]} 
    disabled={gameSetting.state !== STATE.PLAY || gameSetting.buttonsStatus[buttonID] !== ""} ></button>
  )
}

export default Button
