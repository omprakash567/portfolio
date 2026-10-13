import {React,useState} from 'react'
import './Student.css'
function Errorhandling({data}) {
  console.log(data)
  const[value,setValue]=useState(
    {
      name:"",
      email:"",
      mobile:""
    }
  )
  const[error,setError]=useState(
    {
  nameerror:"",
  emailError:"",
  mobileError:""
})  
function change(event){
    setValue(
      {
      ...value,
      [event.target.name]:event.target.value
      }
    )
  }
  function handleSubmit(event){
    event.preventDefault();
    if(value.name==""){
      setError({
        ...error,nameError:"Field is required *"
      })
    }
    else if(value.name.length<3){
      alert("name should be more than 3 letters")
    }
  }
  return (
    <div>
        <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Name" name="name" onChange={change}/><br />
      <span style={{color:'red'}}>{error.nameError}</span> <br />
      <input type="email" placeholder="Email" name="email"/><br />
      <input type="number" placeholder="mobile" name="mobile"/><br></br>
      <button>Submit</button>
      </form>


    </div>
  )
}

export default Errorhandling
