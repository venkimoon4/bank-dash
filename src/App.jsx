import { useSelector } from "react-redux";
import "./App.css";
import Layout from "./layouts/Layout.jsx";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const loginData = useSelector((store) => store.login);

  useEffect(() => {
    if (loginData !== true) {
      navigate("/login");
    }
  }, []);

  return (
    <div
      style={{ fontFamily: "Inter, sans-serif" }}
      className="h-screen w-screen bg-[#E5E5E5]"
    >
      <Layout />
    </div>
  );
}

export default App;
