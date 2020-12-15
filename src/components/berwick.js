import React, {useState, useEffect} from 'react'
import axios from 'axios'

const url = 'https://api.met.no/weatherapi/locationforecast/2.0/compact.json?lat=41&lon=-76'

const Berwick = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios
        .get(url)
        .then((res) => {
            setData(res.data.properties.timeseries[0].data)
            console.log('Berwick Data', res.data.properties.timeseries[0].data)})
        .catch((err) => console.error(err))
    }, [])

    if (!data) {
        return <p>Trouble Displaying Weather at this time</p>
      }

    return (
        <>
        <h2>Berwick Weather</h2>
        {/* <p>{data.instant.details.air_temperature*1.8+32}&#176;</p> */}
        </>
    )
}

export default Berwick