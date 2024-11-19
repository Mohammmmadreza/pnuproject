import React, {useState,useEffect,useRef,useMemo,memo} from 'react'
import './Newscardcontainer.css'
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import Likedislike from './likedislike';
export default function Newscard(props)
 {
  return (
    <div className='newscontainer'>
        <div className='img-c'>
          < img className='img-news' src={props.img}/>
        </div>
<div className='textcontainer'>
<h5 className='title'>{props.title}</h5>
<p>{props.des}</p>
 <div style={{direction:'ltr', paddingLeft:'5px'}}><a  style={{textDecoration:'none'}} href={props.web} target='_blank'>{props.web}</a></div>
</div>
<div className='div-I'>
<Likedislike ></Likedislike>
</div>
    </div>)}
   