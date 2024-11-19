import React, { useState } from 'react'
import Newsuniv from './Newsunicontainer';
import Newsdata from './Newsunidata';
import Newsuni from './Newsunidata';
function Newsunigenerator() {
  const [datas,setdatas]=useState(Newsdata)
  return (
   <div className='container-News'>
{datas.map(data=>(
  <Newsuniv className='Teach-box' key={Newsuni.id} {...data}/>
))}
   </div>
    
  );
}

export default Newsunigenerator;