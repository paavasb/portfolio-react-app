import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import Home from '../components/Home';
import PortfolioHome from '../components/PortfolioHome';
import Contact from '../components/Contact';
import PortfolioItem from '../components/PortfolioItem';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header />
        <Switch>
            <Route path="/" component={Home} exact={true}/>
            <Route path="/portfolio" component={PortfolioHome} exact={true}/>
            <Route path="/portfolio/:id" component={PortfolioItem}/>
            <Route path="/contact" component={Contact}/>
            <Route component={NotFoundPage}/>
        </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;