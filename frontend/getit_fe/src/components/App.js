import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Searchbar from "./Searchbar";
import Slides from "./Slides"
import ItemCard from "./cards";
import './card_container.css';

function App() {
    return (
        <div className="App">
            <Searchbar/>
            <Slides/>
            <div className="card_container">
                <ItemCard/>
                <ItemCard/>
                <ItemCard/>

            </div>
            <Footer/>
        </div>
    );
}

export default App;
