import { GoSearch } from "react-icons/go";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = ({ responsiveBar, setResponsiveBar }) => {
  const displayName = useSelector((store) => store.displayName);

  return (
    <div className="w-full lg:h-16 h-[7.5rem] bg-white border-r-[0.2rem] border-gray-200 py-3 px-8 border-b-2 border-b-gray-100">
      <div className="flex justify-between items-center">
        <div
          className="text-2xl font-black lg:hidden cursor-pointer"
          onClick={() => setResponsiveBar(!responsiveBar)}
        >
          <RxHamburgerMenu />
        </div>

        <div className="text-lg font-black">{displayName}</div>

        <div className="lg:flex gap-10 items-center hidden">
          <div className="bg-gray-200 flex gap-3 items-center py-2 px-4 rounded-full hover:border border-gray-500 transform transition-all duration-100">
            <GoSearch className="text-lg" />
            <input
              className="outline-none placeholder:text-sm bg-transparent"
              placeholder="Search for something.."
            />
          </div>

          <NavLink
            to="settings"
            className="bg-gray-200 text-gray-500 rounded-full p-2 font-black text-lg"
          >
            <FiSettings />
          </NavLink>

          <div className="text-pink-500 bg-gray-200 rounded-full p-2 font-black text-lg">
            <IoNotificationsOutline />
          </div>

          <NavLink>
            <img
              src="https://biographymask.com/wp-content/uploads/2022/11/Ryan-Gosling.jpg"
              width="40px"
              height="40px"
              className="object-cover rounded-full"
            />
          </NavLink>
        </div>

        <NavLink className="lg:hidden flex">
          <img
            src="https://biographymask.com/wp-content/uploads/2022/11/Ryan-Gosling.jpg"
            width="40px"
            height="40px"
            className="object-cover rounded-full"
          />
        </NavLink>
      </div>
      <div className="bg-gray-200 flex gap-3 items-center py-2 px-4 rounded-full hover:border border-gray-500 transform transition-all duration-100 lg:hidden mt-4">
        <GoSearch className="text-lg" />
        <input
          className="outline-none placeholder:text-sm bg-transparent"
          placeholder="Search for something.."
        />
      </div>
    </div>
  );
};

export default Header;
