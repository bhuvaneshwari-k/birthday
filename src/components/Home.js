import React from 'react';
import {Link} from 'react-router-dom';
function Home(){
    return(
        <div className='container home'>
          <div className='heading'>
          <h1>BIRTHDAY DETAILS</h1></div>
          <div className='options'>
          <div><Link to='Empdetails'>Employee Details</Link></div>
          <div><Link to='Empbirthday'>Today Birthday</Link></div>
          </div>
        </div>
    )
}
export default Home;