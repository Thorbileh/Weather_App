import { useState } from 'react';
import './App.css';


function App() {
  const [weatherData,setWeatherData] = useState([{}]);

const apikey = 'f6c87e7eb14a87cb0b926f237d832a50';
const [city,setCity] = useState("");

const getWeather = (event) =>{
  if(event.key==="Enter"){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apikey}`).then((response)=> response.json()).then((data)=>{
         console.log(data);
         setWeatherData(data);
        setCity("")
      })
  }
}
  return (
    <div className="Container">

  <input className='input' type="text" placeholder='Enter city...' onChange={e=>setCity(e.target.value)}
  value={city}
  onKeyPress={getWeather}
  /><div className='main'>
     {typeof weatherData.main ==='undefined'?(
    <>
    <h1>Welcome To Thobile's Weather App</h1>
    {/* <p>Enter a City To get a Weather of that city</p> */}
    </>
   ):
   
   <>
   <h1>Weather Today In {weatherData.name} </h1>
   <table>
    <tr>
      <th>Temperature</th>
      <td>{Math.round(weatherData.main.temp)} <sup>o</sup>F</td>
    </tr>
    <tr>
      <th>Feels like</th>
      <td>{Math.round(weatherData.main.feels_like)} <sup>o</sup>F</td>
    </tr>
    <tr>
      <th>Humidity</th>
      <td>{Math.round(weatherData.main.humidity)}%</td>
    </tr>
    <tr>
      <th>Wind</th>
      <td>{weatherData.wind.speed} km/h</td>
    </tr>
   </table>
   
   </>
   
   }
   {weatherData.cod==='404' ?(
    <p>City Not Found</p>
   ):(
    <>
    </>
   )}
  </div>
  
    </div>
  );
}

export default App;
