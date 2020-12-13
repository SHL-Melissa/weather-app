import React, {useEffect, useState} from 'react'
import axios from 'axios'

import './App.css'

// const url = 'https://www.metaweather.com/api/location/2487956/'
const url = 'https://api.met.no/weatherapi/locationforecast/2.0/compact.json?lat=37&lon=-122'


const App = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios
        .get(url)
        .then((res) => {
            setData(res.data.properties.timeseries[0].data)
            console.log(res.data.properties.timeseries[0].data)})
        .catch((err) => console.error(err))
    }, [])

  return (
    <div className="App">
     <h1>WEB38 Cool Weather App</h1>
     <h2>Local Weather for Lambda</h2>
     <p>{data.instant.details.air_temperature*1.8+32}&#176;</p>
     <table>
         <tr>
             <th>Current Temp</th>
             <td>{data.instant.details.air_temperature*1.8+32}&#176;</td>
         </tr>
     </table>

    </div>
  );
};

export default App;