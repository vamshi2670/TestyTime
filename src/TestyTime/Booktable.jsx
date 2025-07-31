import React from 'react'
import { useState } from 'react';
function Booktable() {
     
    const [form, setForm] = useState({
    name:'',
    date: '',
    time: '',
    guests: ''
  });
 const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  

    
    const handleSubmit = (e) => {
  e.preventDefault();
  localStorage.setItem('booking', JSON.stringify(form));  // Save to localStorage
  alert("Table Booked!");

};

  return (
    <>
        <div className='booktablecontainer '>
            <div>
                <h1 className='text text-primary' style={{fontFamily:'cursive'}}>Booking</h1>
                <h1 style={{lineHeight:"10px"}}>A culinary journy awaits !</h1>
            </div>
            <div className='table_form'>
                <form action=""  >
                    <input type="text"  id='name' required placeholder='Name'  onChange={handleChange}/>
                    <input type="email" required placeholder='Email'  onChange={handleChange}/>
                    <input type="number"  min={1000} max={9999999999} required placeholder='Mobil'/>
                    <input type="date" name="" id="" placeholder='Checkin' required  onChange={handleChange}/>
                    <input type="time" required  placeholder='Time' onChange={handleChange}/>

                    <select name="Guest" required id="" placeholder="Guest"  onChange={handleChange}>
                        <option>Guest</option>
                        <option value="1 Person">1 Person</option>
                        <option value="1 Person">2 Person</option>
                        <option value="1 Person">3 Person</option>
                        <option value="1 Person">4 Person</option>
                        <option value="1 Person">5 Person</option>
                        <option value="1 Person">6 Person</option>
                    </select>
                    <select name="" required id="">
                        <option value="">Table</option>
                        <option value="200">200</option>
                        <option value="201">201</option>
                        <option value="202">202</option>
                        <option value="203">203</option>
                        <option value="204">204</option>
                    </select>
                    <button onClick={handleSubmit} type='submit' className='btn btn-primary mt-4'>Book table Now</button>
                </form>
            </div>
            
        </div>
    </>
  )
}

export default Booktable