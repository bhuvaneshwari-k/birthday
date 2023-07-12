import React from 'react'
import data from '../data';
import Empdata from './Empdata';
import {Link,useNavigate} from 'react-router-dom';
export default function Empdetails() {
    const navigate=useNavigate();
    const datas=data;
    const handleGoback=()=>{
          navigate(-1);
    }
  return (
    <div className='container'>
        <h2>EMPLOYEE DETAILS</h2>
        <Empdata datas={datas}></Empdata>
        <Link onClick={handleGoback}>Back</Link>
    </div>
  )
}
