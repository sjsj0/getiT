import './App.css';
import styled from "styled-components";

import { HomePage } from '../containers/HomePage/home_index';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LoginPage } from '../containers/LoginPage/login_index';
import { RegisterPage } from '../containers/RegisterPage/register_index';


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
                </Switch>
            </Router>
        </div>


    );
}

export default App;
