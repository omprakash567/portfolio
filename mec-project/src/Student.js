import React, { useState } from 'react'
import './Student.css'
const Student =() =>{
   const[form,setForm] = useState(
    {    
      id:0,
        Name:"",
        Dept:"",
        Clg:"",
        Age:0,
        Mark:0
    }
  );
  const[value,setValue] = useState(
    {    
      id:1,
        Name:"prakash",
        Dept:"CSE",
        Clg:"MEC",
        Age:19,
        Mark:90
    }
  )
  function change(event){
    setValue({...value,[event.target.name]:event.target.value})
    console.log(value)
  }
  function submit(e){
    e.preventDefault();
    setForm({
      ...form,Name:value.Name,Age:value.age
    })
  }
  
 

  return (
    <div>
       {value.Name}<br/>
       {form.Age}
       
      <form onSubmit={submit}>
        <label>Name</label><br></br><input onChange={change} name={"Name"} placeholder='Enter your Name'></input><br/>
        <label>Email</label><br></br><input onChange={change}email={"Email"}placeholder='Enter your Email'></input><br/>
        <label>Dept</label><br/><input></input><br/>
        <label>Age</label><br/><input onChange={change} Name={"Age"}></input><br/>
        <button type='Submit'>Submit</button>

      </form>
    </div>
  )
}

export default Student