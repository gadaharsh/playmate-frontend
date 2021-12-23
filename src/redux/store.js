import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk';
import playerReducer from './player/playerReducer';

const initialState = {};

const middleware = [thunk]

const reducers = combineReducers({
    player:playerReducer
})

const store = createStore(reducers,initialState,compose(applyMiddleware(...middleware)))

export default store;
