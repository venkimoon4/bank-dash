import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { FcSimCardChip } from "react-icons/fc";
import { RiMastercardFill } from "react-icons/ri";
import { displayNameActions } from "../redux/slices/displayName";
import CreditCardPieChart from "../charts/CreditCardPieChart";
import { IoCardSharp } from "react-icons/io5";
import { TfiApple } from "react-icons/tfi";
import { MdBlock } from "react-icons/md";
import { CiLock } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa6";
import { FaApplePay } from "react-icons/fa6";
import NormalSelect from "../ui-components/NormalSelect";

const CreditCards = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayNameActions.updateDisplayName("Credit Cards"));
  }, []);
  return (
    <div className="w-full space-y-4">
      <div className="w-full grid lg:grid-cols-3 gap-5 md:grid-cols-2">
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
        <div className="bg-gradient-to-tr from-[#4C49ED] to-[#0A06F4] text-white space-y-3 rounded-2xl w-full pt-1 shadow-lg">
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
          <div className="bg-gradient-to-br from-[#0A06F4] to-[#4C49ED] py-3 px-2 flex justify-between items-center rounded-2xl">
            <h1 className="text-[1rem] text-gray-200">3528****75682</h1>
            <span className="text-gray-200 text-2xl">
              <RiMastercardFill />
            </span>
          </div>
        </div>
        <div className="bg-white space-y-3 rounded-2xl w-full pt-1 shadow-lg md:col-span-2 lg:col-auto">
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
              <p className="text-[0.7rem] text-gray-700">Card Holder Name</p>
              <h2 className="font-semibold text-[0.8rem]">Venkatesh Venki</h2>
            </div>
            <div>
              <p className="text-[0.7rem] text-gray-700">Valid Thru</p>
              <h2 className="font-semibold text-[0.8rem]">23/30</h2>
            </div>
          </div>

          <div className="border-t border-t-gray-300 p-3 flex justify-between items-center">
            <h1 className="text-[1rem] text-gray-700">897****2535</h1>
            <span className="text-gray-900 text-2xl">
              <RiMastercardFill />
            </span>
          </div>
        </div>
      </div>
      <div className="w-full lg:flex gap-5 space-y-4 lg:space-y-0">
        <div className="space-y-3">
          <h1 className="text-lg text-gray-700 font-semibold">
            Card Expense Statistics
          </h1>
          <div className="bg-white py-2 px-4 rounded-2xl shadow-lg flex justify-center items-center">
            <CreditCardPieChart />
          </div>
        </div>
        <div className="space-y-3 flex-1 md:w-full">
          <h1 className="text-lg text-gray-700 font-semibold lg:text-center">
            My Investment
          </h1>
          <div className="space-y-3">
            <div className="flex bg-white py-[1.1rem] px-2 gap-4 justify-between sm:justify-between shadow-lg rounded-2xl items-center">
              <div className="py-2 px-2 flex items-center justify-center text-pink-600 bg-pink-200 rounded-2xl text-2xl">
                <IoCardSharp />
              </div>
              <div>
                <h3 className="text-[0.9rem] font-semibold">Card Type</h3>
                <p className="text-[0.8rem] text-gray-600">Secondary</p>
              </div>
              <div>
                <h3 className="text-[0.9rem] font-semibold">Bank</h3>
                <p className="text-[0.8rem] text-gray-600">DBL Bank</p>
              </div>
              <div className="lg:block hidden">
                <h3 className="text-[0.9rem] font-semibold">Card Number</h3>
                <p className="text-[0.8rem] text-gray-600">**** **** 5600</p>
              </div>
              <div className="lg:block hidden">
                <h3 className="text-[0.9rem] font-semibold">Name on Card</h3>
                <p className="text-[0.8rem] text-gray-600">William</p>
              </div>
              <div className="text-blue-600 text-[0.9rem] font-semibold cursor-pointer">
                View Details
              </div>
            </div>
            <div className="flex bg-white py-[1.1rem] px-2 gap-4 justify-between sm:justify-between shadow-lg rounded-2xl items-center">
              <div className="py-2 px-2 flex items-center justify-center text-blue-600 bg-blue-200 rounded-2xl text-2xl">
                <IoCardSharp />
              </div>
              <div>
                <h3 className="text-[0.9rem] font-semibold">Card Type</h3>
                <p className="text-[0.8rem] text-gray-600">Secondary</p>
              </div>
              <div>
                <h3 className="text-[0.9rem] font-semibold">Bank</h3>
                <p className="text-[0.8rem] text-gray-600">BRC Bank</p>
              </div>
              <div className="lg:block hidden">
                <h3 className="text-[0.9rem] font-semibold">Card Number</h3>
                <p className="text-[0.8rem] text-gray-600">**** **** 4300</p>
              </div>
              <div className="lg:block hidden">
                <h3 className="text-[0.9rem] font-semibold">Name on Card</h3>
                <p className="text-[0.8rem] text-gray-600">Michel</p>
              </div>
              <div className="text-blue-600 text-[0.9rem] font-semibold cursor-pointer">
                View Details
              </div>
            </div>
            <div className="flex bg-white py-[1.1rem] px-2 gap-4 justify-between sm:justify-between shadow-lg rounded-2xl items-center">
              <div className="py-2 px-2 flex items-center justify-center text-orange-600 bg-orange-200 rounded-2xl text-2xl">
                <IoCardSharp />
              </div>
              <div>
                <h3 className="text-[0.9rem] font-semibold">Card Type</h3>
                <p className="text-[0.8rem] text-gray-600">Secondary</p>
              </div>
              <div>
                <h3 className="text-[0.9rem] font-semibold">Bank</h3>
                <p className="text-[0.8rem] text-gray-600">ABM Bank</p>
              </div>
              <div className="lg:block hidden">
                <h3 className="text-[0.9rem] font-semibold">Card Number</h3>
                <p className="text-[0.8rem] text-gray-600">**** **** 7560</p>
              </div>
              <div className="lg:block hidden">
                <h3 className="text-[0.9rem] font-semibold">Name on Card</h3>
                <p className="text-[0.8rem] text-gray-600">Edward</p>
              </div>
              <div className="text-blue-600 text-[0.9rem] font-semibold cursor-pointer">
                View Details
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:flex gap-5 space-y-3 lg:space-y-0">
        <div className="space-y-3 lg:flex-1">
          <h1 className="text-lg text-gray-700 font-semibold">Add New Card</h1>
          <div className="bg-white space-y-10 py-5 px-4 rounded-2xl shadow-lg">
            <p className="text-sm text-gray-500">
              Credit Card generally means a plastic card issued by Scheduled
              Commercial Banks assigned to a Cardholder, with a credit limit,
              that can be used to purchase goods and services on credit or
              obtain cash advances.
            </p>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-4">
              <div className="space-y-2 flex flex-col">
                <label className="text-sm text-gray-800">Card Type</label>
                <input
                  className="p-2 outline-none border rounded-lg placeholder:text-sm"
                  placeholder="Classic"
                />
              </div>
              <div className="space-y-2 flex flex-col">
                <label className="text-sm text-gray-800">Name On Card</label>
                <input
                  className="p-2 outline-none border rounded-lg placeholder:text-sm"
                  placeholder="My Cards"
                />
              </div>
              <div className="space-y-2 flex flex-col">
                <label className="text-sm text-gray-800">Card Number</label>
                <input
                  className="p-2 outline-none border rounded-lg placeholder:text-sm"
                  placeholder="**** **** **** ****"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm text-gray-800">Expiration Date</label>
                <NormalSelect
                  label={"Expiration Date"}
                  placeholder={"Select Date"}
                  data={[
                    "25 January 2025",
                    "26 January 2025",
                    "27 January 2025",
                    "28 January 2025",
                    "29 January 2025",
                    "30 January 2025",
                    "31 January 2025",
                  ]}
                />
              </div>
              <div className="text-white bg-blue-600 px-2 py-2 rounded-lg w-[8rem] text-center text-sm cursor-pointer shadow-lg">
                Add Card
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-3 lg:w-[15rem]">
          <h1 className="text-lg text-gray-600 font-semibold">Card Setting</h1>
          <div className="bg-white py-2 px-4 space-y-[1.1rem] rounded-2xl shadow-lg h-auto">
            <div className="flex items-center cursor-pointer">
              <div className="flex gap-2 items-center">
                <div className="text-orange-600 bg-orange-200 py-3 px-3 rounded-full text-2xl">
                  <MdBlock />
                </div>
                <div>
                  <h3 className="text-[0.9rem] font-thin text-gray-900">
                    Block Card
                  </h3>
                  <p className="text-[0.7rem] text-gray-600">
                    Instantly block your card
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center cursor-pointer">
              <div className="flex gap-2 items-center">
                <div className="text-purple-600 bg-purple-200 py-3 px-3 rounded-full text-2xl">
                  <CiLock />
                </div>
                <div>
                  <h3 className="text-[0.9rem] font-thin text-gray-900">
                    Change Pin Code
                  </h3>
                  <p className="text-[0.7rem] text-gray-600">
                    Choose another pin code
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center cursor-pointer">
              <div className="flex gap-2 items-center">
                <div className="text-blue-600 bg-blue-200 py-3 px-3 rounded-full text-2xl">
                  <FaGoogle />
                </div>
                <div>
                  <h3 className="text-[0.9rem] font-thin text-gray-900">
                    Add to Google Pay
                  </h3>
                  <p className="text-[0.7rem] text-gray-600">
                    Withdraw without any card
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center cursor-pointer">
              <div className="flex gap-2 items-center">
                <div className="text-gray-600 bg-gray-200 py-3 px-3 rounded-full text-2xl">
                  <TfiApple />
                </div>
                <div>
                  <h3 className="text-[0.9rem] font-thin text-gray-900">
                    Add to Apple Pay
                  </h3>
                  <p className="text-[0.7rem] text-gray-600">
                    Withdraw without any card
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center cursor-pointer">
              <div className="flex gap-2 items-center">
                <div className="text-green-600 bg-green-200 py-3 px-3 rounded-full text-2xl">
                  <FaApplePay />
                </div>
                <div>
                  <h3 className="text-[0.9rem] font-thin text-gray-900">
                    Add to Apple Store
                  </h3>
                  <p className="text-[0.7rem] text-gray-600">
                    Withdraw without any card
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCards;
