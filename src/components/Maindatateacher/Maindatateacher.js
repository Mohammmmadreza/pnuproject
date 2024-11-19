import React from 'react'
import { useParams } from 'react-router-dom'
import {Container , Row ,Col} from 'react-bootstrap'
import Teachersdata from '../GroupTeachers/Teachersdata'
import { MdEmail } from "react-icons/md";
import './Maindatateacher.css'
import { Link } from 'react-router-dom';
export default function Maindatateacher() {
    let params=useParams()
    console.log(params.teachdataID)
    let maindata=Teachersdata.find(data=>data.id==params.teachdataID)
  return (
    <Container className="mt-5 clearfix con-T">
      {/* <Row className='right-r'>
        <Col>
        <img className='img-T' src={maindata.img} />
        </Col>
      </Row>
      <Row className='left-r'>
        <Col>
        <h3>{maindata.name}</h3>
        <p>{maindata.description}</p>
        <p>{maindata.des2}</p>
        <p>{maindata.des3}</p>
        <p>{maindata.des4}</p>
        <p>{maindata.des5}</p>
        <p>{maindata.des6}</p>
        <p>{maindata.des7}</p>
        <p>{maindata.des8}</p>
        <p>{maindata.des9}</p>
        </Col>
      </Row> */}
      <div className='right-r'>
        
        <img className='img-T' src={maindata.img} />
        
      </div>
      <div className='left-r'>
        
        <h3>{maindata.name}</h3>
        <p>{maindata.description}</p>
        <p>{maindata.des2}</p>
        <p>{maindata.des3}</p>
        <p>{maindata.des4}</p>
        <p>{maindata.des5}</p>
        <p>{maindata.des6}</p>
        <p>{maindata.des7}</p>
        <p>{maindata.des8}</p>
      <Link className='a-email' to={maindata.des10} target='_blank'><p><MdEmail /> {maindata.des9}</p></Link> 
        
      </div>

    </Container>
  )
}
