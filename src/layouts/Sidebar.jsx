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
import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const [sidebar, setSideBar] = useState(true);

  return (
    <div
      className={`bg-white lg:flex hidden ${
        sidebar ? "w-[13rem]" : "w-[5rem]"
      } border-r-[0.2rem] border-gray-200 relative transform transition-all duration-100`}
    >
      <div
        className="bg-[#3a6bff] text-white text-[0.7rem] py-2 px-2 rounded-full absolute top-8 -right-3 cursor-pointer"
        onClick={() => setSideBar(!sidebar)}
        tabIndex={0}
      >
        {sidebar ? <FaArrowLeftLong /> : <FaArrowRightLong />}
      </div>

      <div className="space-y-8 px-5 py-8 w-full overflow-auto h-full">
        <div className="flex w-full gap-5 pb-8 items-center">
          <span className="text-[1.5rem] text-[#2d60ff]">
            <FaRegCreditCard />
          </span>
          {sidebar && <h1 className="font-black text-lg">BankDash.</h1>}
        </div>

        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "flex w-full gap-7 items-center transform text-[#2d60ff] transition-all duration-200"
              : "flex w-full gap-7 items-center transform transition-all duration-200"
          }
        >
          <span className="text-[1.4rem]">
            <TiHome />
          </span>
          {sidebar && <p>Dashboard</p>}
        </NavLink>

        <NavLink
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
          {sidebar && <p>Transactions</p>}
        </NavLink>

        <NavLink
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
          {sidebar && <p>Accounts</p>}
        </NavLink>

        <NavLink
          to="Investments"
          className={({ isActive }) =>
            isActive
              ? "flex w-full gap-7 items-center transform text-[#2d60ff] transition-all duration-200"
              : "flex w-full gap-7 items-center transform transition-all duration-200"
          }
        >
          <span className="text-[1.4rem]">
            <IoStatsChart />
          </span>
          {sidebar && <p>Investments</p>}
        </NavLink>

        <NavLink
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
          {sidebar && <p>Credit Cards</p>}
        </NavLink>

        <NavLink
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
          {sidebar && <p>Loans</p>}
        </NavLink>

        <NavLink
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
          {sidebar && <p>Services</p>}
        </NavLink>

        <NavLink
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
          {sidebar && <p>My Privileges</p>}
        </NavLink>

        <NavLink
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
          {sidebar && <p>Settings</p>}
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
