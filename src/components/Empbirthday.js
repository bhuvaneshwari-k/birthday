import React from 'react'
import data from '../data';
import Birthdaytdata from './Birthdaytdata';
import {Link,useNavigate} from 'react-router-dom';
export default function Empbirthday() {
  const navigate=useNavigate();
  const datas=data;
  const handleGoback=()=>{
        navigate(-1);
  }
  return (
    <div className='container'>
    <h2>TODAY BIRTHDAY</h2>
    <Birthdaytdata datas={datas}></Birthdaytdata>
    <Link onClick={handleGoback}>Back</Link>
</div>
  )
}
