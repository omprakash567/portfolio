import {React,useState} from 'react';
function Header(){
    const[status ,setStatus]=useState("");
const Ctime=new Date().toLocaleTimeString();
    console.log(Ctime);
     if(Ctime>="15:51:00" &&status !="grey"){
        console.log("system is online");
        setStatus("grey")
     }
     return(
        <>
        <div style={{width:"100%",height:"100vh",background:status}}>
            HEADER REACT
            {status}
            <button disabled={status =="grey"?true:false}>test</button>
        </div>
        </>

     )

}
export default Header