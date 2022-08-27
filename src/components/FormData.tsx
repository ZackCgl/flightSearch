import React, { useState } from 'react'
import { useStateValue } from '../ContextApi/StateProvider'
import { useNavigate } from 'react-router-dom'

function FormData() {
    interface User{
        username: string,
        address: string | Number,
        postcode: string | Number,
        country: string,
        }
    const [user, setUser] = useState<User>({
        username: "",
        address: "",
        postcode: "",
        country: "",
  }     
     )
    const [{}, dispatch] = useStateValue()
    const navigate = useNavigate ();
    const [warning, setWarning] = useState<string>("")
    const handleSubmit = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        if(user.username == "" || user.address == "" || user.postcode == "" || user.country == ""){
          setWarning("Fill in everything")
        }
        else{
          dispatch({
            type: "ADD_USERDATAS",
            add: {
             username: user.username,
             address: user.address,
             postcode: user.postcode,
             country: user.country,
            },
          });
          navigate("/overview")
          setWarning("")
        }
        
        //dispatch the userdata into the context provider
    }

  return (
    <div className='flex flex-col m-5' >
      <h3>Fill in your personal data please</h3>
        <form className='flex flex-col' onSubmit={handleSubmit}>
          <label>Naam</label>
          <input  onChange={e => user.username = e.target.value} type="text" placeholder='Naam'></input>
          <label>Adres</label>
          <input  onChange={e => user.address = e.target.value} type="text" placeholder='Adres'></input>
          <label>Postcode</label>
          <input  onChange={e => user.postcode = e.target.value} type="text" placeholder='Postcode'></input>
          <label>Nationaliteit</label>
          <div>
            <input  onChange={e => user.country = e.target.value} type="text" placeholder='Nationaliteit'></input>
            <button className='ml-4'>Next</button>
          </div>
        
        </form>
        <small className='text-red-500'>{warning}</small>
  </div>
  )
}

export default FormData