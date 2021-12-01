import { createStore , combineReducers} from 'redux'
import Productreducers from '../reducers/Productreducers'
import cartReducer from './cartReducer';
import { devToolsEnhancer } from 'redux-devtools-extension';
const root = combineReducers({
    Productreducers,
    cartReducer
});


const store = createStore(root , devToolsEnhancer());

export default store;