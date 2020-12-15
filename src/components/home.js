import React, {useState, useEffect} from 'react'
import axios from 'axios'

// const url = 'https://www.metaweather.com/api/location/2487956/'
const url = 'https://api.met.no/weatherapi/locationforecast/2.0/compact.json?lat=37&lon=-122'

const Home = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios
        .get(url)
        .then((res) => {
            setData(res.data.properties.timeseries[0].data)
            console.log('Lambda Data', res.data.properties.timeseries[0].data)})
        .catch((err) => {
            console.error(err)
            return <p>Trouble Displaying Weather at this time</p>
        })
    }, [])

    // if (!data) {
    //     return <p>Trouble Displaying Weather at this time</p>
    //   }

    return (
        <>
        <h2>Local Weather for Lambda</h2>
        {/* <p>{data.instant.details.air_temperature*1.8+32}&#176;</p> */}
        </>
    )
}

export default Home