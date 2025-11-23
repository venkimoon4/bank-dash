import { useDispatch } from "react-redux";
import { displayNameActions } from "../redux/slices/displayName";
import { useEffect } from "react";

const MyPrivileges = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayNameActions.updateDisplayName("My Privileges"));
  }, []);
  return (
    <div className="bg-white w-full flex flex-col gap-5 items-center justify-center pb-96 h-[40rem] text-center">
      <h1 className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-extrabold lg:text-4xl text-2xl">
        My Privileges
      </h1>
      <p>Coming soon..........</p>
    </div>
  );
};

export default MyPrivileges;
