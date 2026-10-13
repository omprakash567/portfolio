import {React,useState} from 'react'
import './ModalBox.css'
function ModalBox() {
    const[Modal,setModal]=useState(false)
  return (<>
    <div>ModalBox</div>
    {Modal ?<div>
        <span>Are you sure,Do you want to continue?</span>
        <button onClick={()=>setModal(false)}>OK</button>
        </div>:"" 
    }
        <button onClick={()=>setModal(true)}>confirm</button>
    </>
  )
}

export default ModalBox
