import NavbarOne from './NavbarOne';
import { logo } from '../assets';
import { FaSearch } from 'react-icons/fa';
import { CiHeart } from 'react-icons/ci';
import { FaBagShopping } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className=" header">
      <NavbarOne />
      <div className="navbar mt-10 justify-between pr-10">
        <div className="navbar-start w-100px lg:w-[400px]">
          <div>
            <Link to="/">
              <img src={logo} alt="logo" className=" " />
            </Link>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal  flex items-center justify-center">
            <li className="text-white font-bold uppercase text-lg px-10">
              made-to-measure
            </li>
            <li className="text-white font-bold uppercase text-lg  pr-10">
              ready-to-wear
            </li>
            <li className="text-white font-bold uppercase text-lg  pr-10">
              shoes
            </li>
            <li className="text-white font-bold uppercase text-lg  pr-10 ">
              accessories
            </li>
          </ul>
        </div>
        <div className="navbar-end lg:w-[200px]  justify-between items-center pl-3 lg:pl-5 border-l-[#cbcbcb] border-l-2">
          <FaSearch className="bg-inherit text-white pl-3 w-3 h-3 lg:w-5 lg:h-5  " />
          <CiHeart className="bg-inherit text-white pl-3 w-5 h-5 lg:w-7 lg:h-7  " />
          <Link to="/cart">
            <FaBagShopping className="bg-inherit text-white w-5 h-5 lg:w-7 lg:h-7  " />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
