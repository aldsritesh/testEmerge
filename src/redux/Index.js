
import {composeWithDevTools} from 'redux-devtools-extension';
import  thunkMiddleware  from 'redux-thunk';
import { applyMiddleware , createStore } from 'redux';
import rootReducer from './reducer/Rootreducer';

const composedEnhancer = composeWithDevTools(applyMiddleware(thunkMiddleware));

const store  = createStore( rootReducer , composedEnhancer);

store.subscribe(()=>{

});

export default store;