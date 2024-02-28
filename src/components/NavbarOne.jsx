import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

const NavbarOne = () => {
  return (
    <div className=" bg-transparent bg-opacity-80 hidden lg:navbar">
      <div className="flex-1">
        <FaFacebook className="bg-inherit text-white w-5 h-5 mr-6 " />
        <FaInstagram className="bg-inherit text-white w-5 h-5" />
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className="text-white font-bold uppercase text-sm mx-4">
            profile
          </li>
          <li className="text-white font-bold uppercase text-sm mx-4">
            about us
          </li>
          <li className="text-white font-bold uppercase text-sm ml-4 mr-20">
            contact us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavbarOne;
