import { combineReducers } from 'redux';

//importujemy wszystkie reducery aplikacji 
import categoryReducer from './categoryReducer';
import categoriesReducer from './categoriesReducer';
import movieReducer from './movieReducer';

export default combineReducers({
    category: categoryReducer,
    categories: categoriesReducer,
    movie: movieReducer
});