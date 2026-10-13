import {React,useState,useEffect} from 'react'
import axios from'axios'
//import { useEffect } from 'react'
const GetData=()=> {
    const[data,setData]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{setData(res.data) })
    },[])
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>ID</th>
                </tr>
            </thead>
            {data.map((i)=>{
                return(
                    <>
                    <tbody>
                        <tr>
                            <td>{i.name}</td>
                            <td>{i.email}</td>
                            <td>{i.id}</td>
                        </tr>
                    </tbody>
                    </>
                )
            })}
        </table>
    </div>
  )
}

export default GetData
