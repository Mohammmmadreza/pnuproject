import React, { Component } from 'react'
import './Home.css'
import StackedExample from './components/Footer/Footer'
import Newsgenerator from './components/Newscardcontainer/Newscardgenrator'
import Newsunigenerator from './components/Newsuni/Newsunicardgenerator'
function IMGExample() {
  return <><div className='contain clearfix'>
<div className='left'>
   
   <h6 className='h6title'>اخبار دانشگاه</h6>
    
<Newsunigenerator></Newsunigenerator>


</div>

    <div  className='center'><img className='img-sh' src="/Images/shimg.jpg"  /></div>

  <  div className='right'>
<h6 className='h6title'>اخبار هوش مصنوعی [AI]</h6>
<Newsgenerator></Newsgenerator>

  </div>

 </div>
 <StackedExample></StackedExample>
 </>
}


export default IMGExample;

