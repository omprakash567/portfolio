import React from "react";
const Objectexample =()=>{
    const student =[{
        id:1,
        name:"Arun",
        age:21,
        dept:"CSE",        
        mark:90

    },
    {
        id:2,
        name:"Ravi",
        age:20,
        dept:"AIML",
        mark:90

    }
]
//const data = student.map((i) =>{
 //   return(
   //     <>
     //   {i.name}
       // </>
  //  )
//})
const numbers = [1,2,3,4,5,6];
console.log("pop",numbers.pop(),numbers)
const filterd = numbers.filter(
    function(x) {
        return x > 5

    }
)
console.log(filterd)
const names = ["nandhu","anu","thendral","harini"]
const result = names.slice(1,3)
console.log("result",result,names)
const spliceresult = names.splice(1,2,"added")
console.log(">>>>>",spliceresult)
console.log(names)
 
const datamark = student.filter((i)=> i.marks > 95)
//console.log(datamark)
return(
    <>
    <table>
        <thead>
            <tr>
                <th> Name</th>
                <th> Age</th>
                <th> Mark</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Tharunes</td>
                <td>18</td>
                <td>90</td>
            </tr>
            <tr>
                <td>Thendral</td>
                <td>19</td>
                <td>90</td>
            </tr>
        </tbody>
    </table>
    {
        datamark.map((i)=>{
            return(
                <>
                {i.name}
                </>
            )
        })
    }
    </>
)


}
export default Objectexample;