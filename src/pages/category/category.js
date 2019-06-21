import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/header/header';
import Loader from '../../components/loader/loader';
import './category.scss';
import { loadCategoryFromApi } from '../../actions/category';
import MovieList from '../../components/movie/movieList';

class Category extends Component {
    componentDidMount = () => {
        let cleanCategoryName = this.props.match.params.name;
        this.props.dispatch(loadCategoryFromApi(cleanCategoryName));
    }
    render() {
        return (
            <div>
                <Loader isLoading={this.props.isLoading} />
                {!this.props.isLoading &&
                    <>
                        <Header
                            title={this.props.categoryFromApi.name}
                            breadcrumb={[
                                {
                                    name: 'Kategorie',
                                    link: '/kategorie'
                                },
                                {
                                    name: this.props.categoryFromApi.name,
                                    link: '/kategoria/' + this.props.categoryFromApi.clean_name
                                },
                            ]}
                        />

                        <div className="container">
                            {(this.props.moviesFromApi.length === 0) ?
                                <div>
                                    Ta kategoria nie ma jeszcze filmów
                                </div>
                                :
                                <div className="movieList">
                                    {this.props.moviesFromApi.map((item, key) => <MovieList movie={item.movie} key={key} />)}
                                </div>
                            }
                        </div>
                    </>
                }

            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return {
        isLoading: state.category.isLoading,
        categoryFromApi: state.category.categoryApi,
        moviesFromApi: state.category.moviesApi
    }
}

export default connect(mapStateToProps, null)(Category);