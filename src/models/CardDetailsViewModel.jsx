import { IoIosClose } from "react-icons/io";

const CardDetailsViewModel = ({ setModel }) => {
  return (
    <div className="absolute backdrop-brightness-50 top-0 bottom-0 right-0 left-0 z-30 flex justify-center items-center px-5 overflow-auto">
      <div className="bg-white px-8 py-4 lg:w-1/2 md:1/2 w-full rounded-lg shadow-lg">
        <div className="flex justify-end">
          <button
            className="text-3xl text-red-500 font-semibold px-1 py-1 bg-red-200 rounded-sm cursor-pointer"
            onClick={() => setModel(false)}
          >
            <IoIosClose />
          </button>
        </div>
        <div className="space-y-2">
          <h1 className="text-lg text-gray-600 font-semibold">Card Details</h1>
          <p className="text-sm text-gray-500">
            Credit Card generally means a plastic card issued by Scheduled
            Commercial Banks assigned to a Cardholder, with a credit limit, that
            can be used to purchase goods and services on credit or obtain cash
            advances.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardDetailsViewModel;
