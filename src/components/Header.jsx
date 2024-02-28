import NavbarOne from './NavbarOne';
import { logo } from '../assets';
import { FaSearch } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { FaBagShopping } from 'react-icons/fa6';

const Header = () => {
  return (
    <div className="lg:header small-header">
      <NavbarOne />
      <div className="navbar mt-10 justify-between pr-10">
        <div className="navbar-start w-[400px]">
          <div>
            <img src={logo} alt="logo" className="w-[265px] " />
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  flex items-start justify-center">
            <li className="text-white font-bold uppercase text-sm px-10">
              made-to-measure
            </li>
            <li className="text-white font-bold uppercase text-sm  pr-10">
              ready-to-wear
            </li>
            <li className="text-white font-bold uppercase text-sm  pr-10">
              shoes
            </li>
            <li className="text-white font-bold uppercase text-sm  pr-10 ">
              accessories
            </li>
          </ul>
        </div>
        <div className="navbar-end lg:w-[200px]  justify-between items-center pl-10 lg:pl-5 border-l-[#cbcbcb] border-l-2">
          <FaSearch className="bg-inherit text-white w-3 h-3 lg:w-5 lg:h-5  " />
          <CiHeart className="bg-inherit text-white w-5 h-5 lg:w-7 lg:h-7  " />
          <FaBagShopping className="bg-inherit text-white w-5 h-5 lg:w-7 lg:h-7  " />
        </div>
      </div>
    </div>
  );
};

export default Header;
