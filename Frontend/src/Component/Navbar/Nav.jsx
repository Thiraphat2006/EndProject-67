import './nav.css'
import { useState } from 'react';
import { NavLink } from 'react-router';
import logo from '../../../public/Image/LOGO/โลโก้เว็ป-removebg(cop).png'

const Navbar = () => {
    const [ismenuopen, setismenuopen] = useState(false)
    const togglemenu = () => {
        setismenuopen(!ismenuopen)
    }

    const isLocalhost = window.location.hostname === 'localhost';

    return (
        <div className="all-nav relative">
            <nav className='p-2h-fit text-xs justify-center w-full md:text-4xl md:h15 md:p-0 md:h-16'>
                <div className='contrianer'>
                    <div className="nav-con flex justify-between items-center md:flex md:justify-between">
                        <div className="logo h-fit">
                            <NavLink to='/ProductPage' className="flex justify-center"><img src={logo} alt="Image" /></NavLink>
                        </div>
                        <div className="btn-list hidden md:hidden xl:flex">
                            <ul className='grid grid-rows-3 md:flex '>
                                <li >
                                    <NavLink to={isLocalhost? '/ENDProject67/' : '/'}>Home<i className='bx bxs-home pl-2 text-3xl'></i></NavLink>
                                </li>
                                <li>
                                    <NavLink to='/ProductPage'>Product</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/About'>About</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div className="ham-bar text-5xl xl:hidden" onClick={togglemenu}><i className={`bx ${ismenuopen ? 'bx-x' : 'bx-menu'}`}></i></div>

                    </div>
                </div>
            </nav>
            <div className={`right-menu ${ismenuopen ? 'active' : ''} absolute text-4xl pt-5 xl:hidden`} >
                <ul>
                    <NavLink to={isLocalhost? '/ENDProject67/' : '/'} className="link-side">
                        <li >
                            Home<i className='bx bxs-home'></i>
                        </li>
                    </NavLink>
                    <NavLink to='/ProductPage' className="link-side" >
                        <li>
                            Product
                        </li>
                    </NavLink>
                    <NavLink to='/About' className="link-side">
                        <li>
                            About
                        </li>
                    </NavLink>

                </ul>
            </div>

        </div>


    );

}
export default Navbar 
