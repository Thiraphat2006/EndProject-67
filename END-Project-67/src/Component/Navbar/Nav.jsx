import './nav.css'
import logo from '../../Imga/LOGO/โลโก้เว็ป-removebg(cop).png'
const Navbar = () => {
    return (
        <>
            <nav>
                <div className='contrianer'>
                    <div className="nav-con">
                        <div className="logo">
                            <a href="#"><img src={logo} alt="ไม่โหลดอ่า" /></a>
                        </div>
                        <div className="btn-list">
                            <ul>
                                <li>
                                    <a href="#">Home</a>
                                </li>
                                <li>
                                    <a href="#">About</a>
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
