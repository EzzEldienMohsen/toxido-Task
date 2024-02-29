import { footer } from '../assets';

const Footer = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-center items-center lg:justify-between  px-10 bg-[#2c2c2c]">
      <div className="capitalize text-sm lg:text-md text-[#969595] flex items-center justify-center lg:justify-start">
        {footer.map((link) => {
          return (
            <span
              key={link}
              className="font-bold lg:px-8 py-2 pr-4 lg:border-r-2 lg:border-spacing-2 lg:border-[#454545]"
            >
              {link}
            </span>
          );
        })}
      </div>
      <div className="capitalize text-xl lg:text-lg my-2 lg:my-0 text-[#969595] flex items-center justify-center lg:justify-start lg:pr-10">
        <h1>Copyright ©2020 ORANGESQUARE</h1>
      </div>
    </div>
  );
};

export default Footer;
