import { useDispatch } from "react-redux";
import { displayNameActions } from "../redux/slices/displayName";
import { useEffect } from "react";
import { FcSimCardChip } from "react-icons/fc";
import { RiMastercardFill } from "react-icons/ri";
import { CiCreditCard2 } from "react-icons/ci";
import { PiPaypalLogoLight } from "react-icons/pi";
import { HiOutlineCurrencyDollar } from "react-icons/hi2";
import DashboardBarChart from "../charts/DashboardBarChart";
import DashboardPieChart from "../charts/DashboardPieChart";
import { IoIosArrowForward } from "react-icons/io";
import { GrSend } from "react-icons/gr";
import DashboardAreaChart from "../charts/DashboardAreaChart";

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayNameActions.updateDisplayName("Overview"));
  }, []);

  return (
    <div className="w-full h-full space-y-6">
      <div className="w-full flex lg:flex-row flex-col gap-8">
        <div className="space-y-2 w-full">
          <div className="w-full flex justify-between items-center">
            <h1 className="text-gray-700 font-semibold text-lg">My Cards</h1>
            <p className="text-gray-700 text-sm cursor-pointer hover:text-blue-600">
              See All...
            </p>
          </div>
          <div className="lg:flex md:flex w-full gap-3 space-y-3 lg:space-y-0 md:space-y-0">
            <div className="bg-gradient-to-tr from-[#4C49ED] to-[#0A06F4] md:w-1/2 lg:w-1/2 text-white space-y-3 rounded-2xl w-full shadow-2xl">
              <div className="flex justify-between items-center p-3">
                <div>
                  <p className="text-[0.7rem] text-gray-200">Balance</p>
                  <h2 className="font-semibold">$5,124</h2>
                </div>
                <div className="text-4xl">
                  <FcSimCardChip />
                </div>
              </div>
              <div className="flex justify-between items-center p-3">
                <div>
                  <p className="text-[0.7rem] text-gray-200">
                    Card Holder Name
                  </p>
                  <h2 className="font-semibold text-[0.8rem]">Venkatesh S M</h2>
                </div>
                <div>
                  <p className="text-[0.7rem] text-gray-200">Valid Thru</p>
                  <h2 className="font-semibold text-[0.8rem]">23/28</h2>
                </div>
              </div>
              <div className="bg-gradient-to-br from-[#4C49ED] to-[#0A06F4] p-3 flex justify-between items-center rounded-2xl">
                <h1 className="text-[1rem] text-gray-200">3528****75682</h1>
                <span className="text-gray-200 text-2xl">
                  <RiMastercardFill />
                </span>
              </div>
            </div>

            <div className="bg-white lg:w-1/2 md:w-1/2 w-full text-black space-y-3 rounded-2xl shadow-2xl">
              <div className="flex justify-between items-center p-3">
                <div>
                  <p className="text-[0.7rem] text-gray-700">Balance</p>
                  <h2 className="font-semibold">$92,591,737</h2>
                </div>
                <div className="text-4xl">
                  <FcSimCardChip />
                </div>
              </div>

              <div className="flex justify-between items-center p-3">
                <div>
                  <p className="text-[0.7rem] text-gray-700">
                    Card Holder Name
                  </p>
                  <h2 className="font-semibold text-[0.8rem]">
                    Venkatesh Venki
                  </h2>
                </div>
                <div>
                  <p className="text-[0.7rem] text-gray-700">Valid Thru</p>
                  <h2 className="font-semibold text-[0.8rem]">23/30</h2>
                </div>
              </div>

              <div className="border-t border-t-gray-300 p-3 flex justify-between items-center">
                <h1 className="text-[1rem] text-gray-700">897****2535</h1>
                <span className="text-gray-500 text-2xl">
                  <RiMastercardFill />
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-2 lg:w-1/2">
          <div className="text-lg text-gray-700 font-semibold">
            <h1>Recent Transactions</h1>
          </div>

          <div className="w-full space-y-2 bg-white px-5 py-2 rounded-2xl lg:shadow-2xl overflow-x-scroll hide-scroll shadow-inner">
            <div className="flex justify-between items-center min-w-[20rem] ">
              <p className="bg-[#FFF5D9] px-3 py-3 rounded-full text-3xl text-[#FFBB38] font-semibold">
                <CiCreditCard2 />
              </p>
              <div>
                <p className="text-[1rem] font-semibold">Deposit from Card</p>
                <p className="text-gray-500 text-sm">28 January 2021</p>
              </div>
              <p className="text-red-500 font-semibold">-$850</p>
            </div>
            <div className="flex justify-between items-center min-w-[20rem] ">
              <p className="bg-blue-200 px-3 py-3 rounded-full text-3xl text-blue-500 font-semibold">
                <PiPaypalLogoLight />
              </p>
              <div>
                <p className="text-[1rem] font-semibold">Deposit Paypal</p>
                <p className="text-gray-500 text-sm">28 January 2021</p>
              </div>
              <p className="text-green-600 font-semibold">+$2500</p>
            </div>
            <div className="flex justify-between items-center min-w-[20rem] ">
              <p className="bg-green-200 px-3 py-3 rounded-full text-3xl text-green-500 font-semibold">
                <HiOutlineCurrencyDollar />
              </p>
              <div>
                <p className="text-[1rem] font-semibold">Jemi Wilson</p>
                <p className="text-gray-500 text-sm">28 January 2021</p>
              </div>
              <p className="text-green-600 font-semibold">+$5,400</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex gap-5 lg:flex-row md:flex-row flex-col">
        <div className="space-y-4 lg:w-1/2 md:w-1/2 w-full">
          <h1 className="text-gray-700 font-semibold text-lg">
            Weekly Activity
          </h1>
          <div className="bg-white rounded-lg shadow-2xl py-2 px-4">
            <DashboardBarChart />
          </div>
        </div>
        <div className="space-y-4 lg:w-1/2 md:w-1/2 w-full">
          <h1 className="text-gray-700 font-semibold text-lg">
            Expense Statistics
          </h1>
          <div className="bg-white rounded-lg shadow-2xl py-2 px-4">
            <DashboardPieChart />
          </div>
        </div>
      </div>
      <div className="w-full flex items-start gap-5 lg:flex-row md:flex-row flex-col">
        <div className="space-y-4 lg:w-1/2 md:1/2 w-full">
          <h1 className="text-gray-700 font-semibold text-lg">
            Quick Transfer
          </h1>
          <div className="bg-white py-5 px-4 space-y-5 rounded-lg shadow-2xl">
            <div className="flex justify-between items-center">
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <img
                    src="https://biographymask.com/wp-content/uploads/2022/11/Ryan-Gosling.jpg"
                    width="40px"
                    height="40px"
                    className="object-cover rounded-full"
                  />
                  <h3 className="text-[0.8rem] font-semibold">Ryan Gosling</h3>
                  <p className="text-[0.6rem] text-gray-500">CEO</p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQeE0-GGDb8Ba6oRZEFSgrgzyqJlYeM4AIS5g&s"
                    width="40px"
                    height="40px"
                    className="object-cover rounded-full"
                  />
                  <h3 className="text-[0.8rem] font-semibold">Tom Cruise</h3>
                  <p className="text-[0.6rem] text-gray-500">Director</p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="https://imgix.ranker.com/user_node_img/31/619307/original/619307-photo-u368?auto=format&q=60&fit=crop&fm=pjpg&dpr=2&crop=faces&h=125&w=125"
                    width="40px"
                    height="40px"
                    className="object-cover rounded-full"
                  />
                  <h3 className="text-[0.8rem] font-semibold">Brad Pit</h3>
                  <p className="text-[0.6rem] text-gray-500">Designer</p>
                </div>
              </div>
              <div className="shadow-lg bg-[#f6f6f6] rounded-full p-3 cursor-pointer">
                <IoIosArrowForward />
              </div>
            </div>
            <div className="flex items-center">
              <h3 className="text-[0.8rem] text-gray-500 w-1/2 font-semibold">
                Write Amount
              </h3>
              <div className="flex items-center bg-gray-200 rounded-full justify-between">
                <input
                  className="outline-none bg-transparent p-2 w-1/2 placeholder:text-[0.8rem]"
                  placeholder="Enter here.."
                />
                <div className="bg-blue-700 text-white py-3 px-5 rounded-full flex items-center gap-2 text-[0.8rem] cursor-pointer">
                  <span>Send</span>
                  <span>
                    <GrSend />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-4 w-full md:w-1/2">
          <h1 className="text-gray-700 font-semibold text-lg">
            Balance History
          </h1>
          <div className="bg-white py-5 px-4 shadow-2xl rounded-lg">
            <DashboardAreaChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
