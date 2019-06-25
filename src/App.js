import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './pages/homepage/homepage';
import Navbar from './components/navbar/navbar';
import './styles/index.scss';
import Movie from './pages/movie/movie';
import NotFound from './pages/notfound/notfound';
import Footer from './components/footer/footer';
import Category from './pages/category/category';
import Categories from './pages/categories/categories';
import RegisterPage from './pages/register/register';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/film/:name" component={Movie} />
        <Route path="/kategorie" component={Categories} />
        <Route path="/kategoria/:name" component={Category} />
        <Route path="/rejestracja" component={RegisterPage} />
        <Route component={NotFound} />
      </Switch>
      <Footer year="2019" />
    </BrowserRouter>
  );
}

export default App;
