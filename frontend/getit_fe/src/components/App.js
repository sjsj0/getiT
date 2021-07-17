import './App.css';
import Footer from "./Footer";
import Searchbar from "./Searchbar";
import Slides from "./Slides"
import ItemCard from "./cards";
import './card_container.css';

import { LoginApp, RegisterApp } from './accountBox/Login-register';
import styled from "styled-components";
import { Navbar } from './navbar/nav_index';

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
                <Searchbar />
                <Slides />
                <div className="card_container">
                    <ItemCard />
                    <ItemCard />
                    <ItemCard />
                </div>

                <Footer />


                <h1>-----------</h1>
                <LoginApp />
                <h1>-----------</h1>

                <h1>-----------</h1>
                <RegisterApp />
                <h1>-----------</h1>

                {/* <Navbar /> */}
            </div>







    );
}

export default App;
