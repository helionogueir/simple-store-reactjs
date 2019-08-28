import { combineReducers, createStore } from 'redux'
import { Reducer as Products } from './container/Products'

const reducers = combineReducers({ Products })

const store = createStore(reducers)

export { store }