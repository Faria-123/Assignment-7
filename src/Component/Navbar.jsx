import React from 'react';
import { CiHome } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import { ImStatsDots } from "react-icons/im";
import { Link, NavLink } from 'react-router';

const Navbar = () => {

    const activeClass = ({ isActive }) => isActive ? 'bg-[#244D3F] font-bold text-white' : '';
    return (
        <div className=' shadow-md'>
            <div className="navbar   container mx-auto ">
                <div className="flex-1">
                    <h1 className="text-xl"><span className='font-bold'>Keen</span>Keeper</h1>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1 gap-4">
                        <li><NavLink to='/' className={activeClass}><CiHome />Home</NavLink></li>


                        <li><NavLink to='/timeline' className={activeClass}><IoMdTime /> Timeline</NavLink></li>
                        <li><NavLink to='/stats' className={activeClass}><ImStatsDots />Stats</NavLink></li>

                    </ul>
                </div>
            </div>
        </div >
    );
};

export default Navbar;