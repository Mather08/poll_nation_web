import { faCloudArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./upload.scss";
const Upload = () => {
  return (
    <div className={"Wrapper"}>
      <div className={"uploadInnerWrapper"}>
        <div className={"imageWrapper"}>
          <div className={"imageDrop"}>
            <span>Drag and drop zone</span>
            <span>
              {" "}
              <FontAwesomeIcon
                icon={faCloudArrowUp}
                style={{ fontSize: "65px" }}
              />
            </span>
          </div>
          <div className={"browsebtnWrapper"}>
            <button>BROWSE</button>
          </div>
        </div>
        <div className={"imageWrapper"}>
          {/* <div className={upload.imageDrop}>
            <span>Drag and drop zone</span>
            <span>
              {" "}
              <FontAwesomeIcon
                icon={faCloudArrowUp}
                style={{ fontSize: "65px" }}
              />
            </span>
          </div> */}
          <div className={"descLabel"}>
            <span>Description</span>
          </div>

          <div className={"uploadBtn"}>
            <button>UPLOAD</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Upload;
