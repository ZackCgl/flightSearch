import { useEffect, useState } from 'react'
import axios from 'axios'
import Return from "./Return"
import { useStateValue } from '../ContextApi/StateProvider';
import { useNavigate } from 'react-router-dom';

interface SearchFlight{
  
  departureLocation: string,
  arrivalLocation: string,
  persons: number,
  date: string,
}

interface apiCall{
  FLIGHT_RETURN: string[],
}

function SearchFlight() {

//defining states  
const [FLIGHT_RETURN, setFLIGHT_RETURN] = useState([]) 
const [departureLocation, setDepartureLocation] = useState("EGKK")
const [arrivalLocation, setArrivalLocation] = useState("EHAM")
const [persons, setPersons] = useState(1)
const [date, setDate] = useState("2022-08-27")


const options = {
  method: 'GET',
  url: `https://aerodatabox.p.rapidapi.com/flights/airports/icao/${arrivalLocation}/${date}T08:00/${date}T20:00`,
  params: {
    withLeg: 'true',
    withCancelled: 'true',
    withCodeshared: 'true',
    withCargo: 'true',
    withPrivate: 'true',
    withLocation: 'false'
  },
  headers: {
    'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY}`,
    'X-RapidAPI-Host': `${process.env.REACT_APP_API_HOST}`
  }
};

 //set the data into the state
const getFlightData = () => {
    axios.request(options).then(response => {
      
      setFLIGHT_RETURN(response.data.arrivals)
     
      }).catch(function (error) {

      }); 
    
  }

const handleSubmit = (e: { preventDefault: () => void; }) => {
  e.preventDefault()
}

  return (
   
    //departmentlocation
    <div className='m-5 flex flex-col items-center'>
      <div className='flex'>
        <form className='flex' onSubmit={handleSubmit}>
          <div className='flex flex-col m-2'>
          Departure
          <select  className=''onChange={e => setDepartureLocation(e.target.value)}>
            <option value="EGKK">EGKK</option>
            <option value="EIDW">EIDW</option>
            <option value="KSFO">KSFO</option>
            <option value="RPLL">RPLL</option>
            <option value="LYBE">LYBE</option>
          </select> 
        </div>

      {/*arrivallocation*/}
      <div className='flex flex-col m-2'>
      Arrival
        <select className='' onChange={e => setArrivalLocation(e.target.value)}>
          <option value="EHAM">EHAM</option>
          <option value="KLAX">KLAX</option>
          <option value="UUEE">UUEE</option>
          <option value="LSZH">LSZH</option>
        </select> 
      </div>

      {/*departmentdate*/}
      <div className='flex flex-col m-2'>
      Date
        <select className='' onChange={e => setDate(e.target.value)}>
          <option value="2022-08-27">2022-08-27</option>
          <option value="2022-08-28">2022-08-28</option>
          <option value="2022-08-29">2022-08-29</option>
          <option value="2022-08-30">2022-08-30</option>
        </select> 
      </div>

      {/*selecting persons*/}
      <div className='flex flex-col m-2'>
      Personen
        <select className='' onChange={e => setPersons(Number(e.target.value))}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select> 
      </div>
        <button className='m-2' onClick={getFlightData}>Zoek</button>
      </form>

    </div>
      {/*return*/}
      <Return 
      persons={persons} 
      departureLocation={departureLocation} 
      arrivalLocation={arrivalLocation} 
      FLIGHT_RETURN={FLIGHT_RETURN}
      />
      
    </div>
  )
}

export default SearchFlight