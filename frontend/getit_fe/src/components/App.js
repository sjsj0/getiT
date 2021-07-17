import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Searchbar from "./Searchbar";
import Slides from "./Slides"
import ItemCard from "./cards";
import './card_container.css';

import { AccountBox } from './accountBox/Login-register';

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
            <AccountBox />
<h1>-----------</h1>
        </div>
            );
}

            export default App;
