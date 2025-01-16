import './nav.css'
import { NavLink } from 'react-router';
import logo from '../../../public/Image/LOGO/โลโก้เว็ป-removebg(cop).png'

const Navbar = () => {

    return (
        <>
            <nav className='p-2 h-fit md:h15'>
                <div className='contrianer'>
                    <div className="nav-con grid grid-rows-2 justify-center md:flex md:justify-between">
                        <div className="logo">
                            <NavLink to='/ProductPage' className="flex justify-center"><img src={logo} alt="ไม่โหลดอ่า" /></NavLink>
                        </div>
                        <div className="btn-list">
                            <ul >
                                <li>
                                    <NavLink to='/'>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/ProductPage'>Product</NavLink>
                                </li>
                                <li>
                                    <NavLink to='/About'>About</NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );

}
export default Navbar 
