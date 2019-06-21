import { combineReducers } from 'redux';

//importujemy wszystkie reducery aplikacji 
import categoryReducer from './categoryReducer';

export default combineReducers({
    category: categoryReducer
});