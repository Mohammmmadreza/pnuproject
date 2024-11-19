import React, { useState } from 'react'
import Teachersdata from './Teachersdata';
import Teachdata from './techdata';
import './teachers.css'
function Teachers() {
  const [datas,setdatas]=useState(Teachersdata)
  return (
   <div className='container-teachers'>
{datas.map(data=>(
  <Teachdata className='Teach-box' key={Teachersdata.id} {...data}/>
))}
   </div>
    
  );
}

export default Teachers;

