import { legacy_createStore } from 'redux'
/* import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import { combineReducers } from 'redux'
 */
import { gameReducer } from './TicTaeToe'

//const rootReducer = combineReducers({cake: cakeReducer, iceCream: iceCreamReducer, user: userReducer})
//const store = legacy_createStore(rootReducer, composeWithDevTools( applyMiddleware(logger, thunk)))
const store = legacy_createStore(gameReducer)

export default store