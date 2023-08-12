import React from 'react'

import { Provider } from 'react-redux';
import store from '../redux/store';

import TicTacToe from './TicTacToe';

const TicTacToeWrapper = () => {



  return (
    <Provider store={store}>
    <TicTacToe />
    </Provider>
  )
}

export default TicTacToeWrapper
