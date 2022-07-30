import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMusic,
  faVideoCamera,
  faList,
  faUsers,
  faClock,
  faBarChart,
  faStar,
  faUserAlt,
  faUser,
  faUserFriends,
  faKey,
} from "@fortawesome/free-solid-svg-icons";
import { CaretDownOutlined, StarFilled, UserOutlined } from "@ant-design/icons";
import "./dashboard.scss";
import { Avatar, Divider, Switch } from "antd";
import Bar from "components/Barchart";
// import Switch from "react-js-switch";

const DashboardOfficer = () => {
  return (
    <div>
      <div className={"analyticWrapper"}>
        <div className={"assetMusicWrapper"}>
          <div className={"titleinfoWrapper"}>
            <div className={"titleIcon"}>
              {/* <i className="fa-solid fa-music" /> */}
              <div className={"musicIconWrapper"}>
                <FontAwesomeIcon
                  icon={faBarChart}
                  style={{ fontSize: "50px", color: "white" }}
                />
              </div>
            </div>
            <div className={"assetInnerWrapper"}>
              {/* <div className={"titleIcon}>hello</div> */}
              <span className={"title"}>Polls</span>
              <span className={"assetinformation"}>10</span>
            </div>
          </div>
          <div className={"titleinfoWrapper"}>
            <div className={"beginsIcon"}>
              {/* <i className="fa-solid fa-music" /> */}
              <div className={"musicIconWrapper"}>
                <FontAwesomeIcon
                  icon={faUsers}
                  style={{ fontSize: "50px", color: "white" }}
                />
              </div>
            </div>
            <div className={"assetInnerWrapper"}>
              <span className={"title"}>Member</span>
              <span className={"assetinformation"}>8000</span>
            </div>
          </div>
          <div className={"titleinfoWrapper"}>
            <div className={"endIcon"}>
              <div className={"musicIconWrapper"}>
                <FontAwesomeIcon
                  icon={faStar}
                  style={{ fontSize: "50px", color: "white" }}
                />
              </div>
            </div>{" "}
            <div className={"assetInnerWrapper"}>
              <span className={"title"}>Active Poll</span>
              <span className={"assetinformation"}> 90</span>
            </div>
          </div>
        </div>
      </div>
      <div className={"analyticWrapper2"}>
        <div className={"assetMusicWrapper2"}>
          <div className={"titleinfoWrapper2"}>
            <div className={"titleIcon2"}>
              {/* <i className="fa-solid fa-music" /> */}
              <div className={"musicIconWrapper2"}>
                <FontAwesomeIcon
                  icon={faBarChart}
                  style={{ fontSize: "50px", color: "white" }}
                />
              </div>
            </div>
            <div className={"assetInnerWrapper2"}>
              {/* <div className={"titleIcon}>hello</div> */}
              <span className={"title2"}>Polls Types</span>
              <span className={"assetinformation2"}></span>
            </div>
          </div>
          <div className={"titleinfoWrapper2"}>
            <div className={"beginsIcon2"}>
              {/* <i className="fa-solid fa-music" /> */}
              <div className={"musicIconWrapper2"}>
                <FontAwesomeIcon
                  icon={faKey}
                  style={{ fontSize: "50px", color: "white" }}
                />
              </div>
            </div>
            <div className={"assetInnerWrapper2"}>
              <span className={"title2"}>Poll Location Zambia</span>
              <span className={"assetinformation2"}></span>
            </div>
          </div>
        </div>
      </div>

      <Divider>Active Polls</Divider>
      <div className={"activeListWrapper"}>
        <div className={"activeList"}>
          <div className={"activeListWrapper"}>
            <div className={"activeAvatar"}>
              <span>
                {" "}
                <Avatar
                  shape="square"
                  style={{
                    borderRadius: "8px",
                    height: "100px",
                    width: "170px",
                  }}
                  src="https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c="
                />
              </span>
            </div>
            <div className={"activeDetail"}>
              <span className={"label"}>SRC 2022 ELECTIONS</span>
              <span className={"phone"}>
                ends in{" "}
                <span className={"hideBtn"}>
                  {" "}
                  <button>2 HOURS</button>
                </span>
              </span>
            </div>
          </div>
          <div className={"activeListWrapper"}>
            <div className={"activeAvatar"}>
              <span>
                {" "}
                <Avatar
                  shape="square"
                  style={{
                    borderRadius: "8px",
                    height: "100px",
                    width: "170px",
                  }}
                  src="https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c="
                />
              </span>
            </div>
            <div className={"activeDetail"}>
              <span className={"label"}>OPINION POLL</span>
              <span className={"phone"}>
                ends in{" "}
                <span className={"hideBtn"}>
                  {" "}
                  <button>2 HOURS</button>
                </span>
              </span>
            </div>
          </div>
          <div className={"activeListWrapper"}>
            <div className={"activeAvatar"}>
              <span>
                {" "}
                <Avatar
                  shape="square"
                  style={{
                    borderRadius: "8px",
                    height: "100px",
                    width: "170px",
                  }}
                  src="https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c="
                />
              </span>
            </div>
            <div className={"activeDetail"}>
              <span className={"label"}>OPINION POLL</span>
              <span className={"phone"}></span>
              <span className={"hideBtn"}>
                <button>ONGOING</button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={"analyticWrapper1"}>
        <div className={"assetMusicWrapper1"}>
          <div className={"titleinfoWrapper1"}>
            <div className={"titleIcon1"}>
              {/* <i className="fa-solid fa-music" /> */}
              <div className={"musicIconWrapper1"}>
                <FontAwesomeIcon
                  icon={faUserFriends}
                  style={{ fontSize: "50px", color: "white" }}
                />
              </div>
            </div>
            <div className={"assetInnerWrapper1"}>
              <Bar/>
              {/* <div className={"titleIcon}>hello</div> */}
              {/* <span className={"title1"}></span>
              <span className={"assetinformation1"}></span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardOfficer;
