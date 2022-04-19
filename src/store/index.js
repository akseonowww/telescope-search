
import { combineReducers, createStore } from 'redux'
import { buttonsReducer } from './buttonsReducer';

const rootReducer = combineReducers({
   buttons: buttonsReducer
})

const devToolRedux = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f

const store = createStore(
   rootReducer,
   devToolRedux
)

export default store;
