import {React,useState } from 'react';
const AgeCalculator = () => {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(0);
  const[value,setValue]=useState("");
  const calculateAge = () => {
    const birthDateObj = new Date(birthdate);
  const handleReset = () => {
    setBirthdate('');
    setAge(0);
  };
  function inc(){
        setValue(!value)
    }
  return ( <>
    <div style={container}>
      <h2 style={heading}>Age Calculator</h2>
      <div style={input}>
        <input onChange={(e) => 
        setBirthdate(e.target.value)} />
      </div>

        <button onClick={calculateAge} style={styles.Calculate}>
          Calculate Age
        </button>
        <button onClick={handleReset} style={styles.Reset}>
          Reset
        </button>
         <div style={{backgroundColor:value?"black":"whitesmoke",height:"100vh"}}>
        
        <span style={{textAlign:'center'}} onClick={inc} >{value?"☀️ ":" 🌛"}</span>
        </div></>
          
  )
}
export default Task1;