import './App.css';
import Details from './Components/Details.js/Details';
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';

function App() {
  return (
    <div className="App">
        <Search />
        <Home   />
        <Details />
    </div>
  );
}

export default App;
