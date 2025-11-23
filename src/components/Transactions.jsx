import { useDispatch } from "react-redux";
import { displayNameActions } from "../redux/slices/displayName";
import { useEffect, useState } from "react";
import { FcSimCardChip } from "react-icons/fc";
import { RiMastercardFill } from "react-icons/ri";
import TransactionBarChart from "../charts/TransactionBarChart";
import DataTable from "react-data-table-component";

const Transactions = () => {
  const dispatch = useDispatch();
  const [transactionTab, setTransactionTab] = useState("All Transactions");

  const columns = [
    {
      name: "SI No.",
      selector: (row, index) => index + 1,
      minWidth: "50px",
    },
    {
      name: "Transaction Id",
      selector: (row) => row.transactionId,
      minWidth: "150px",
    },
    {
      name: "Type",
      selector: (row) => row.type,
      minWidth: "100px",
    },
    {
      name: "Category",
      selector: (row) => row.category,
      minWidth: "100px",
    },
    {
      name: "Amount",
      selector: (row) =>
        row.type === "Credit" ? (
          <p className="text-green-600 font-semibold">+{row.amount}</p>
        ) : (
          <p className="text-red-600 font-semibold">-{row.amount}</p>
        ),
      minWidth: "100px",
    },
    {
      name: "Date & Time",
      selector: (row) => row.dateAndTime,
      minWidth: "180px",
    },
    {
      name: "Download",
      selector: () => (
        <div className="px-4 py-2 border-1 bg-blue-500 text-white rounded-full">
          Download
        </div>
      ),
      minWidth: "150px",
    },
  ];

  const data = [
    {
      transactionId: "TXN123456",
      type: "Credit",
      category: "Refund",
      amount: 1500.75,
      dateAndTime: "2025-05-13 10:30 AM",
    },
    {
      transactionId: "TXN123457",
      type: "Debit",
      category: "Purchase",
      amount: 320.0,
      dateAndTime: "2025-05-12 04:15 PM",
    },
    {
      transactionId: "TXN123458",
      type: "Credit",
      category: "Salary",
      amount: 50000.0,
      dateAndTime: "2025-05-10 09:00 AM",
    },
    {
      transactionId: "TXN123459",
      type: "Debit",
      category: "Bills",
      amount: 2200.4,
      dateAndTime: "2025-05-09 06:45 PM",
    },
    {
      transactionId: "TXN123460",
      type: "Debit",
      category: "Subscription",
      amount: 299.99,
      dateAndTime: "2025-05-08 08:00 AM",
    },
  ];

  const income = [
    {
      transactionId: "TXN123456",
      type: "Credit",
      category: "Refund",
      amount: 1500.75,
      dateAndTime: "2025-05-13 10:30 AM",
    },
    {
      transactionId: "TXN123457",
      type: "Credit",
      category: "Purchase",
      amount: 320.0,
      dateAndTime: "2025-05-12 04:15 PM",
    },
    {
      transactionId: "TXN123458",
      type: "Credit",
      category: "Salary",
      amount: 50000.0,
      dateAndTime: "2025-05-10 09:00 AM",
    },
    {
      transactionId: "TXN123459",
      type: "Credit",
      category: "Bills",
      amount: 2200.4,
      dateAndTime: "2025-05-09 06:45 PM",
    },
    {
      transactionId: "TXN123460",
      type: "Credit",
      category: "Subscription",
      amount: 299.99,
      dateAndTime: "2025-05-08 08:00 AM",
    },
  ];

  const expense = [
    {
      transactionId: "TXN123456",
      type: "Debit",
      category: "Refund",
      amount: 1500.75,
      dateAndTime: "2025-05-13 10:30 AM",
    },
    {
      transactionId: "TXN123457",
      type: "Debit",
      category: "Purchase",
      amount: 320.0,
      dateAndTime: "2025-05-12 04:15 PM",
    },
    {
      transactionId: "TXN123458",
      type: "Debit",
      category: "Salary",
      amount: 50000.0,
      dateAndTime: "2025-05-10 09:00 AM",
    },
    {
      transactionId: "TXN123459",
      type: "Debit",
      category: "Bills",
      amount: 2200.4,
      dateAndTime: "2025-05-09 06:45 PM",
    },
    {
      transactionId: "TXN123460",
      type: "Debit",
      category: "Subscription",
      amount: 299.99,
      dateAndTime: "2025-05-08 08:00 AM",
    },
  ];

  const customStyles = {
    table: {
      style: {
        width: "100%",
      },
    },
    headRow: {
      style: {
        fontWeight: "bold",
        fontSize: "0.9rem",
      },
    },
    cells: {
      style: {
        padding: "12px 16px 12px 16px",
      },
    },
    rows: {
      style: {
        fontSize: "0.8rem",
        fontWeight: "lighter",
      },
    },
  };

  useEffect(() => {
    dispatch(displayNameActions.updateDisplayName("Transactions"));
  }, []);

  return (
    <div className="w-full h-full space-y-6">
      <div className="w-full flex lg:flex-row flex-col gap-8 h-auto">
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
        <div className="space-y-2 lg:w-1/2 w-full">
          <h1 className="text-lg text-gray-700 font-semibold">My Expense</h1>
          <div className="w-full bg-white px-2 py-2 rounded-2xl shadow-2xl ">
            <TransactionBarChart />
          </div>
        </div>
      </div>
      <div className="w-full space-y-4">
        <h1 className="text-lg text-gray-700 font-semibold">
          Recent Transactions
        </h1>
        <div className="w-full flex gap-10 items-center justify-between lg:px-20  overflow-x-auto px-1">
          <p
            className={`text-md text-gray-700 font-semibold cursor-pointer ${
              transactionTab === "All Transactions" &&
              "border-b-2 border-b-blue-600 text-blue-600"
            }`}
            onClick={() => setTransactionTab("All Transactions")}
          >
            All Transactions
          </p>
          <p
            className={`text-md text-gray-700 font-semibold cursor-pointer ${
              transactionTab === "Income" &&
              "border-b-2 border-b-blue-600 text-blue-600"
            }`}
            onClick={() => setTransactionTab("Income")}
          >
            Income
          </p>
          <p
            className={`text-md text-gray-700 font-semibold cursor-pointer ${
              transactionTab === "Expense" &&
              "border-b-2 border-b-blue-600 text-blue-600"
            }`}
            onClick={() => setTransactionTab("Expense")}
          >
            Expense
          </p>
        </div>
      </div>
      <div className="w-full overflow-auto py-2 px-2 rounded-tr-2xl rounded-tl-2xl">
        <DataTable
          data={
            transactionTab === "All Transactions"
              ? data
              : transactionTab === "Income"
              ? income
              : transactionTab === "Expense"
              ? expense
              : []
          }
          columns={columns}
          customStyles={customStyles}
          pagination
          highlightOnHover
          pointerOnHover
        />
      </div>
    </div>
  );
};

export default Transactions;
