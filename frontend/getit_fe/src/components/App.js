import './App.css';

import styled from "styled-components";

import { HomePage } from '../containers/HomePage/home_index';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginPage } from '../containers/LoginPage/login_index';
import { RegisterPage } from '../containers/RegisterPage/register_index';
import {ProductPage} from "../containers/ProductPage/productPage_index";
import { SearchPage } from '../containers/SearchPage/searchPage_index';
import { Profile } from '../containers/AccountPage/accountForm';


const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    ${'' /* margin-top: 7em; */}
`;

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/home" component={HomePage} />
                    <Route path="/login" exact component={LoginPage} />
                    <Route path="/register" exact component={RegisterPage} />
                    <Route path="/product" exact component={ProductPage} />
                    <Route path="/search" exact component={SearchPage} />
                    <Route path="/profile" exact component={Profile} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
