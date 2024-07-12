import React from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from 'react-router-dom';
import { FaYoutube } from "react-icons/fa";
import { AiOutlineSearch } from "react-icons/ai";
import { TiMicrophone } from "react-icons/ti";
import { BsCamera2 } from "react-icons/bs";
import { IoApps } from "react-icons/io5";
import { CiBellOn } from "react-icons/ci";

const Navbar = () => {
    const navigation =useNavigate()
  return (
    <>
    <div className="navbar bg-base-100">
  <div className="flex-1" onClick={()=> navigation("/")}>
  <GiHamburgerMenu />
    <a className="btn btn-ghost text-xl font-medium"><FaYoutube className=' text-red-600' />Youtube</a>
  </div>
  <div className="flex space-between gap-2">
    <div className="form-control">
        <form className="form">
    <label className="input input-rounded flex items-center gap-3 input-primary w-full max-w-xs opacity-90">
  <input type="text" className="rounded " placeholder="Search" />
  <button><AiOutlineSearch/> </button> 
</label>
</form>
   
    </div>

    <div className="flex gap-5 items-center txl">
   <TiMicrophone />
   </div>
   <div className="flex gap-6 items-center txl">
   <BsCamera2 />
   <IoApps />
   <CiBellOn />
   </div>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
  </div>
</div>
    
    
    </>
  )
}

export default Navbar