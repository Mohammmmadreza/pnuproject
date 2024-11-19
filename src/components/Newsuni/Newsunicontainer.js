import React from 'react'
import './Newsunivercity.css'
import Newsuni from './Newsunidata'
export default function Newsuniv(props)
 {
  return (
    <div className='newscontainer'>
        <div className='img-c'>
          < img className='img-news' src={props.img}/>
        </div>
<div className='textcontainer'>
    <p>{props.date}</p>
<h5 className='title'>{props.title}</h5>
</div>
    </div>
  )
}