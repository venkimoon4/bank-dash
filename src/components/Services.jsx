import { useDispatch } from "react-redux";
import { displayNameActions } from "../redux/slices/displayName";
import { useEffect } from "react";
import { FaHeartPulse } from "react-icons/fa6";
import { RiShoppingBag4Line } from "react-icons/ri";
import { BsShieldCheck } from "react-icons/bs";
import { GiReceiveMoney } from "react-icons/gi";
import { TbMoneybag } from "react-icons/tb";
import { FaChartColumn } from "react-icons/fa6";
import { LuWalletCards } from "react-icons/lu";

const Services = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayNameActions.updateDisplayName("Services"));
  }, []);
  return (
    <div className="w-full space-y-4">
      <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 gap-5">
        <div className="flex gap-5 bg-white px-10 py-6 rounded-2xl shadow-lg justify-center items-center">
          <div className="text-green-500 bg-green-200 px-3 py-3 text-2xl rounded-full">
            <FaHeartPulse />
          </div>
          <div>
            <h3 className="text-[1rem] font-semibold text-gray-700">
              Life Insurance
            </h3>
            <p className="text-[0.8rem] text-gray-600">Unlimited protection</p>
          </div>
        </div>
        <div className="flex gap-5 bg-white px-10 py-6 rounded-2xl shadow-lg justify-center items-center pr-16 lg:pr-0">
          <div className="text-yellow-500 bg-yellow-200 px-3 py-3 text-2xl rounded-full">
            <RiShoppingBag4Line />
          </div>
          <div>
            <h3 className="text-[1rem] font-semibold text-gray-700">
              Shopping
            </h3>
            <p className="text-[0.8rem] text-gray-600">Buy. Think. Grow.</p>
          </div>
        </div>
        <div className="flex gap-5 bg-white px-10 py-6 rounded-2xl shadow-lg justify-center items-center md:col-span-2 lg:col-auto pr-16 lg:pr-0">
          <div className="text-blue-500 bg-blue-200 px-3 py-3 text-2xl rounded-full">
            <BsShieldCheck />
          </div>
          <div>
            <h3 className="text-[1rem] font-semibold text-gray-700">Safety</h3>
            <p className="text-[0.8rem] text-gray-600">We are your allies</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h1 className="text-lg text-gray-600 font-semibold">
          Bank Services List
        </h1>
        <div className="space-y-4">
          <div className="flex justify-between gap-2 items-center bg-white rounded-2xl px-2 py-4 shadow-lg">
            <div className="flex gap-3">
              <div className="py-2 px-2 bg-pink-200 text-pink-500 rounded-full text-2xl">
                <GiReceiveMoney />
              </div>
              <div>
                <h3 className="text-[0.9rem] text-gray-600 font-semibold">
                  Business loans
                </h3>
                <p className="text-[0.8rem] text-gray-500">
                  It is a long established
                </p>
              </div>
            </div>
            <div className="hidden lg:block md:block sm:block">
              <h3 className="text-[0.9rem] text-gray-600 font-semibold">
                Lorem Ipsum
              </h3>
              <p className="text-[0.8rem] text-gray-500">
                It is a long established
              </p>
            </div>
            <div className="hidden lg:block md:block">
              <h3 className="text-[0.9rem] text-gray-600 font-semibold">
                Lorem Ipsum
              </h3>
              <p className="text-[0.8rem] text-gray-500">
                It is a long established
              </p>
            </div>
            <div className="hidden lg:block">
              <h3 className="text-[0.9rem] text-gray-600 font-semibold">
                Lorem Ipsum
              </h3>
              <p className="text-[0.8rem] text-gray-500">
                It is a long established
              </p>
            </div>
            <div className="py-2 px-3 border border-gray-400 rounded-2xl cursor-pointer text-[0.8rem]">
              View Details
            </div>
          </div>
          <div className="flex justify-between gap-2 items-center bg-white rounded-2xl px-2 py-4 shadow-lg">
            <div className="flex gap-3">
              <div className="py-2 px-2 bg-yellow-200 text-yellow-500 rounded-full text-2xl">
                <TbMoneybag />
              </div>
              <div>
                <h3 className="text-[0.9rem] text-gray-600 font-semibold">
                  Checking accounts
                </h3>
                <p className="text-[0.8rem] text-gray-500">
                  It is a long established
                </p>
              </div>
            </div>
            <div className="hidden lg:block md:block sm:block">
              <h3 className="text-[0.9rem] text-gray-600 font-semibold">
                Lorem Ipsum
              </h3>
              <p className="text-[0.8rem] text-gray-500">
                It is a long established
              </p>
            </div>
            <div className="hidden lg:block md:block">
              <h3 className="text-[0.9rem] text-gray-600 font-semibold">
                Lorem Ipsum
              </h3>
              <p className="text-[0.8rem] text-gray-500">
                It is a long established
              </p>
            </div>
            <div className="hidden lg:block">
              <h3 className="text-[0.9rem] text-gray-600 font-semibold">
                Lorem Ipsum
              </h3>
              <p className="text-[0.8rem] text-gray-500">
                It is a long established
              </p>
            </div>
            <div className="py-2 px-3 border border-gray-400 rounded-2xl cursor-pointer text-[0.8rem]">
              View Details
            </div>
          </div>
          <div className="flex justify-between gap-2 items-center bg-white rounded-2xl px-2 py-4 shadow-lg">
            <div className="flex gap-3">
              <div className="py-2 px-2 bg-blue-200 text-blue-500 rounded-full text-2xl">
                <FaChartColumn />
              </div>
              <div>
                <h3 className="text-[0.9rem] text-gray-600 font-semibold">
                  Savings accounts
                </h3>
                <p className="text-[0.8rem] text-gray-500">
                  It is a long established
                </p>
              </div>
            </div>
            <div className="hidden lg:block md:block sm:block">
              <h3 className="text-[0.9rem] text-gray-600 font-semibold">
                Lorem Ipsum
              </h3>
              <p className="text-[0.8rem] text-gray-500">
                It is a long established
              </p>
            </div>
            <div className="hidden lg:block md:block">
              <h3 className="text-[0.9rem] text-gray-600 font-semibold">
                Lorem Ipsum
              </h3>
              <p className="text-[0.8rem] text-gray-500">
                It is a long established
              </p>
            </div>
            <div className="hidden lg:block">
              <h3 className="text-[0.9rem] text-gray-600 font-semibold">
                Lorem Ipsum
              </h3>
              <p className="text-[0.8rem] text-gray-500">
                It is a long established
              </p>
            </div>
            <div className="py-2 px-3 border border-gray-400 rounded-2xl cursor-pointer text-[0.8rem]">
              View Details
            </div>
          </div>
          <div className="flex justify-between gap-2 items-center bg-white rounded-2xl px-2 py-4 shadow-lg">
            <div className="flex gap-3">
              <div className="py-2 px-2 bg-purple-200 text-purple-500 rounded-full text-2xl">
                <LuWalletCards />
              </div>
              <div>
                <h3 className="text-[0.9rem] text-gray-600 font-semibold">
                  Debit and credit
                </h3>
                <p className="text-[0.8rem] text-gray-500">
                  It is a long established
                </p>
              </div>
            </div>
            <div className="hidden lg:block md:block sm:block">
              <h3 className="text-[0.9rem] text-gray-600 font-semibold">
                Lorem Ipsum
              </h3>
              <p className="text-[0.8rem] text-gray-500">
                It is a long established
              </p>
            </div>
            <div className="hidden lg:block md:block">
              <h3 className="text-[0.9rem] text-gray-600 font-semibold">
                Lorem Ipsum
              </h3>
              <p className="text-[0.8rem] text-gray-500">
                It is a long established
              </p>
            </div>
            <div className="hidden lg:block">
              <h3 className="text-[0.9rem] text-gray-600 font-semibold">
                Lorem Ipsum
              </h3>
              <p className="text-[0.8rem] text-gray-500">
                It is a long established
              </p>
            </div>
            <div className="py-2 px-3 border border-gray-400 rounded-2xl cursor-pointer text-[0.8rem]">
              View Details
            </div>
          </div>
          <div className="flex justify-between gap-2 items-center bg-white rounded-2xl px-2 py-4 shadow-lg">
            <div className="flex gap-3">
              <div className="py-2 px-2 bg-green-200 text-green-500 rounded-full text-2xl">
                <BsShieldCheck />
              </div>
              <div>
                <h3 className="text-[0.9rem] text-gray-600 font-semibold">
                  Life Insurance
                </h3>
                <p className="text-[0.8rem] text-gray-500">
                  It is a long established
                </p>
              </div>
            </div>
            <div className="hidden lg:block md:block sm:block">
              <h3 className="text-[0.9rem] text-gray-600 font-semibold">
                Lorem Ipsum
              </h3>
              <p className="text-[0.8rem] text-gray-500">
                It is a long established
              </p>
            </div>
            <div className="hidden lg:block md:block">
              <h3 className="text-[0.9rem] text-gray-600 font-semibold">
                Lorem Ipsum
              </h3>
              <p className="text-[0.8rem] text-gray-500">
                It is a long established
              </p>
            </div>
            <div className="hidden lg:block">
              <h3 className="text-[0.9rem] text-gray-600 font-semibold">
                Lorem Ipsum
              </h3>
              <p className="text-[0.8rem] text-gray-500">
                It is a long established
              </p>
            </div>
            <div className="py-2 px-3 border border-gray-400 rounded-2xl cursor-pointer text-[0.8rem]">
              View Details
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
