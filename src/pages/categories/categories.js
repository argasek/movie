import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../../components/header/header';
import './categories.scss';
import Loader from '../../components/loader/loader';
import { loadCategoriesFromApi } from '../../actions/categories';


class Categories extends Component {
    state = {
        filterLetter: ""
    }
    componentDidMount = () => {
        this.props.dispatch(loadCategoriesFromApi());
    }
    filterByLetter = (letter) => {
        this.setState({
            filterLetter: letter
        })
    }
    render() {
        return (
            <div>
                <Header
                    title="Lista kategorii"
                    breadcrumb={[
                        {
                            name: 'Lista kategorii',
                            link: '/kategorie'
                        }
                    ]}
                />
                <div className="container">
                    <Loader isLoading={this.props.isLoading} />
                    {!this.props.isLoading &&
                        <div className="categoriesList">
                            <h1>Lista kategorii</h1>
                            <ul className="filter">
                                <li onClick={() => this.filterByLetter("")} className={this.state.filterLetter === "" && 'active'}>Wszystkie</li>
                                <li onClick={() => this.filterByLetter("A")} className={this.state.filterLetter === "A" && 'active'}>A</li>
                                <li onClick={() => this.filterByLetter("B")} className={this.state.filterLetter === "B" && 'active'}>B</li>
                                <li onClick={() => this.filterByLetter("C")} className={this.state.filterLetter === "C" && 'active'}>C</li>
                            </ul>
                            <div className="categories">
                                {this.props.categoriesApi.filter((item) => {
                                    if (this.state.filterLetter === "") {
                                        return true;
                                    } else {
                                        return (item.name[0].toUpperCase() === this.state.filterLetter)
                                    }
                                }).map((item, key) => {
                                    return (
                                        <div className="category" key={key}>
                                            <Link to={`/kategoria/${item.clean_name}`}>
                                                {item.name}
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.categories.isLoading,
        categoriesApi: state.categories.categoriesApi
    }
}

export default connect(mapStateToProps, null)(Categories);