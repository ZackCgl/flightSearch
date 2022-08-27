import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from '../ContextApi/StateProvider';

interface Flight{
    id: any,
    vertrek: string,
    bestemming: string,
    datum: string | number,
    personen: number,

}

interface User{
    id: any,
    username: string,
    country: string,
    postcode: string | number,
    address: string | number
}

const CheckDetails: React.FC = () => {
const [{flightDatas, userDatas}, dispatch] = useStateValue()
    
  return (
    <div className='flex flex-col'> 
       {flightDatas?.map((ud: Flight) => {

        return (
        <div className='flex flex-col' key={ud.id}>
            <h1>Flight Details</h1>
            <div className='flex'>
                <strong className='m-3'>Vertrek</strong>
                <small className='m-3'>{ud.vertrek}</small>
            </div>
            <div className='flex'>
                <strong className='m-3'>Bestemming</strong>
                <small className='m-3'>{ud.bestemming}</small>
            </div>
            <div className='flex '>
                <strong className='m-3'>Personen</strong>
                <small className='m-3'> {ud.personen}</small>
            </div>
            <div className='flex '>
                <strong className='m-3'>Datum</strong>
                <small className='m-3'> {ud.datum}</small>
            </div>
         </div>)
        })}
    
        {userDatas?.map((ud: User) => {
            return (
                <div className='flex flex-col' key={ud.id}>
                    <h1>Personal details</h1>
                    <div className='flex'>
                        <strong className='m-3'>Username</strong>
                        <small className='m-3'>{ud.username}</small>
                    </div>
                    <div className='flex'>
                        <strong className='m-3'>Postcode</strong>
                        <small className='m-3'>{ud.postcode}</small>
                    </div>
                    <div className='flex '>
                        <strong className='m-3'>Address</strong>
                        <small className='m-3'> {ud.address}</small>
                    </div>
                    <div className='flex '>
                        <strong className='m-3'>Country</strong>
                        <small className='m-3'> {ud.country}</small>
                    </div>
                </div>)
        
        
    })}
    <Link to="/"><button>Go Back</button></Link>
    </div>
  )
}

export default CheckDetails