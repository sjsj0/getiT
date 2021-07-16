import './App.css';
import Header from "./Header";
import Footer from "./Footer";
import Searchbar from "./Searchbar";
import Slides from "./Slides"

function App() {
  return (
    <div className="App">
      <Searchbar />
      <Slides />
      <Footer />
    </div>
  );
}

export default App;
