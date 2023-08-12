import crossLogo from '../images/cross.png'
import circleLogo from '../images/circle.png'

import { useSelector, useDispatch } from 'react-redux'
import { ICON, STATE  } from '../redux/TicTaeToe'


const Title = ({title, onReset}) => {

  //const gameSetting = useContext(TicTacToeContext)
  const gameSetting = useSelector(state => state)
  const dispatch = useDispatch()

  const resultHtml = gameSetting.state === STATE.DRAW ? "Draw!!!" : (<><img alt='' src={gameSetting.currentIcon === ICON.CROSS ? crossLogo : circleLogo} /> wins.</>)

  return (
    <h1>{ title } <button onClick={() => {dispatch({type:'reset'})}}>Reset</button>
        {gameSetting.state !== STATE.PLAY && <span id="resultPane">{resultHtml}</span>}
    </h1>
  )
}

export default Title
