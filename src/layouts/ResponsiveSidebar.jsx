import { FaRegCreditCard } from "react-icons/fa6";
import { TiHome } from "react-icons/ti";
import { GrTransaction } from "react-icons/gr";
import { IoPerson } from "react-icons/io5";
import { IoStatsChart } from "react-icons/io5";
import { BsCreditCard } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { IoBulbOutline } from "react-icons/io5";
import { FiSettings } from "react-icons/fi";
import { FaArrowLeftLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const ResponsiveSidebar = ({ responsiveBar, setResponsiveBar }) => {
  return (
    <div
      className={`bg-white flex h-full w-full border-r-[0.2rem] border-gray-200 z-10 relative`}
    >
      <div
        className="bg-[#2d60ff] text-white text-[0.7rem] py-2 px-2 rounded-full absolute top-8 -right-3 cursor-pointer"
        onClick={() => setResponsiveBar(!responsiveBar)}
        tabIndex={0}
      >
        {responsiveBar && <FaArrowLeftLong />}
      </div>

      <div className="space-y-8 px-5 py-8 w-full overflow-auto scroll-smooth h-full">
        <div className="flex w-full gap-5 pb-8 items-center">
          <span className="text-[1.5rem] text-[#2d60ff]">
            <FaRegCreditCard />
          </span>
          <h1 className="font-black text-lg">BankDash.</h1>
        </div>

        <NavLink
          to="/"
          onClick={() => setResponsiveBar(!responsiveBar)}
          className={({ isActive }) =>
            isActive
              ? "flex w-full gap-7 items-center transform text-[#2d60ff] transition-all duration-200"
              : "flex w-full gap-7 items-center transform transition-all duration-200"
          }
        >
          <span className="text-[1.4rem]">
            <TiHome />
          </span>
          <p>Dashboard</p>
        </NavLink>

        <NavLink
          onClick={() => setResponsiveBar(!responsiveBar)}
          to="transactions"
          className={({ isActive }) =>
            isActive
              ? "flex w-full gap-7 items-center transform text-[#2d60ff] transition-all duration-200"
              : "flex w-full gap-7 items-center transform transition-all duration-200"
          }
        >
          <span className="text-[1.4rem]">
            <GrTransaction />
          </span>
          <p>Transactions</p>
        </NavLink>

        <NavLink
          onClick={() => setResponsiveBar(!responsiveBar)}
          to="accounts"
          className={({ isActive }) =>
            isActive
              ? "flex w-full gap-7 items-center transform text-[#2d60ff] transition-all duration-200"
              : "flex w-full gap-7 items-center transform transition-all duration-200"
          }
        >
          <span className="text-[1.4rem]">
            <IoPerson />
          </span>
          <p>Accounts</p>
        </NavLink>

        <NavLink
          onClick={() => setResponsiveBar(!responsiveBar)}
          to="investments"
          className={({ isActive }) =>
            isActive
              ? "flex w-full gap-7 items-center transform text-[#2d60ff] transition-all duration-200"
              : "flex w-full gap-7 items-center transform transition-all duration-200"
          }
        >
          <span className="text-[1.4rem]">
            <IoStatsChart />
          </span>
          <p>Investments</p>
        </NavLink>

        <NavLink
          onClick={() => setResponsiveBar(!responsiveBar)}
          to="credit-cards"
          className={({ isActive }) =>
            isActive
              ? "flex w-full gap-7 items-center transform text-[#2d60ff] transition-all duration-200"
              : "flex w-full gap-7 items-center transform transition-all duration-200"
          }
        >
          <span className="text-[1.4rem]">
            <BsCreditCard />
          </span>
          <p>Credit Cards</p>
        </NavLink>

        <NavLink
          onClick={() => setResponsiveBar(!responsiveBar)}
          to="loans"
          className={({ isActive }) =>
            isActive
              ? "flex w-full gap-7 items-center transform text-[#2d60ff] transition-all duration-200"
              : "flex w-full gap-7 items-center transform transition-all duration-200"
          }
        >
          <span className="text-[1.4rem]">
            <GiReceiveMoney />
          </span>
          <p>Loans</p>
        </NavLink>

        <NavLink
          onClick={() => setResponsiveBar(!responsiveBar)}
          to="services"
          className={({ isActive }) =>
            isActive
              ? "flex w-full gap-7 items-center transform text-[#2d60ff] transition-all duration-200"
              : "flex w-full gap-7 items-center transform transition-all duration-200"
          }
        >
          <span className="text-[1.4rem]">
            <HiWrenchScrewdriver />
          </span>
          <p>Services</p>
        </NavLink>

        <NavLink
          onClick={() => setResponsiveBar(!responsiveBar)}
          to="my-privileges"
          className={({ isActive }) =>
            isActive
              ? "flex w-full gap-7 items-center transform text-[#2d60ff] transition-all duration-200"
              : "flex w-full gap-7 items-center transform transition-all duration-200"
          }
        >
          <span className="text-[1.4rem]">
            <IoBulbOutline />
          </span>
          <p>My Privileges</p>
        </NavLink>

        <NavLink
          onClick={() => setResponsiveBar(!responsiveBar)}
          to="settings"
          className={({ isActive }) =>
            isActive
              ? "flex w-full gap-7 items-center transform text-[#2d60ff] transition-all duration-200"
              : "flex w-full gap-7 items-center transform transition-all duration-200"
          }
        >
          <span className="text-[1.4rem]">
            <FiSettings />
          </span>
          <p>Settings</p>
        </NavLink>
      </div>
    </div>
  );
};

export default ResponsiveSidebar;
