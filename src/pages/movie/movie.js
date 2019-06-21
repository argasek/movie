import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from '../../components/loader/loader';
import { loadMovieFromApi } from '../../actions/movie'
import { Link } from 'react-router-dom';
import './movie.scss'

class Movie extends Component {
    componentDidMount = () => {
        let cleanMovieName = this.props.match.params.name;
        //alert(cleanMovieName)
        this.props.dispatch(
            loadMovieFromApi(cleanMovieName)
        )
    }
    render() {
        return (
            <div className="container">
                <Loader isLoading={this.props.czyLadujeSieKreciolek} />
                {!this.props.czyLadujeSieKreciolek &&
                    <div className="movie">
                        <h1>{this.props.movie.name}</h1>
                        <div className="description">
                            {this.props.movie.description}
                        </div>
                        <div className="categories">
                            <p> Film znajduje się w kategoriach: </p>
                            <ul>
                                {this.props.categories.map((item, key) =>
                                    <li><Link to={`/kategoria/${item.category.clean_name}`}>{item.category.name} </Link> </li>)}
                            </ul>
                        </div>
                        <div className="gallery">
                            {this.props.movie.photos.map((item, key) =>
                                <img src={item.photo} alt={this.props.movie.name} />
                            )}
                        </div>
                    </div>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        czyLadujeSieKreciolek: state.movie.isLoading,
        movie: state.movie.movieApi,
        categories: state.movie.movieCategoriesApi,
    }
}
export default connect(mapStateToProps, null)(Movie);