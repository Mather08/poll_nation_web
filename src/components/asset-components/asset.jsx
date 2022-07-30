// import { useState } from "react";
// import { CaretDownOutlined, SearchOutlined } from "@ant-design/icons";
import {  Select, Divider } from "antd";
import "./asset.scss";
// import { StarFilled } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faMagnifyingGlass,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
const AssetInfo = () => {
  const { Option } = Select;

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    // <div className={"assetWrapper1"}>
    //   <div className={"assetInnerWrapper"}>
    //     <div className={"buttonWrapper"}>
    //        <div className={"newAssetWrapper"}>
    //         <Button>New Asset</Button>
    //       </div>
    //       <div className={"otherAssetWrapper"}>
    //         <Menu mode="horizontal" className={"menuList"}>
    //           <Menu.Item className={"menuItem"}>MISC</Menu.Item>
    //           <Menu.Item className={"menuItem"}>ALL</Menu.Item>
    //           <Menu.Item className={"menuItem"}>VIDEO</Menu.Item>
    //           <Menu.Item className={"menuItem"}>DOC</Menu.Item>
    //           <Menu.Item className={"menuItem"}>AUDIO</Menu.Item>
    //         </Menu>

    //         {/* <button>MISC</button>
    //         <button>ALL</button>
    //         <button>VIDEO</button>
    //         <button>DOC</button>
    //         <button>AUDIO</button> */}
    //       </div>
    //     </div>
    //     <div className={"assetSearchWrapper"}>
    //       <div className={"searchWrapper"}>
    //         <button>
    //           <span>Sort </span>
    //           <CaretDownOutlined
    //             style={{ color: "#27272a", fontSize: "15px", padding: "0 2px" }}
    //           />
    //         </button>
    //         <div className={"searchInputWrapper"}>
    //           {" "}
    //           <input type="text" placeholder="Search" />
    //           <SearchOutlined
    //             style={{
    //               color: "#27272a",
    //               fontSize: "15px",
    //             }}
    //           />
    //         </div>
    //       </div>

    //     </div>

    //     <div className={"assetMusicWrapper"}>
    //       <div className={"titleinfoWrapper"}>
    //         <div className={"titleIcon"}>
    //           {/* <i className="fa-solid fa-music" /> */}
    //           <div className={"musicIconWrapper"}>
    //             <FontAwesomeIcon
    //               icon={faMusic}
    //               style={{ fontSize: "100px", color: "white" }}
    //             />
    //           </div>
    //         </div>
    //         <div className={"assetInnerWrapper"}>
    //           {/* <div className={assetinfo.titleIcon}>hello</div> */}
    //           <span className={"title"}>TITLE</span>
    //           <span className={"assetinformation"}>Asset Info</span>
    //           <div className={"assetInfoBtnWrapper"}>
    //             <StarFilled /> <button>AUDIO</button>
    //           </div>
    //         </div>
    //       </div>
    //       <div className={"titleinfoWrapper"}>
    //         <div className={"titleIcon"}>
    //           {/* <i className="fa-solid fa-music" /> */}
    //           <div className={"musicIconWrapper"}>
    //             <FontAwesomeIcon
    //               icon={faVideoCamera}
    //               style={{ fontSize: "100px", color: "white" }}
    //             />
    //           </div>
    //         </div>
    //         <div className={"assetInnerWrapper"}>
    //           <span className={"title"}>TITLE</span>
    //           <span className={"assetinformation"}>Asset Info</span>
    //           <div className={"assetInfoBtnWrapper"}>
    //             <StarFilled /> <button>VIDEO</button>
    //           </div>
    //         </div>
    //       </div>
    //       <div className={"titleinfoWrapper"}>
    //         <div className={"titleIcon"}>
    //           {/* <i className="fa-solid fa-music" /> */}
    //           <div className={"musicIconWrapper"}>
    //             <FontAwesomeIcon
    //               icon={faList}
    //               style={{ fontSize: "100px", color: "white" }}
    //             />
    //           </div>
    //         </div>{" "}
    //         <div className={"assetInnerWrapper"}>
    //           <span className={"title"}>TITLE</span>
    //           <span className={"assetinformation"}>Asset Info</span>
    //           <div className={"assetInfoBtnWrapper"}>
    //             <StarFilled /> <button>DOC</button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className={"assetWrapperFooter"}>
    //     <span>LOAD MORE ...</span>
    //   </div>
    // </div>

    <>
      <h3>
        <b>Members</b>
      </h3>
      <div className={"cohortsWrapper"}>
        <div className={"InnerWrapper"}>
          <div className="row">
            <div className="col-lg-6">
              {/* <Button
                style={{
                  borderRadius: "15px",
                  color: "#FFF",
                  fontWeight: 700,
                  backgroundColor: "black",
                }}
              >
                Add Members
              </Button> */}
              <Select
                defaultValue="add_member"
                style={{
                  width: 150,
                  borderRadius: "15px",
                }}
                onChange={handleChange}
              >
                <Option value="add_member">Add Member</Option>
                <Option value="upload_csv">Upload CSV</Option>
              </Select>
            </div>
            <div className="col-lg-6">
              <div className={"searchWrapper"}>
                <div>
                  <input type="text" placeholder="Search" />
                  <span>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      style={{ fontSize: "15px", color: "#27272a" }}
                    />
                  </span>
                 
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <div className={"cohortsListWrapper"}>
            <div className={"cohortsList"}>
              <div className={"cohortsListWrapper"}>
                <div className={"cohortsAvatar"}>
                  {" "}
                  <div
                    style={{
                      borderRadius: "8px",
                      backgroundColor: "orange",
                      height: "80px",
                      width: "80px",
                    }}
                    className="text-center"
                  >
                    <h4
                      style={{
                        paddingTop: "10px",
                        color: "white",
                        fontSize: "50px",
                      }}
                    >
                      <b> </b>
                    </h4>
                  </div>
                </div>
                <div className={"cohortsDetail"}>
                  <span className={"label"}>JOHN LEE</span>
                  <span className={"hideBtn"}>
                    <button>SHOW</button>
                  </span>
                  {/* <span className={"hideBtn2"}>SRC 2022 Election</span> */}
                  <br />
                  <span className={"Btn1"}>
                    <FontAwesomeIcon
                      icon={faEdit}
                      style={{ fontSize: "15px", color: "#27272a" }}
                    />
                  </span>
                  <span className={"Btn2"}>
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{ fontSize: "15px", color: "#27272a" }}
                    />
                  </span>
                </div>
              </div>
              <div className={"cohortsListWrapper"}>
                <div className={"cohortsAvatar"}>
                  <div
                    style={{
                      borderRadius: "8px",
                      backgroundColor: "orange",
                      height: "80px",
                      width: "80px",
                    }}
                    className="text-center"
                  >
                    <h4
                      style={{
                        paddingTop: "10px",
                        color: "white",
                        fontSize: "50px",
                      }}
                    >
                      <b> </b>
                    </h4>
                  </div>
                </div>
                <div className={"cohortsDetail"}>
                  <span className={"label"}>JOE DEE</span>
                  <span className={"hideBtn"}>
                    <button>SHOW</button>
                  </span>
                  {/* <span className={"hideBtn2"}>SRC 2022 Election</span> */}
                  <br />
                  <span className={"Btn1"}>
                    <FontAwesomeIcon
                      icon={faEdit}
                      style={{ fontSize: "15px", color: "#27272a" }}
                    />
                  </span>
                  <span className={"Btn2"}>
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{ fontSize: "15px", color: "#27272a" }}
                    />
                  </span>
                </div>
              </div>
              <div className={"cohortsListWrapper"}>
                <div className={"cohortsAvatar"}>
                  <div
                    style={{
                      borderRadius: "8px",
                      backgroundColor: "orange",
                      height: "80px",
                      width: "80px",
                    }}
                    className="text-center"
                  >
                    <h4
                      style={{
                        paddingTop: "10px",
                        color: "white",
                        fontSize: "50px",
                      }}
                    >
                      <b> </b>
                    </h4>
                  </div>
                </div>
                <div className={"cohortsDetail"}>
                  <span className={"label"}>MARY SUN</span>
                  <span className={"hideBtn"}>
                    <button>SHOW</button>
                  </span>
                  {/* <span className={"hideBtn2"}>SRC 2022 Election</span> */}
                  <br />
                  <span className={"Btn1"}>
                    <FontAwesomeIcon
                      icon={faEdit}
                      style={{ fontSize: "15px", color: "#27272a" }}
                    />
                  </span>
                  <span className={"Btn2"}>
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{ fontSize: "15px", color: "#27272a" }}
                    />
                  </span>
                </div>
              </div>
            </div>

            {/* ******************* */}
            <div className={"cohortsList"}>
              <div className={"cohortsListWrapper"}>
                <div className={"cohortsAvatar"}>
                  <div
                    style={{
                      borderRadius: "8px",
                      backgroundColor: "orange",
                      height: "80px",
                      width: "80px",
                    }}
                    className="text-center"
                  >
                    <h4
                      style={{
                        paddingTop: "10px",
                        color: "white",
                        fontSize: "50px",
                      }}
                    >
                      <b> </b>
                    </h4>
                  </div>
                </div>
                <div className={"cohortsDetail"}>
                  <span className={"label"}>JOHN LEE</span>
                  <span className={"hideBtn"}>
                    <button>SHOW</button>
                  </span>
                  {/* <span className={"hideBtn2"}>SRC 2022 Election</span> */}
                  <br />
                  <span className={"Btn1"}>
                    <FontAwesomeIcon
                      icon={faEdit}
                      style={{ fontSize: "15px", color: "#27272a" }}
                    />
                  </span>
                  <span className={"Btn2"}>
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{ fontSize: "15px", color: "#27272a" }}
                    />
                  </span>
                </div>
              </div>
              <div className={"cohortsListWrapper"}>
                <div className={"cohortsAvatar"}>
                  <div
                    style={{
                      borderRadius: "8px",
                      backgroundColor: "orange",
                      height: "80px",
                      width: "80px",
                    }}
                    className="text-center"
                  >
                    <h4
                      style={{
                        paddingTop: "10px",
                        color: "white",
                        fontSize: "50px",
                      }}
                    >
                      <b> </b>
                    </h4>
                  </div>
                </div>
                <div className={"cohortsDetail"}>
                  <span className={"label"}>JOE DEE</span>
                  <span className={"hideBtn"}>
                    <button>SHOW</button>
                  </span>
                  {/* <span className={"hideBtn2"}>SRC 2022 Election</span> */}
                  <br />
                  <span className={"Btn1"}>
                    <FontAwesomeIcon
                      icon={faEdit}
                      style={{ fontSize: "15px", color: "#27272a" }}
                    />
                  </span>
                  <span className={"Btn2"}>
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{ fontSize: "15px", color: "#27272a" }}
                    />
                  </span>
                </div>
              </div>
              <div className={"cohortsListWrapper"}>
                <div className={"cohortsAvatar"}>
                  <div
                    style={{
                      borderRadius: "8px",
                      backgroundColor: "orange",
                      height: "80px",
                      width: "80px",
                    }}
                    className="text-center"
                  >
                    <h4
                      style={{
                        paddingTop: "10px",
                        color: "white",
                        fontSize: "50px",
                      }}
                    >
                      <b> </b>
                    </h4>
                  </div>
                </div>
                <div className={"cohortsDetail"}>
                  <span className={"label"}>MARY SUN</span>
                  <span className={"hideBtn"}>
                    <button>SHOW</button>
                  </span>
                  {/* <span className={"hideBtn2"}>SRC 2022 Election</span> */}
                  <br />
                  <span className={"Btn1"}>
                    <FontAwesomeIcon
                      icon={faEdit}
                      style={{ fontSize: "15px", color: "#27272a" }}
                    />
                  </span>
                  <span className={"Btn2"}>
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{ fontSize: "15px", color: "#27272a" }}
                    />
                  </span>
                </div>
              </div>
            </div>
            <Divider>PENDING INVITATIONS</Divider>
            {/* <div className={"loadMore"}>
              <span>LOAD MORE ...</span>
            </div> */}
            <div className="row text-center mt-3">
              <div className="col-lg-3">
                {" "}
                <span className={"footer"}>
                  <button>info@pollnation.com</button>
                </span>
              </div>
              <div className="col-lg-3">
                <span className={"footer"}>
                  <button>info@pollnation.com</button>
                </span>
              </div>
              <div className="col-lg-3">
                <span className={"footer"}>
                  <button>info@pollnation.com</button>
                </span>
              </div>
              <div className="col-lg-3">
                <span className={"footer"}>
                  <button>info@pollnation.com</button>
                </span>
              </div>
            </div>
            <div className="row text-center mt-3">
              <div className="col-lg-3">
                {" "}
                <span className={"footer"}>
                  <button>info@pollnation.com</button>
                </span>
              </div>
              <div className="col-lg-3">
                <span className={"footer"}>
                  <button>info@pollnation.com</button>
                </span>
              </div>
              <div className="col-lg-3">
                <span className={"footer"}>
                  <button>info@pollnation.com</button>
                </span>
              </div>
              <div className="col-lg-3">
                <span className={"footer"}>
                  <button>info@pollnation.com</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default AssetInfo;
