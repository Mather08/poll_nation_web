import AssetInfo from "../../components/asset-components/asset";
import AssetsPageHeader from "../../components/assets-page-header/header";
import Dashboard from "../../components/sidebar/dashboard";
import "./Assets.scss";
import { useState } from "react";
import DashboardBox from "../../components/asset-components/dashboard/dashboard";
import MyPage from "../../components/asset-components/my-page/myPage";
import Preview from "../../components/asset-components/preview/preview";
import ProfileDetails from "../../components/asset-components/profile/profile";
import Upload from "../../components/asset-components/upload/upload";
import Voter from "../../components/asset-components/categories/categories";
import Active from "../../components/asset-components/activePoll/active";
import AssetComponentFooter from "../../components/footers/asset-component-footer/footer";
import Archived from "../../components/asset-components/archivedPoll/archived";
import Future from "../../components/asset-components/futurePoll/future";
import Cohorts from "../../components/asset-components/cohorts/cohorts";
import DashboardOfficer from "components/asset-components/dashboardOfficer/dashboard";
export default function Assets() {
  const [currTab, setcurrTab] = useState("Assets");
  console.log("currTab", currTab);
  return (
    <div className={"assetWrapper3"}>
      <div className={"sidebar"}>
        <Dashboard currTab={currTab} setcurrTab={setcurrTab} />
      </div>

      <div className={"sidebarPages"}>
        <AssetsPageHeader />
        {currTab === "Dashboard" ? (
          <DashboardBox />
        ) : currTab === "DashboardOfficer" ? (
          <DashboardOfficer />
        ) : currTab === "Assets" ? (
          <AssetInfo />
        ) : currTab === "Cohorts" ? (
          <Cohorts />
        ) : currTab === "My Page" ? (
          <MyPage />
        ) : currTab === "Preview" ? (
          <Preview />
        ) : currTab === "Profile" ? (
          <ProfileDetails />
        ) : currTab === "Upload" ? (
          <Upload />
        ) : currTab === "Voters" ? (
          <Voter />
        ) : currTab === "Active" ? (
          <Active />
        ) : currTab === "Archived" ? (
          <Archived />
        ) : currTab === "Future" ? (
          <Future />
        ) : null}
        <AssetComponentFooter />
      </div>
    </div>
  );
}
