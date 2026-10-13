import {React,useState} from 'react'

function Accordian_Task() {
  const [open,setOpen] = useState(false);
  return (
    <div>
      <h1>Frequently Asked Questions</h1>

      <button onClick={() => setOpen(!open)}>What is React?</button>
      {
        open && (
          <p>React it uses a Virtual DOM to efficiently update only the parts of the UI that change, improving performance.

.</p>
        )
      }
      
    </div>
  )
}

export default Accordian_Task