import { MOVIE_LOADING, MOVIE_LOAD_SUCCESS } from '../constants/actions'

const initState = {
    isLoading: true,
    movieApi: {},
    movieCategoriesApi: {},
}

const movieReducer = (state = initState, action) => {
    switch (action.type) {
        case MOVIE_LOADING:
            return {
                ...state,
                isLoading: action.load
            }
        case MOVIE_LOAD_SUCCESS:
            return {
                ...state,
                movieApi: action.movieFromApi,
                movieCategoriesApi: action.movieCategoriesFromApi,
                isLoading: false
            }
        default:
            return state;
    }
}

export default movieReducer;