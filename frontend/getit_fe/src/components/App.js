import './App.css';
import Footer from "./Footer";
import Searchbar from "./Searchbar";
import Slides from "./Slides"

import {ItemCard} from './card/card_index';

import {LoginApp, RegisterApp} from './accountBox/Login-register';
import styled from "styled-components";
import {Navbar} from './navbar/nav_index';
import {SearchBar} from './searchbar/searchbar_index';

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    margin-top: 7em;
`;

const CardContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
`;

function App() {
    return (
        <div className="App">
            {/* <Searchbar /> */}
            <Navbar/>
            <Slides/>
            <CardContainer className="card_container">
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>
            </CardContainer>

            <Footer/>


            <h1>-----------</h1>
            <LoginApp/>
            <h1>-----------</h1>

            <h1>-----------</h1>
            <RegisterApp/>
            <h1>-----------</h1>

            {/* <Navbar /> */}
            {/* <AppContainer> */}

            {/* <SearchBar /> */}
            {/* </AppContainer> */}

        </div>


    );
}

export default App;
