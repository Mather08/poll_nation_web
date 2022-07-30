// import { UserOutlined } from "@ant-design/icons";
// import { Avatar } from "antd";
// import UploadPic from "../UploadImages";
import "./preview.scss";
// import { MDBInput } from "mdbreact";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  // faEdit,
  // faMagnifyingGlass,
  // faTrash,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
const Preview = () => {
  return (
    // <div className={"previewWrapper"}>
    //   <div className={"previewInnerWrapper"}>
    //     <div className={"header"}>
    //       {/* <h3>SRC ELECTION 2022: PRESIDENT CATEGORY</h3> */}
    //     </div>
    //     <div className={"presidents"}>
    //       <div className={"presidentProfile"}>
    //         <div className={"presidentProfPic"}>
    //           {" "}
    //           <MDBInput label="Material input" />
    //           {/* <Avatar
    //             src="https://previews.123rf.com/images/baranq/baranq1603/baranq160300831/53957368-.jpg"
    //             size={64}
    //           /> */}
    //           {/* <UploadPic/> */}
    //         </div>
    //         {/* <div className={"presidentProfileWrapper"}></div>
    //         <div className={"presidentNameWrapper"}>
    //           <span>John Doe</span>
    //           <button>VOTE</button>
    //         </div> */}
    //       </div>
    //       <div className={"presidentProfile"}>
    //         <div className={"presidentProfPic"}>
    //           {/* {" "}
    //           <Avatar
    //             src="https://previews.123rf.com/images/baranq/baranq1603/baranq160300831/53957368-.jpg"
    //             size={64}
    //           /> */}
    //         </div>
    //         {/* <div className={"presidentProfileWrapper"}></div>
    //         <div className={"presidentNameWrapper"}>
    //           <span>John Doe</span>
    //           <button>VOTE</button>
    //         </div> */}
    //       </div>
    //       <div className={"presidentProfile"}>
    //         <div className={"presidentProfPic"}>
    //           {/* {" "}
    //           <Avatar
    //             src="https://previews.123rf.com/images/baranq/baranq1603/baranq160300831/53957368-.jpg"
    //             size={64}
    //           /> */}
    //         </div>
    //         {/* <div className={"presidentProfileWrapper"}></div>
    //         <div className={"presidentNameWrapper"}>
    //           <span>John Doe</span>
    //           <button>VOTE</button>
    //         </div> */}
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <>
      <h3>
        <b>Organization</b>
      </h3>
      <div className={"cohortsWrapper"}>
        <div className={"InnerWrapper"}>
          <br />
          <br />

          <div className={"search"}>
            <span>
              <b>Square Logo</b>
            </span>{" "}
            <div>
              <input type="text" placeholder="browse here" />
              {/* <span>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      style={{ fontSize: "15px", color: "#27272a" }}
                    />
                  </span> */}
            </div>
          </div>
          <br />
          <div className={"search"}>
            <span>
              <b>Name</b>
            </span>{" "}
            <div>
              <input type="text" placeholder="Coperbelt University" />
              {/* <span>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      style={{ fontSize: "15px", color: "#27272a" }}
                    />
                  </span> */}
            </div>
          </div>
          <br />
          <div className={"search"}>
            <span>
              <b>About</b>
            </span>{" "}
            <div>
              <input type="text" />
              {/* <span>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      style={{ fontSize: "15px", color: "#27272a" }}
                    />
                  </span> */}
            </div>
          </div>
          <br />
          <div className={"search"}>
            {/* <span><b>Name</b></span>{" "} */}
            <div>
              <input type="text" />
              {/* <span>
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      style={{ fontSize: "15px", color: "#27272a" }}
                    />
                  </span> */}
            </div>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
      <div className={"cohortsWrapper"}>
        <div className={"InnerWrapper"}>
          <h6 style={{ color: "grey" }}>RECTANGULAR LOGO</h6>
          <div className="text-center mt-5">
            <span className="">
              {/* <input type="file" /> */}

                 <span>
                    <FontAwesomeIcon
                      icon={faUpload}
                      style={{ color: "grey", height: "100px", width: "100px" }}
                    />
                  </span>
            </span>
            <br />
            <br />
            <button
              style={{
                borderRadius: "10px",
                backgroundColor: "black",
                color: "white",
                width: "100px",
                height: "40px"
              }}
            >
              SAVE
            </button>
          </div>
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default Preview;
