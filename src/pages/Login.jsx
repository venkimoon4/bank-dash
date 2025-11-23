import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginActions } from "../redux/slices/login";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loginData = useSelector((store) => store.login);

  const handleLogin = () => {
    if (loginData !== true) {
      dispatch(LoginActions.updateLoginStatus(true));
      toast.success("Login Successful");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
  };

  return (
    <div
      style={{ fontFamily: "Inter, sans-serif" }}
      className="h-screen w-screen bg-[#E5E5E5] flex justify-center items-center px-4 lg:px-0"
    >
      <Toaster position="top-right"></Toaster>
      <div className="bg-white lg:w-1/3 px-4 py-8 space-y-4 shadow-lg rounded-sm">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold">Back to your digital life</h1>
          <p className="text-md text-gray-500">
            Choose one of the option to go
          </p>
        </div>

        <div className="space-y-4">
          <input
            className="border-[0.1rem] border-gray-300 rounded-lg p-3 outline-none w-full placeholder:text-[0.8rem] focus:border-blue-400 min-w-[19rem]"
            placeholder="Enter your mail address here.."
            type="email"
          />
          <input
            className="border-[0.1rem] border-gray-300 rounded-lg p-3 outline-none w-full placeholder:text-[0.8rem] focus:border-blue-400 min-w-[19rem]"
            placeholder="Password"
            type="password"
          />
        </div>

        <p className="text-sm text-gray-500">Or continue with</p>

        <div className="flex w-full justify-between">
          <div className="py-2 px-8 bg-gray-50 rounded-md shadow-md flex items-center justify-center cursor-pointer">
            <img
              src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-1024.png"
              width="30px"
              height="30px"
            />
          </div>
          <div className="py-2 px-8 bg-gray-50 rounded-md shadow-md flex items-center justify-center cursor-pointer">
            <img
              src="https://pngimg.com/d/meta_PNG5.png"
              width="30px"
              height="30px"
            />
          </div>
          <div className="py-2 px-8 bg-gray-50 rounded-md shadow-md flex items-center justify-center cursor-pointer">
            <img
              src="https://www.pngmart.com/files/10/Black-Apple-Logo-PNG-Photos.png"
              width="30px"
              height="30px"
            />
          </div>
        </div>
        <div className="text-center w-full px-8 mt-10">
          <button
            className="w-full py-3 text-sm bg-blue-500 text-white rounded-md cursor-pointer"
            onClick={handleLogin}
          >
            Log in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
