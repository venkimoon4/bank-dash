import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Transactions from "./components/Transactions.jsx";
import Accounts from "./components/Accounts.jsx";
import Investments from "./components/Investments.jsx";
import CreditCards from "./components/CreditCards.jsx";
import Loans from "./components/Loans.jsx";
import Services from "./components/Services.jsx";
import MyPrivileges from "./components/MyPrivileges.jsx";
import Settings from "./components/Settings.jsx";
import { Provider } from "react-redux";
import { store } from "./redux/store/store.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "transactions",
        element: <Transactions />,
      },
      {
        path: "accounts",
        element: <Accounts />,
      },
      {
        path: "investments",
        element: <Investments />,
      },
      {
        path: "credit-cards",
        element: <CreditCards />,
      },
      {
        path: "loans",
        element: <Loans />,
      },
      {
        path: "services",
        element: <Services />,
      },

      {
        path: "my-privileges",
        element: <MyPrivileges />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
