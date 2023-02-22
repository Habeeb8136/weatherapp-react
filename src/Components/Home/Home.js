import React, { useEffect, useState } from "react";
import "./Home.css";
import axios from "axios";
import {BsFillStarFill,BsThermometerSun} from "react-icons/bs"
import {BiSearch} from "react-icons/bi"
import {AiOutlineArrowRight,AiOutlineArrowLeft} from "react-icons/ai"
import {TiWeatherCloudy,TiWeatherPartlySunny} from "react-icons/ti"
import {GiWindpump} from "react-icons/gi";

const Home = () => {
    const [location, setLocation] = useState('delhi');
    const [showSearch, setshowSearch] = useState(true);
    const [showDetails, setShowDetails] = useState(false);
    const [weatherIcon, setWeatherIcon] = useState();

  const [data, setData] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=9a6b6507417354e5510db073f216c845`;

  const searchLocation = (event) => {
      if (event.key === "Enter") {
        axios.get(url).then((response) => {
          setData(response.data);
          console.log(response.data);
        });
      setLocation("");
      setshowSearch(!showSearch);    
    }
  };

  

  const handlePage=()=>{
        setshowSearch(!showSearch);   
  }
  const handleDetails=()=>{
    setShowDetails(!showDetails);   
  }

  return (
    <div className="home-container">
    {!showSearch&&
    <BiSearch className="searchButton" onClick={()=>handlePage()}/>
    }
    <h2>Weather App</h2>
    

      <div className={showSearch?"search-container active":"search-container"}>
            {showSearch&&<div className="close-search" onClick={()=>handlePage()}><AiOutlineArrowRight className="close-search"/></div>}
          <input
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            onKeyPress={searchLocation}
            placeholder="Enter Location"
            type="text"
          />
          
          <div className="favorite"> 
          <h3>Favorites <span><BsFillStarFill /></span></h3>
          
            <div className="feels">
                <p className="bold">city 1</p>
                <p>Feels Like</p>
            </div>

            <div className="humidity">
              <p className="bold">city 2</p>
              <p>Humidity</p>
            </div>

            <div className="wind">
               <p className="bold">city3</p>
               <p>Wind Speed</p>
            </div>

          </div>
       
      </div>

      <div className="container">
        <div className="top">
          <div className="location">
            <h1>{data.name}</h1>
          </div>
          <div className="temp" onClick={()=>handleDetails()}>
            {data.main ? <h1>{data.main.temp.toFixed()}°c</h1> : null}
          </div>
          <div className="description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
          </div>
        </div>

        {data.name !== undefined && (
          <div className="bottom">
          
            <div className="feels" onClick={()=>handleDetails()}>
              {data.main ? (
                <p className="bold">{data.main.feels_like.toFixed()}°C</p>
              ) : null}
              <p>Feels Like</p>
            </div>
            <div className="humidity" onClick={()=>handleDetails()}>
              {data.main ? <p className="bold">{data.main.humidity}%</p> : null}
              <p>Humidity</p>
            </div>
            <div className="wind" onClick={()=>handleDetails()}>
              {data.wind ? (
                <p className="bold">{data.wind.speed.toFixed()} Km/h</p>
              ) : null}
              <p>Wind Speed</p>
            </div>
          </div>
          
        )}
      </div>


    
    {!showSearch&& <div className="details-toggle" onClick={()=>handleDetails()}>More<TiWeatherCloudy style={{width:'50px',height:'50px'}}/></div>}
    

    {/* details */}
    <div className={showDetails?'details-container active':'details-container'}>
    
    
    
        {data.name !== undefined &&
    <div className="details">
    {showDetails&&<div className="close-details" onClick={()=>handleDetails()}><AiOutlineArrowLeft className="close-details"/></div>}
        <h2>details</h2>
        <div className="detail">
            <BsThermometerSun className="icon"/>
            <p>Min Temperature : {data.main.temp_min}</p>
            <p>Max Temperature : {data.main.temp_max}</p>
            <p>Pressure : {data.main.pressure}</p>
        </div>
        <div className="detail">
            <TiWeatherPartlySunny className="icon"/>
            <p>Weather : {data.weather[0].main}</p>
            <p>Sky : {data.weather[0].description}</p>
        </div>
        <div className="detail">
            <GiWindpump className="icon"/>
            {data.wind.deg&&<p>Angle : {data.wind.deg}°</p>}
            {data.wind.gust&&<p>Gust : {data.wind.gust}kmph</p>}
            {data.wind.speed&&<p>Speed : {data.wind.speed}kmph</p>}
        </div>
        <div className="detail"></div>

    </div>
        }

    </div>

    </div>
  );
};

export default Home;