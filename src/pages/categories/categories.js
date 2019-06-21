import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { API_CATEGORIES_URL } from '../../constants/const';
import Header from '../../components/header/header';
import './categories.scss';
import Loader from '../../components/loader/loader';


class Categories extends Component {
    state = {
        isLoading: true,
        categoriesApi: {},
        filterLetter: ""
    }
    componentDidMount = () => {
        //zmiana statnu przed ładnowanie i ustalenie loadera na true
        this.setState({
            isLoading: true
        })
        //zapytanie do API aby pobrać liste kategorii
        axios({
            method: 'GET',
            url: API_CATEGORIES_URL
        }).then((response) => {
            this.setState({
                isLoading: false,
                categoriesApi: response.data.categories
            })
        })
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
                    <Loader isLoading={this.state.isLoading} />
                    {!this.state.isLoading &&
                        <div className="categoriesList">
                            <h1>Lista kategorii</h1>
                            <ul className="filter">
                                <li onClick={() => this.filterByLetter("")} className={this.state.filterLetter === "" && 'active'}>Wszystkie</li>
                                <li onClick={() => this.filterByLetter("A")} className={this.state.filterLetter === "A" && 'active'}>A</li>
                                <li onClick={() => this.filterByLetter("B")} className={this.state.filterLetter === "B" && 'active'}>B</li>
                                <li onClick={() => this.filterByLetter("C")} className={this.state.filterLetter === "C" && 'active'}>C</li>
                            </ul>
                            <div className="categories">
                                {this.state.categoriesApi.filter((item) => {
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

export default Categories;