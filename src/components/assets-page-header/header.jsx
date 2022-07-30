import { BellFilled } from "@ant-design/icons";
import "./header.scss";
const AssetsPageHeader = () => {
  return (
    <div className={"assetWrapper2"}>
      <div>
        {/* <h3>Assets</h3> */}
      </div>
      <div className={"notificationIcon"}>
        <span>
          <BellFilled style={{ color: "#344767", fontSize: "20px" }} />
        </span>
      </div>
    </div>
  );
};
export default AssetsPageHeader;
