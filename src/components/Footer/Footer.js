import Nav from 'react-bootstrap/Nav';
import React from 'react';
import { FaTelegram } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

import './Footer.css'

function StackedExample() {
  return (
    <Nav defaultActiveKey="/home" className="flex-column" >
      <Nav.Link href="https://t.me/shahriyarpnu" target='_blank'><FaTelegram  className='telegram'/></Nav.Link>
      <Nav.Link href="https://www.instagram.com/shahryar_pnu" target='_blank'><FaSquareInstagram  className='instagram'/></Nav.Link>
      <Nav.Link href='https://www.bing.com/maps?q=%d9%be%db%8c%d8%a7%d9%85+%d9%86%d9%88%d8%b1+%d8%b4%d9%87%d8%b1%db%8c%d8%a7%d8%b1&FORM=HDRSC6' target='_blank'>
      <FaLocationDot className='location'/>
        <span className='s-address'>شهریار - جنب شهرک صدف - روبروی بیمارستان نور شهریار- کد پستی 3354684363 - کد آموزشی مرکز 3916</span>
      </Nav.Link>
      <Nav.Link eventKey="disabled" disabled>
      <FaPhone  className='phone'/>
      <span className='s-phone'>021-65577662-5</span>
      </Nav.Link>
    </Nav>
  );
}

export default StackedExample;
