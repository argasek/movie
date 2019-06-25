import axios from 'axios';
import { MOVIE_LOADING, MOVIE_LOAD_SUCCESS } from '../constants/actions'
import { API_MOVIE_URL } from '../constants/const'

export const loadMovieFromApi = (cleanNameMovie) => {
    return (dispatch) => {
        dispatch(changeMovieLoading(true));
        return axios({
            method: 'GET',
            url: API_MOVIE_URL + cleanNameMovie,
        }).then((response) => {
            dispatch(movieLoadSuccess(response.data.movie, response.data.categories))
        })
    }
}

export const changeMovieLoading = (loading) => {
    return {
        type: MOVIE_LOADING,
        load: loading
    }
}

export const movieLoadSuccess = (movieFromApi, movieCategoriesFromApi) => {
    return {
        type: MOVIE_LOAD_SUCCESS,
        movieFromApi: movieFromApi,
        movieCategoriesFromApi: movieCategoriesFromApi,
    }
}