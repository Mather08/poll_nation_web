// import Dashboard from "components/sidebar/dashboard";
// import DashboardBox from "components/asset-components/dashboard/dashboard";
import Login from "pages/Login";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Assets from "../pages/assets-dashboard/asset";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/assets" element={<Assets />} />
        {/* <Route path="/dashboard" element={<DashboardBox />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
