import {React,useState} from 'react'
import './Project.css'
const Project=()=>{
    const [value,setValue]=useState(0);
    const [input,setInput]=useState(" ");
    const[email,setEmail]=useState("")
    const[age,setAge]=useState(0);
    function inc() {
        //setValue(value+10)
        //if(value == 0){
            //setValue(1)
        //}
        //else{
            //setValue(0)
            setValue(value===0 ? 1  : 0)
            //setValue(!value)
        }
        //function getData(e){
            //setInput(e.target.value)
        //}
    //}
    function register(event){
        setInput(event.target.value)
    }
    function emaily(event){
        setEmail(event.target.value);
    }
    function ageb(event){
        setAge(event.target.value);
    }
    function handleSubmit(event){
        event.preventDefault();
        alert(input)
        alert(email)
        alert(age)
    }
    return(
        <div style={{backgroundColor:value?"black": "white",height:"100vh"}}>
        {value}
        <span style={{cursor:"not-allowed"}}onClick={inc}>{value?"𖤓":"⏾"}
        </span>
        <form onSubmit={handleSubmit}>
            Name:<input onChange={register} /><br />
            Email:<input onChange={emaily} /><br />
            Age:<input onChange={ageb} /><br />
            <button type="submit">Submit</button>
        </form>
        </div>
    )
}
export default Project;