import { useDispatch } from "react-redux";
import { displayNameActions } from "../redux/slices/displayName";
import { useEffect } from "react";
import { TbMoneybag } from "react-icons/tb";
import { GiTakeMyMoney } from "react-icons/gi";
import { GiPayMoney } from "react-icons/gi";
import { TbPigMoney } from "react-icons/tb";
import { IoIosTimer } from "react-icons/io";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import { RxPerson } from "react-icons/rx";
import { FcSimCardChip } from "react-icons/fc";
import { RiMastercardFill } from "react-icons/ri";
import { TfiApple } from "react-icons/tfi";
import { RiPlaystationLine } from "react-icons/ri";
import { RiXboxLine } from "react-icons/ri";
import AccountBarChart from "../charts/AccountBarChart";

const Accounts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayNameActions.updateDisplayName("Accounts"));
  }, []);

  return (
    <div className="w-full space-y-4">
      <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2  lg:gap-8 gap-2">
        <div className="bg-white flex items-center justify-center lg:gap-5 gap-2 py-5 px-1 rounded-2xl shadow-2xl">
          <span className="px-4 py-4 rounded-full bg-orange-200 flex items-center justify-center text-orange-600 text-2xl">
            <TbMoneybag />
          </span>
          <div className="space-y-1">
            <p className="text-sm text-gray-500">My Balance</p>
            <h3 className="font-semibold text-lg">$12,750</h3>
          </div>
        </div>
        <div className="bg-white flex items-center justify-center lg:gap-5 gap-2 py-5 px-1 rounded-2xl shadow-2xl">
          <span className="px-4 py-4 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 text-2xl">
            <GiTakeMyMoney />
          </span>
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Income</p>
            <h3 className="font-semibold text-lg">$12,750</h3>
          </div>
        </div>
        <div className="bg-white flex items-center justify-center lg:gap-5 gap-2 py-5 px-1 rounded-2xl shadow-2xl">
          <span className="px-4 py-4 rounded-full bg-pink-200 flex items-center justify-center text-pink-600 text-2xl">
            <GiPayMoney />
          </span>
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Expense</p>
            <h3 className="font-semibold text-lg">$12,750</h3>
          </div>
        </div>
        <div className="bg-white flex items-center justify-center lg:gap-5 gap-2 py-5 px-1 rounded-2xl shadow-2xl">
          <span className="px-4 py-4 rounded-full bg-green-200 flex items-center justify-center text-green-600 text-2xl">
            <TbPigMoney />
          </span>
          <div className="space-y-1">
            <p className="text-sm text-gray-500">Savings</p>
            <h3 className="font-semibold text-lg">$12,750</h3>
          </div>
        </div>
      </div>

      <div className="lg:flex w-full gap-5 items-center space-y-4 lg:space-y-0">
        <div className="space-y-3 flex-1">
          <h1 className="text-lg text-gray-600 font-semibold">
            Last Transaction
          </h1>
          <div className="bg-white space-y-2 py-2 px-2 rounded-2xl overflow-x-scroll lg:shadow-lg hide-scroll shadow-inner">
            <div className="flex gap-5 items-center  min-w-[35rem]">
              <div>
                <span className="px-4 py-4 rounded-full bg-green-200 flex items-center justify-center text-green-600 text-2xl">
                  <IoIosTimer />
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-md text-gray-700">
                  Spotify Subscription
                </h3>
                <p className="text-sm text-gray-500">25 Jan 2021</p>
              </div>
              <div className="text-sm text-gray-500">Shopping</div>
              <div className="text-sm text-gray-500">1234 ****</div>
              <div className="text-sm text-gray-500">Pending</div>
              <div className="text-sm text-orange-500">-$150</div>
            </div>
            <div className="flex gap-5 items-center  min-w-[35rem]">
              <div>
                <span className="px-4 py-4 rounded-full bg-blue-200 flex items-center justify-center text-blue-600 text-2xl">
                  <HiWrenchScrewdriver />
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-md text-gray-700">
                  Mobile Service
                </h3>
                <p className="text-sm text-gray-500">25 Jan 2021</p>
              </div>
              <div className="text-sm text-gray-500">Shopping</div>
              <div className="text-sm text-gray-500">1234 ****</div>
              <div className="text-sm text-gray-500">Completed</div>
              <div className="text-sm text-green-600">-$150</div>
            </div>
            <div className="flex gap-5 items-center  min-w-[30rem]">
              <div>
                <span className="px-4 py-4 rounded-full bg-pink-200 flex items-center justify-center text-pink-600 text-2xl">
                  <RxPerson />
                </span>
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-md text-gray-700">Amily</h3>
                <p className="text-sm text-gray-500">25 Jan 2021</p>
              </div>
              <div className="text-sm text-gray-500">Shopping</div>
              <div className="text-sm text-gray-500">1234 ****</div>
              <div className="text-sm text-gray-500">Failed</div>
              <div className="text-sm text-red-500">-$150</div>
            </div>
          </div>
        </div>
        <div className="space-y-3 lg:w-1/3">
          <div className="text-gray-600 font-semibold flex justify-between">
            <p className="text-lg">My Card</p>
            <p className="text-sm cursor-pointer hover:text-blue-500">
              See All
            </p>
          </div>
          <div className="bg-gradient-to-tr from-[#2D60FF] to-[#539BFF] text-white space-y-3 rounded-2xl w-full pt-1 shadow-lg">
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
                <p className="text-[0.7rem] text-gray-200">Card Holder Name</p>
                <h2 className="font-semibold text-[0.8rem]">Venkatesh S M</h2>
              </div>
              <div>
                <p className="text-[0.7rem] text-gray-200">Valid Thru</p>
                <h2 className="font-semibold text-[0.8rem]">23/28</h2>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#539BFF] to-[#2D60FF] py-3 px-2 flex justify-between items-center rounded-2xl">
              <h1 className="text-[1rem] text-gray-200">3528****75682</h1>
              <span className="text-gray-200 text-2xl">
                <RiMastercardFill />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex gap-5 space-y-4 lg:space-y-0">
        <div className="w-full space-y-3 lg:flex-1">
          <h1 className="text-lg text-gray-600 font-semibold">
            Debit & Credit Overview
          </h1>
          <div className="bg-white p-2 rounded-2xl shadow-lg w-full">
            <AccountBarChart />
          </div>
        </div>

        <div className="space-y-3 lg:w-1/3">
          <h1 className="text-lg text-gray-600 font-semibold">Invoices Sent</h1>
          <div className="bg-white py-2 px-4 space-y-3 rounded-2xl shadow-lg">
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <div className="text-gray-600 bg-gray-200 py-3 px-3 rounded-full text-2xl">
                  <TfiApple />
                </div>
                <div>
                  <h3 className="text-[0.9rem] font-thin text-gray-500">
                    Apple Store
                  </h3>
                  <p className="text-[0.7rem] text-blue-400">5h ago</p>
                </div>
              </div>
              <div className="text-[0.8rem] font-thin text-blue-400">$450</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <div className="text-pink-600 bg-pink-200 py-3 px-3 rounded-full text-2xl">
                  <RxPerson />
                </div>
                <div>
                  <h3 className="text-[0.9rem] font-thin text-gray-500">
                    Michael
                  </h3>
                  <p className="text-[0.7rem] text-blue-400">5h ago</p>
                </div>
              </div>
              <div className="text-[0.8rem] font-thin text-blue-400">$450</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <div className="text-purple-600 bg-purple-200 py-3 px-3 rounded-full text-2xl">
                  <RiPlaystationLine />
                </div>
                <div>
                  <h3 className="text-[0.9rem] font-thin text-gray-500">
                    Playstation
                  </h3>
                  <p className="text-[0.7rem] text-blue-400">5h ago</p>
                </div>
              </div>
              <div className="text-[0.8rem] font-thin text-blue-400">$450</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <div className="text-pink-600 bg-pink-200 py-3 px-3 rounded-full text-2xl">
                  <RxPerson />
                </div>
                <div>
                  <h3 className="text-[0.9rem] font-thin text-gray-500">
                    William
                  </h3>
                  <p className="text-[0.7rem] text-blue-400">5h ago</p>
                </div>
              </div>
              <div className="text-[0.8rem] font-thin text-blue-400">$450</div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <div className="text-green-600 bg-green-200 py-3 px-3 rounded-full text-2xl">
                  <RiXboxLine />
                </div>
                <div>
                  <h3 className="text-[0.9rem] font-thin text-gray-500">
                    XBox
                  </h3>
                  <p className="text-[0.7rem] text-blue-400">5h ago</p>
                </div>
              </div>
              <div className="text-[0.8rem] font-thin text-blue-400">$450</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;
