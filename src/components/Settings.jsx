import { useDispatch } from "react-redux";
import { displayNameActions } from "../redux/slices/displayName";
import { useEffect, useState } from "react";
import { MdEdit } from "react-icons/md";
import NormalSelect from "../ui-components/NormalSelect";
import SwitchComponent from "../ui-components/Switch";

const Settings = () => {
  const [select, setSelect] = useState("Edit Profile");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayNameActions.updateDisplayName("Settings"));
  }, []);

  return (
    <div className="w-full bg-white rounded-2xl shadow-lg">
      <div className="pt-5 w-full">
        <div className="w-full flex gap-10 pb-1 px-10 text-gray-700 text-md overflow-x-auto hide-scroll">
          <div
            onClick={() => setSelect("Edit Profile")}
            className={`${
              select === "Edit Profile" &&
              "text-blue-600 border-b-[0.2rem] border-blue-600"
            } cursor-pointer min-w-[5.2rem]`}
          >
            Edit Profile
          </div>
          <div
            onClick={() => setSelect("Preferences")}
            className={`${
              select === "Preferences" &&
              "text-blue-500 border-b-[0.2rem] border-blue-600"
            } cursor-pointer`}
          >
            Preferences
          </div>
          <div
            onClick={() => setSelect("Security")}
            className={`${
              select === "Security" &&
              "text-blue-500 border-b-[0.2rem] border-blue-600"
            } cursor-pointer`}
          >
            Security
          </div>
        </div>
        <hr className="border border-gray-400 lg:mx-8 mx-5" />
        {select === "Edit Profile" ? (
          <div className="w-full pt-5 py-4 lg:px-8 px-5">
            <div className="lg:flex items-start gap-10 w-full space-y-4 lg:space-y-4">
              <div className="relative w-[10rem]">
                <img
                  src="https://biographymask.com/wp-content/uploads/2022/11/Ryan-Gosling.jpg"
                  width="150px"
                  height="150px"
                  className="rounded-full"
                />
                <div className="text-2xl text-white p-2 bg-blue-500 rounded-full absolute right-0 top-24">
                  <MdEdit />
                </div>
              </div>
              <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 flex-1">
                <div className="space-y-1">
                  <label className="text-[0.9rem] text-gray-600 block">
                    Your Name
                  </label>
                  <input
                    placeholder="Charlene Reed"
                    className="outline-none p-2 border-[0.1rem] border-gray-300 rounded-lg placeholder:text-[0.8rem] w-full"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[0.9rem] text-gray-600 block">
                    User Name
                  </label>
                  <input
                    placeholder="Charlene Reed"
                    className="outline-none p-2 border-[0.1rem] border-gray-300 rounded-lg placeholder:text-[0.8rem] w-full"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[0.9rem] text-gray-600 block">
                    Email
                  </label>
                  <input
                    placeholder="charlenereed@gmail.com"
                    className="outline-none p-2 border-[0.1rem] border-gray-300 rounded-lg placeholder:text-[0.8rem] w-full"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[0.9rem] text-gray-600 block">
                    Password
                  </label>
                  <input
                    placeholder="**********"
                    className="outline-none p-2 border-[0.1rem] border-gray-300 rounded-lg placeholder:text-[0.8rem] w-full"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[0.9rem] text-gray-600 block">
                    Date of Birth
                  </label>
                  <NormalSelect
                    label={"Date of Birth"}
                    placeholder={"Select Date of Birth"}
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
                <div className="space-y-1">
                  <label className="text-[0.9rem] text-gray-600 block">
                    Present Address
                  </label>
                  <input
                    placeholder="San Jose, California, USA"
                    className="outline-none p-2 border-[0.1rem] border-gray-300 rounded-lg placeholder:text-[0.8rem] w-full"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[0.9rem] text-gray-600 block">
                    Permanent Address
                  </label>
                  <input
                    placeholder="San Jose, California, USA"
                    className="outline-none p-2 border-[0.1rem] border-gray-300 rounded-lg placeholder:text-[0.8rem] w-full"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[0.9rem] text-gray-600 block">
                    City
                  </label>
                  <input
                    placeholder="San Jose"
                    className="outline-none p-2 border-[0.1rem] border-gray-300 rounded-lg placeholder:text-[0.8rem] w-full"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[0.9rem] text-gray-600 block">
                    Postal Code
                  </label>
                  <input
                    placeholder="45962"
                    className="outline-none p-2 border-[0.1rem] border-gray-300 rounded-lg placeholder:text-[0.8rem] w-full"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[0.9rem] text-gray-600 block">
                    Country
                  </label>
                  <input
                    placeholder="USA"
                    className="outline-none p-2 border-[0.1rem] border-gray-300 rounded-lg placeholder:text-[0.8rem] w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full justify-end p-4">
              <button className="bg-blue-600 text-white text-[0.8rem] py-2 px-8 rounded-lg">
                Save
              </button>
            </div>
          </div>
        ) : select === "Preferences" ? (
          <div className="pt-5 py-4 lg:px-10 px-5 space-y-5">
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 w-full ">
              <div className="space-y-1">
                <label className="text-[0.9rem] text-gray-600 block">
                  Currency
                </label>
                <input
                  placeholder="USD"
                  className="outline-none p-2 border-[0.1rem] border-gray-300 rounded-lg placeholder:text-[0.8rem] w-full"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[0.9rem] text-gray-600 block">
                  Time Zone
                </label>
                <input
                  placeholder="(GMT-12:00) International Date Line West"
                  className="outline-none p-2 border-[0.1rem] border-gray-300 rounded-lg placeholder:text-[0.8rem] w-full"
                />
              </div>
            </div>
            <div className="space-y-5">
              <h1 className="text-[1rem] text-gray-500 font-semibold">
                Notifications
              </h1>
              <div className="space-y-5">
                <div className="flex gap-5 items-center">
                  <span>
                    <SwitchComponent />
                  </span>
                  <p className="text-md">I send or receive digital currency</p>
                </div>
                <div className="flex gap-5 items-center">
                  <span>
                    <SwitchComponent checked={true} />
                  </span>
                  <p className="text-md">I receive merchant order</p>
                </div>
                <div className="flex gap-5 items-center">
                  <span>
                    <SwitchComponent />
                  </span>
                  <p className="text-md">
                    There are recommendation for my account
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-full justify-end p-4">
              <button className="bg-blue-600 text-white text-[0.8rem] py-2 px-8 rounded-lg">
                Save
              </button>
            </div>
          </div>
        ) : (
          <div className="w-full pt-5 py-4 lg:px-8 px-5 space-y-5">
            <div className="space-y-2">
              <h1 className="text-[1rem] text-gray-500 font-semibold">
                Two-factor Authentication
              </h1>
              <div className="flex gap-5 items-center">
                <span>
                  <SwitchComponent />
                </span>
                <p className="text-md">
                  Enable or disable two factor authentication
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <h1 className="text-[1rem] text-gray-500 font-semibold">
                Change Password
              </h1>
              <div className="space-y-3">
                <div className="space-y-1 lg:w-1/2">
                  <label className="text-[0.9rem] text-gray-600 block">
                    Current Password
                  </label>
                  <input
                    placeholder="**********"
                    className="outline-none p-2 border-[0.1rem] border-gray-300 rounded-lg placeholder:text-[0.8rem] w-full"
                  />
                </div>
                <div className="space-y-1 lg:w-1/2">
                  <label className="text-[0.9rem] text-gray-600 block">
                    New Password
                  </label>
                  <input
                    placeholder="**********"
                    className="outline-none p-2 border-[0.1rem] border-gray-300 rounded-lg placeholder:text-[0.8rem] w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex w-full justify-end p-4">
              <button className="bg-blue-600 text-white text-[0.8rem] py-2 px-8 rounded-lg">
                Save
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Settings;
