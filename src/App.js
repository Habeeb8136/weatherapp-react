import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Details from './Components/Details.js/Details';
import Home from './Components/Home/Home';
import Search from './Components/Search/Search';

function App() {
  const [initialData, setintialData ] = useState();
  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=delhi&units=metric&appid=9a6b6507417354e5510db073f216c845`).then((response) => {
      setintialData(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <div className="App">
        {/* <Search /> */}
        <Home initialData={initialData}/>
        {/* <Details /> */}
    </div>
  );
}

export default App;
