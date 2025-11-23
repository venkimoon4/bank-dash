import { useDispatch } from "react-redux";
import { displayNameActions } from "../redux/slices/displayName";
import { useEffect } from "react";
import { GiSwapBag } from "react-icons/gi";
import { LuChartPie } from "react-icons/lu";
import { FaArrowsRotate } from "react-icons/fa6";
import { FaApple } from "react-icons/fa6";
import { SiSamsung } from "react-icons/si";
import { SiTesla } from "react-icons/si";
import InvestmentLinearLineChart from "../charts/InvestmentLinearLineChart";
import InvestmentDefaultLineChart from "../charts/InvestmentDefaultLineChart";
import DataTable from "react-data-table-component";

const Investments = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayNameActions.updateDisplayName("Investments"));
  }, []);

  const data = [
    {
      name: "Trivago",
      price: "520",
      returns: "5",
    },
    {
      name: "Trivago",
      price: "520",
      returns: "5",
    },
    {
      name: "Trivago",
      price: "520",
      returns: "5",
    },
    {
      name: "Trivago",
      price: "520",
      returns: "5",
    },
    {
      name: "Trivago",
      price: "520",
      returns: "5",
    },
  ];

  const columns = [
    {
      name: "SI No.",
      selector: (row, index) => index + 1,
    },
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Price",
      selector: (row) => <p>${row.price}</p>,
    },
    {
      name: "Returns",
      selector: (row) => <p className="text-green-600">+{row.returns}%</p>,
    },
  ];

  return (
    <div className="space-y-4 w-full">
      <div className="w-full grid lg:grid-cols-3 gap-5 md:grid-cols-2 sm:grid-cols-1">
        <div className="bg-white rounded-2xl shadow-lg py-5 px-4 flex items-center justify-center">
          <div className="flex gap-4 items-center">
            <div className="py-4 px-4 bg-green-200 rounded-full text-green-600 text-2xl">
              <GiSwapBag />
            </div>
            <div className="space-y-1">
              <p className="text-[0.9rem] text-gray-500">
                Total Invested Amount
              </p>
              <h3 className="text-[1rem] font-semibold">$150,000</h3>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg py-5 px-4 flex items-center justify-center">
          <div className="flex gap-4 items-center">
            <div className="py-4 px-4 bg-pink-200 rounded-full text-pink-600 text-2xl">
              <LuChartPie />
            </div>
            <div className="space-y-1">
              <p className="text-[0.9rem] text-gray-500">
                Number of Investments
              </p>
              <h3 className="text-[1rem] font-semibold">1,250</h3>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl shadow-lg py-5 px-4 pr-[5rem] flex items-center justify-center md:col-span-2 lg:col-auto">
          <div className="flex gap-4 items-center">
            <div className="py-4 px-4 bg-purple-200 rounded-full text-purple-600 text-2xl">
              <FaArrowsRotate />
            </div>
            <div className="space-y-1">
              <p className="text-[0.9rem] text-gray-500">Rate of Return</p>
              <h3 className="text-[1rem] font-semibold">+5.80%</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full lg:flex md:flex gap-5 space-y-3 lg:space-y-0">
        <div className="space-y-3 flex-1">
          <h1 className="text-lg text-gray-600 font-semibold">
            Yearly Total Investment
          </h1>
          <div className="bg-white py-2 px-2 rounded-2xl shadow-lg">
            <InvestmentLinearLineChart />
          </div>
        </div>
        <div className="space-y-3 flex-1">
          <h1 className="text-lg text-gray-600 font-semibold">
            Monthly Revenue
          </h1>
          <div className="bg-white py-2 px-2 rounded-2xl shadow-lg">
            <InvestmentDefaultLineChart />
          </div>
        </div>
      </div>
      <div className="lg:flex gap-4 space-y-3 lg:space-y-0">
        <div className="space-y-3 flex-1">
          <h1 className="text-lg text-gray-600 font-semibold">My Investment</h1>
          <div className="space-y-3">
            <div className="flex bg-white py-4 px-2 gap-4 md:justify-between sm:justify-between shadow-lg rounded-2xl items-center">
              <div className="py-3 px-3 flex items-center justify-center text-pink-600 bg-pink-200 rounded-2xl text-2xl">
                <FaApple />
              </div>
              <div>
                <h3 className="text-[0.9rem] font-semibold">Apple Store</h3>
                <p className="text-[0.8rem] text-gray-600">
                  E-commerce, Marketplace
                </p>
              </div>
              <div>
                <h3 className="text-[0.9rem] font-semibold">$54,000</h3>
                <p className="text-[0.8rem] text-gray-600">Investment Value</p>
              </div>
              <div>
                <h3 className="text-[0.9rem] font-semibold text-green-600">
                  +16%
                </h3>
                <p className="text-[0.8rem] text-gray-600">Return Value</p>
              </div>
            </div>
            <div className="flex bg-white py-4 px-2 gap-4 md:justify-between sm:justify-between shadow-lg rounded-2xl items-center">
              <div className="py-3 px-3 flex items-center justify-center text-blue-600 bg-blue-200 rounded-2xl text-2xl">
                <SiSamsung />
              </div>
              <div>
                <h3 className="text-[0.9rem] font-semibold">Samsung Mobile</h3>
                <p className="text-[0.8rem] text-gray-600">
                  E-commerce, Marketplace
                </p>
              </div>
              <div>
                <h3 className="text-[0.9rem] font-semibold">$23,000</h3>
                <p className="text-[0.8rem] text-gray-600">Investment Value</p>
              </div>
              <div>
                <h3 className="text-[0.9rem] font-semibold text-green-600">
                  +11%
                </h3>
                <p className="text-[0.8rem] text-gray-600">Return Value</p>
              </div>
            </div>
            <div className="flex bg-white py-4 px-2 gap-4 md:justify-between sm:justify-between shadow-lg rounded-2xl items-center">
              <div className="py-3 px-3 flex items-center justify-center text-gray-600 bg-gray-200 rounded-2xl text-2xl">
                <SiTesla />
              </div>
              <div>
                <h3 className="text-[0.9rem] font-semibold">Tesla</h3>
                <p className="text-[0.8rem] text-gray-600">
                  E-commerce, Marketplace
                </p>
              </div>
              <div>
                <h3 className="text-[0.9rem] font-semibold">$8,200</h3>
                <p className="text-[0.8rem] text-gray-600">Investment Value</p>
              </div>
              <div>
                <h3 className="text-[0.9rem] font-semibold text-green-600">
                  +36%
                </h3>
                <p className="text-[0.8rem] text-gray-600">Return Value</p>
              </div>
            </div>
          </div>
        </div>
        <div className="space-y-3">
          <h1 className="text-lg text-gray-600 font-semibold">
            Trending Stock
          </h1>
          <div className="bg-white rounded-2xl shadow-lg p-2 lg:overflow-y-auto lg:h-[260px] hide-scroll">
            <DataTable data={data} columns={columns} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investments;
