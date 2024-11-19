import React, { useState } from 'react'

import Container from 'react-bootstrap/esm/Container';
import Newscard from './Newsdata';
import Newscardcontainer from './Newscardcontainer'
import Newsdata from './Newsdata';
function Newsgenerator() {
  const [datas,setdatas]=useState(Newsdata)
  return (
   <div className='container-News'>
{datas.map(data=>(
  <Newscardcontainer className='Teach-box' key={Newsdata.id} {...data}/>
))}
   </div>
    
  );
}

export default Newsgenerator;