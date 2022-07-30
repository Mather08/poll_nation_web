import { Avatar, Menu } from "antd";
import "./dashboard.scss";
import ProfilePic from "../../assets/images/Emmawatson.webp";
import {
  SettingOutlined,
  CloudUploadOutlined,
  SaveOutlined,
  AppstoreOutlined,
  CheckOutlined,
  BarChartOutlined,
  ContainerOutlined,
} from "@ant-design/icons";

const { SubMenu } = Menu;
const Dashboard = ({ currTab, setcurrTab }) => {
  const handleChange = (e) => {
    setcurrTab(e.target.innerText);
  };
  return (
    <div className={"wrapper"}>
      <div className={"header"}>
        <div className={"title"}>
          POLL <span className={"subtitle"}>NATION</span>
        </div>
      </div>
      <span className={"divider"}></span>
      <Menu className={"sidebarMenuList"} mode="inline">
        <SubMenu
          className={"subMenuList"}
          title={
            <div className={"userTitle"}>
              <Avatar src={ProfilePic} />
              <span className={"userName"}>Emma Watson</span>
            </div>
          }
        >
          <Menu.Item
            onClick={() => setcurrTab("Profile")}
            className={"subMenuItem"}
            style={{
              background: "#202022",
              margin: "0",
              width: "100%",
              color: "white",
            }}
          >
            Profile
          </Menu.Item>
          <Menu.Item
            onClick={() => setcurrTab("Logout")}
            style={{
              background: "#202022",
              margin: "0",
              width: "100%",
              color: "white",
            }}
            className={"subMenuItem"}
          >
            Logout
          </Menu.Item>
        </SubMenu>
      </Menu>
      <span className={"divider"}></span>
      <Menu className={"sidebarMenuList"} style={{ margin: "20px" }}>
        <Menu.Item
          className={"sidebarMenuItem"}
          onClick={() => setcurrTab("Dashboard")}
          icon={<AppstoreOutlined />}
        >
          Dashboard
        </Menu.Item>
        <Menu.Item
          className={"sidebarMenuItem"}
          onClick={() => setcurrTab("DashboardOfficer")}
          icon={<AppstoreOutlined />}
        >
          Dashboard Officer
        </Menu.Item>
        <Menu.Item
          onClick={() => setcurrTab("Assets")}
          className={"sidebarMenuItem"}
          icon={<SettingOutlined />}
        >
          Members
        </Menu.Item>
        <Menu.Item
          onClick={() => setcurrTab("Cohorts")}
          className={"sidebarMenuItem"}
          icon={<SettingOutlined />}
        >
          Cohorts
        </Menu.Item>
      </Menu>
      <Menu className={"sidebarMenuList2"} mode="inline">
        <SubMenu
          className={"subMenuList2"}
          title={
            <div className={"userTitle2"}>
              <BarChartOutlined />
              <span className={"userName2"}>Polls</span>
            </div>
          }
        >
          <Menu.Item
            onClick={() => setcurrTab("Active")}
            className={"subMenuItem2"}
            style={{
              background: "#202022",
              margin: "0",
              width: "100%",
              color: "white",
            }}
          >
            Active
          </Menu.Item>
          <Menu.Item
            onClick={() => setcurrTab("Future")}
            style={{
              background: "#202022",
              margin: "0",
              width: "100%",
              color: "white",
            }}
            className={"subMenuItem2"}
          >
            Future
          </Menu.Item>
          <Menu.Item
            onClick={() => setcurrTab("Archived")}
            style={{
              background: "#202022",
              margin: "0",
              width: "100%",
              color: "white",
            }}
            className={"subMenuItem2"}
          >
            Archived
          </Menu.Item>
        </SubMenu>
      </Menu>
      <span className={"divider"}></span>

      <Menu className={"sidebarMenuList"} style={{ margin: "20px" }}>
        <Menu.Item
          onClick={() => setcurrTab("Upload")}
          className={`sidebarMenuItem`}
          icon={<CloudUploadOutlined />}
        >
          Tags
        </Menu.Item>
        <Menu.Item
          onClick={() => setcurrTab("Voters")}
          className={"sidebarMenuItem"}
          icon={<CheckOutlined />}
        >
          Categories
        </Menu.Item>
        <Menu.Item
          onClick={() => setcurrTab("My Page")}
          className={"sidebarMenuItem"}
          icon={<SaveOutlined />}
          // icon={<MenuOutlined />}
        >
          New Polls
        </Menu.Item>
        <Menu.Item
          onClick={() => setcurrTab("Preview")}
          className={"sidebarMenuItem"}
          icon={<ContainerOutlined />}
        >
          Organization
        </Menu.Item>
      </Menu>
    </div>
  );
};
export default Dashboard;
