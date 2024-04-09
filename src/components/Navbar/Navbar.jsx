import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
import { IoSearchOutline } from "react-icons/io5";

const Navbar = () => {
    const navLinks = <>
        <Link><li>News</li></Link>
        <Link><li>Destination</li></Link>
        <Link><li>Blog</li></Link>
        <Link><li>Contact</li></Link>
    </>
    return (
        <div className="navbar max-w-[1160px] mx-auto font-mont flex justify-between">
            <div className="navbar-start w-fit">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 flex gap-3 rounded-box w-52">
                        {
                            navLinks
                        }
                    </ul>
                </div>
                <div className="w-[120px]">
                    <a className="cursor-pointer"><img src={logo} /></a>
                </div>
            </div>
            <div className="bg-[#FFFFFF33] text-black font-medium flex items-center px-2 py-[6px] gap-3 border rounded-md">
                <p><IoSearchOutline></IoSearchOutline></p>
                <input type="text" placeholder="Search your Destination..." className="bg-transparent outline-none border-none"/>
            </div>
            <div className="navbar-center hidden lg:flex ">
                <ul className="menu menu-horizontal px-1 space-x-3 text-base flex items-center">
                    {
                        navLinks
                    }
                    <button className="bg-[#F9A51A] px-5 py-[6px] font-medium rounded-md">Login</button>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;