import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { MdOutlineManageAccounts } from "react-icons/md";
import { CiLogin } from "react-icons/ci";
import { HiOutlineBellAlert } from "react-icons/hi2";
import { SlBasket } from "react-icons/sl";
import './Navbar.css'
function NavbarExp() {
  return (<div className='nav-T'>
    <Navbar expand="lg" className="bg-body-tertiary"   bg="dark" data-bs-theme="dark" >
      <Container className='container' >
     
      <Navbar.Brand  ><Link  className='link-link' to='../Store/Store' >فروشگاه کتاب</Link></Navbar.Brand>
      <Navbar.Brand  ><Link  className='link-link' to='/' >خانه</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className='link-link1' to='../GroupTeachers/Teachers'>اساتید گروه</Link>
          <NavDropdown title="ریاست"id="basic-nav">
          <NavDropdown.Item   href="t.me/shahriyarpnu">	
                نام و نام خانوادگی:<br></br>حمید قاسمی</NavDropdown.Item>
          <NavDropdown.Item   href="t.me/shahriyarpnu">	
          دریافت فایل آشنایی با ریاست مرکز شهریار<br></br><Nav.Link href='/file/known.crdownload'><span className='sp'>کلیک کنید</span></Nav.Link></NavDropdown.Item>

          </NavDropdown>
         

            {/* <Link className='link-link1' to='../Known/Known'>آشنایی با دانشگاه</Link> */}
            <NavDropdown title="تماس با ما" id="basic-nav-dropdown">
              <NavDropdown.Item  style={{color:'blue'}} href="t.me/shahriyarpnu" target='_blank'>	
                t.me/shahriyarpnu</NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item style={{color:'blue'}} href="https://www.instagram.com/shahryar_pnu" target='_blank'>
              https://www.instagram.com/shahryar_pnu
              </NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item style={{color:'blue'}} href="eitaa.com/shahriyarpnu" target='_blank'>eitaa.com/shahriyarpnu</NavDropdown.Item><NavDropdown.Divider />
             < NavDropdown.Item style={{color:'blue'}} href="http://teh-shahryar.pnu.ac.ir" target='_blank'>http://teh-shahryar.pnu.ac.ir</NavDropdown.Item>
            </NavDropdown>
           
            <NavDropdown title="لینک های مرتبط" id="basic-nav-dropdown">
              <NavDropdown.Item  style={{color:'blue'}} href="https://www.sanjesh.org/fa-IR/sanjesh/1/page/%D8%B5%D9%81%D8%AD%D9%87-%D8%A7%D8%B5%D9%84%DB%8C" target='_blank'>	
              سازمان سنجش</NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item style={{color:'blue'}} href="https://osreg.pnu.ac.ir/forms/authenticateuser/main.htm" target='_blank'>سامانه گلستان
              </NavDropdown.Item><NavDropdown.Divider />
              <NavDropdown.Item style={{color:'blue'}} href="https://lms.tpnu.ac.ir/" target='_blank'>سامانه Lms</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={ <MdOutlineManageAccounts  style={{color:'white',fontSize:'40px'}}/>}id="basic-nav-dropdown">
         <NavDropdown.Item  > <SlBasket  />سفارشات</NavDropdown.Item>
            <NavDropdown.Item ><HiOutlineBellAlert />   پیغام ها</NavDropdown.Item>
            <NavDropdown.Item >   <CiLogin />ورود به حساب کاربری</NavDropdown.Item>
            
            
            </NavDropdown>
            
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );}
  export default NavbarExp;