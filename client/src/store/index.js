import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension"
import rootReducer from '../reducer';
import thunk from "redux-thunk";


const store = createStore(
    rootReducer, // acá recibimos la función reductora (reducer)
    composeWithDevTools(applyMiddleware(thunk)),
)

export default store;

//estructura general de la Store