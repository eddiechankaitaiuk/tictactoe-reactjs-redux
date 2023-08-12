import React from 'react'

import { useSelector } from 'react-redux'

import Title from './Title'
import Button from './Button'
import WinLine from './WinLine'
 
import '../css/tictactoe.css'

export const ICON = {
  CROSS: "cross",
  CIRCLE: "circle"
}

export const WINLINE = {
  NOTHING: 0,
  VERTICAL: 1,
  HORIZONTAL: 2,
  SLASHDIAGONAL: 4,
  BACKSLASHDIAGONAL: 8
}

export const STATE = {
  PLAY: "play",
  WIN: "win",
  DRAW: "draw"
}

const TicTacToe = () => {

  console.log("start")

  const fnReset = () => { 
    //dispatch({type: "reset"})
  }

  const gameSetting = useSelector(prevGameSetting => prevGameSetting)  

  return (
     <>
    <Title title="Tic Tac Toe" onReset={fnReset} />
    <div className={'grid-container ' + gameSetting.currentIcon}>
        {
            gameSetting.buttonsStatus.map((item, index) => {
                return(
                <Button key={index} buttonID={index}  />
                )
            })
        }
        {(gameSetting.winLine & WINLINE.VERTICAL) > 0 && <WinLine mode="vertical" position={gameSetting.winVerticalPosition} />}
        {(gameSetting.winLine & WINLINE.HORIZONTAL) > 0  && <WinLine mode="horizontal" position={gameSetting.winHorizontalPosition} />}
        {(gameSetting.winLine & WINLINE.BACKSLASHDIAGONAL) > 0  && <WinLine mode="backslashdiagonal" />}
        {(gameSetting.winLine & WINLINE.SLASHDIAGONAL) > 0  && <WinLine mode="slashdiagonal" />}
    </div>
     </>
  )
}

export default TicTacToe
