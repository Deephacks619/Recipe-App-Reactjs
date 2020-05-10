import React from 'react';
import {BrowserRouter,Route,Switch} from "react-router-dom";
import App from '../App'
import Recipedetails from './Recipedetails'
 
const Router = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}></Route>
            <Route  path="/recipe/:label/" component={Recipedetails}></Route>
        </Switch>
        </BrowserRouter>
    );
};

export default Router;