import React from 'react'
import { useStateValue } from '../ContextApi/StateProvider';
import { useNavigate } from 'react-router-dom';


interface Props{
  FLIGHT_RETURN: any[],
  departureLocation: string,
  arrivalLocation: string,
  persons: number,
  }

const Return: React.FC<Props> = ({FLIGHT_RETURN, 
  departureLocation, arrivalLocation, persons})   => {

const [, dispatch] = useStateValue()
const navigate = useNavigate ();
const bookFlight = (selectedTime: string) => {
      
  if(departureLocation == "" && arrivalLocation == "")
      dispatch({
          type: "ADD_FLIGHTDATAS",
          val: {
            vertrek: departureLocation,
            bestemming: arrivalLocation,
            personen: persons,
            datum: selectedTime,
        },
        });
        navigate('/form')
    }
//map through the airports 
return (
  <div>
    <div className='mt-4'>
       {FLIGHT_RETURN.map((arr: {departure: any, arrival: any }) => {
        if(arr.departure.airport.icao == departureLocation){
        {
          return (
            <div>{arr.departure.airport.icao} 
              <small className='m-3' >To : </small>
              {arrivalLocation} 
              <small className='m-3' >Time : </small>
              {arr.arrival.scheduledTimeLocal} 
              <button 
                className='m-3' 
                onClick={(e) => bookFlight(arr.arrival.scheduledTimeLocal)}>Book</button>
            </div>)
      }}
     })}
    </div>
  </div>
  )
}

export default Return