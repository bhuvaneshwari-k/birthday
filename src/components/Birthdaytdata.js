// import { useState } from 'react';
import '../App.css';
export default function Empdata(props) {
    let currentdate=new Date();
    console.log(currentdate);
    let date=currentdate.getDate();
    console.log(date);
    let month=currentdate.getMonth();
    console.log(month);
    // const month=[01,02,03,04]
   return props.datas.map((item) => {
    let newDate = new Date(item.birthday);
    if(date===newDate.getDate()&&month===newDate.getMonth()){
        return(
      <div className="empdata" key={item.id}>
        <div className="profile">
            <img src={item.profileImage} alt={item.name} className="image"></img>
        </div>
        <div className="details">
          <div>Name : {item.name}</div>
          <div>Gender : {item.gender}</div>
          <div>Date : {item.birthday}</div>
          <div className='age'>Age : {item.age}</div>
        </div>
      </div>
        );
    }
    else 
      return null;
});
  }
  