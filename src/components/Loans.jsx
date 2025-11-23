import { useDispatch } from "react-redux";
import { displayNameActions } from "../redux/slices/displayName";
import { useEffect } from "react";
import { GoPersonFill } from "react-icons/go";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { FaChartColumn } from "react-icons/fa6";
import { HiWrenchScrewdriver } from "react-icons/hi2";
import DataTable from "react-data-table-component";

const Loans = () => {
  const dispatch = useDispatch();

  const columns = [
    {
      name: "SL No",
      selector: (row, index) => index + 1,
      minWidth: "100px",
    },
    {
      name: "Loan Money",
      selector: (row, index) => <p>${row.loanAmount}</p>,
      minWidth: "130px",
    },
    {
      name: "Left to repay",
      selector: (row, index) => <p>${row.repayAmount}</p>,
      minWidth: "140px",
    },
    {
      name: "Duration",
      selector: (row, index) => <p>{row.duration}</p>,
      minWidth: "100px",
    },
    {
      name: "Interest rate",
      selector: (row, index) => <p>{row.interestRate}%</p>,
      minWidth: "130px",
    },
    {
      name: "Installment",
      selector: (row, index) => <p>${row.installmentAmt} / month</p>,
      minWidth: "130px",
    },
    {
      name: "Repay",
      selector: (row, index) => (
        <div className="py-1 px-8 border text-sm border-blue-500 rounded-2xl cursor-pointer">
          Repay
        </div>
      ),
      minWidth: "150px",
    },
  ];

  const data = [
    {
      loanAmount: 100,
      repayAmount: 200,
      duration: "12 Months",
      interestRate: 1,
      installmentAmt: 2000,
    },
    {
      loanAmount: 1000,
      repayAmount: 2000,
      duration: "13 Months",
      interestRate: 1,
      installmentAmt: 2000,
    },
    {
      loanAmount: 1450,
      repayAmount: 2000,
      duration: "2 Months",
      interestRate: 1,
      installmentAmt: 2000,
    },
    {
      loanAmount: 1220,
      repayAmount: 3200,
      duration: "22 Months",
      interestRate: 1,
      installmentAmt: 2000,
    },
    {
      loanAmount: 9000,
      repayAmount: 10000,
      duration: "1 Months",
      interestRate: 1,
      installmentAmt: 2000,
    },
    {
      loanAmount: 400,
      repayAmount: 400,
      duration: "12 Months",
      interestRate: 1,
      installmentAmt: 2000,
    },
    {
      loanAmount: 400,
      repayAmount: 400,
      duration: "6 Months",
      interestRate: 1,
      installmentAmt: 2000,
    },
  ];

  const customStyles = {
    headRow: {
      style: {
        fontSize: "0.8rem",
        fontWeight: "bold",
      },
    },
  };

  useEffect(() => {
    dispatch(displayNameActions.updateDisplayName("Loans"));
  }, []);
  return (
    <div className="w-full space-y-3">
      <div className="grid lg:grid-cols-4 gap-5 md:grid-cols-3 sm:grid-cols-2">
        <div className="flex bg-white py-5 px-2 rounded-2xl shadow-lg items-center justify-center gap-5">
          <div className="text-2xl py-3 px-3 rounded-full bg-blue-200 text-blue-500">
            <GoPersonFill />
          </div>
          <div className="space-y-1">
            <p className="text-[0.8rem] text-gray-500">Personal Loans</p>
            <h3 className="text-[1rem] text-gray-800 font-semibold">$50,000</h3>
          </div>
        </div>
        <div className="flex bg-white py-5 px-2 rounded-2xl shadow-lg items-center justify-center gap-5">
          <div className="text-2xl py-3 px-3 rounded-full bg-yellow-200 text-yellow-500">
            <HiOutlineBuildingOffice2 />
          </div>
          <div className="space-y-1">
            <p className="text-[0.8rem] text-gray-500">Corporate Loans</p>
            <h3 className="text-[1rem] text-gray-800 font-semibold">
              $100,000
            </h3>
          </div>
        </div>
        <div className="flex bg-white py-5 px-2 rounded-2xl shadow-lg items-center justify-center gap-5">
          <div className="text-2xl py-3 px-3 rounded-full bg-blue-200 text-blue-500">
            <FaChartColumn />
          </div>
          <div className="space-y-1">
            <p className="text-[0.8rem] text-gray-500">Business Loans</p>
            <h3 className="text-[1rem] text-gray-800 font-semibold">
              $500,000
            </h3>
          </div>
        </div>
        <div className="flex bg-white py-5 px-2 rounded-2xl shadow-lg items-center justify-center gap-5 md:col-span-3 lg:col-auto pl-6 lg:pl-0">
          <div className="text-2xl py-3 px-3 rounded-full bg-green-200 text-green-500">
            <HiWrenchScrewdriver />
          </div>
          <div className="space-y-1">
            <p className="text-[0.8rem] text-gray-500">Custom Loans</p>
            <h3 className="text-[1rem] text-gray-800 font-semibold">
              Choose Money
            </h3>
          </div>
        </div>
      </div>

      <div className="w-full space-y-3">
        <h1 className="text-lg text-gray-700 font-semibold">
          Active Loans Overview
        </h1>
        <div className="w-full bg-white overflow-x-scroll rounded-2xl shadow-lg space-y-4">
          <DataTable
            data={data}
            columns={columns}
            customStyles={customStyles}
          />
        </div>
      </div>
    </div>
  );
};

export default Loans;
