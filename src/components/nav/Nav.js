import { useState } from 'react';
import './nav.css'
import { FaHome } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
import { RiBookLine } from "react-icons/ri";
import { RiServiceLine } from "react-icons/ri";
import { TiContacts } from "react-icons/ti";


function Nav() {
  const [navactive,setnavactive]=useState("")
  return (
    <nav>
      <a href="#home" onClick={()=>setnavactive("#home")} className={navactive==="#home" ? "active" :" "} ><FaHome /></a>
      <a href="#about" onClick={()=>setnavactive("#about")} className={navactive==="#about" ? "active" :" "}><FaRegUser /></a>
      <a href="#skill" onClick={()=>setnavactive("#skill")} className={navactive==="#skill" ? "active" :" "}><RiBookLine /></a>
      <a href="#project" onClick={()=>setnavactive("#project")} className={navactive==="#project" ? "active" :" "}><RiServiceLine /></a>
      <a href="#contact" onClick={()=>setnavactive("#contact")} className={navactive==="#contact" ? "active" :" "}><TiContacts /></a>
    </nav>
  )
}

export default Nav