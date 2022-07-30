import { UserOutlined } from "@ant-design/icons";
import {
  faBusSimple,
  faLock,
  faNoteSticky,
  faPen,
  faShield,
  faShieldHalved,
  faUnlock,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "antd";
import { Link } from "react-router-dom";
import "./profile.scss";

const ProfileDetails = () => {
  return (
    <div className={"profileWrapper"}>
      <div className={"profileLinks"}>
        <div className={"profileLinksWrapper"}>
          <span>
            {" "}
            <FontAwesomeIcon
              icon={faUserCircle}
              style={{ fontSize: "20px", color: "#344767" }}
            />
          </span>
          <span className={"linkName"}>Profile</span>
        </div>
        <div className={"profileLinksWrapper"}>
          <span>
            {" "}
            {/* <FontAwesomeIcon
              icon={faUserCircle}
              //   style={{ fontSize: "100px", color: "white" }}
            /> */}
            <FontAwesomeIcon
              icon={faNoteSticky}
              style={{ fontSize: "20px", color: "#344767" }}
            />
          </span>
          <span className={"linkName"}>Basic Info</span>
        </div>
        <div className={"profileLinksWrapper"}>
          <span>
            {" "}
            {/* <FontAwesomeIcon
              icon={faUserCircle}
              //   style={{ fontSize: "100px", color: "white" }}
            /> */}
            <FontAwesomeIcon
              icon={faLock}
              style={{ fontSize: "20px", color: "#344767" }}
            />
          </span>
          <span className={"linkName"}>Change Password</span>
        </div>
        <div className={"profileLinksWrapper"}>
          <span>
            {" "}
            {/* <FontAwesomeIcon
              icon={faUserCircle}
              //   style={{ fontSize: "100px", color: "white" }}
            /> */}
            <FontAwesomeIcon
              icon={faShieldHalved}
              style={{ fontSize: "20px", color: "#344767" }}
            />
          </span>
          <Link className={"linkName"} to="/#account">Accounts</Link>
        </div>
      </div>
      <div className={"profileEdit"}>
        <div className={"profilePicWrapper"}>
          <div className={"profilePicName"}>
            <span>
              {" "}
              <Avatar
                src="https://previews.123rf.com/images/baranq/baranq1603/baranq160300831/53957368-.jpg"
                size={64}
              />
            </span>
            <span className={"profileName"}>
              Emma Watson <br />
              <b>Candidate</b>
            </span>
          </div>
          <div className={"profileLockWrapper"}>
            <span className={"currentLogin"}>Current Login</span>
            <span className={"currentUnlockIcon"}>
              <FontAwesomeIcon
                icon={faUnlock}
                style={{ fontSize: "15px", color: "#344767" }}
              />
            </span>
          </div>
        </div>
        <div className={"profileBasicWrapper"}>
          <div className={"basicLabel"}>
            <div className={"profilePicName"}>
              <span className={"profileName"}>Basic Info</span>
            </div>
            <div className={"profileLockWrapper"}>
              <span className={"currentUnlockIcon"}>
                <FontAwesomeIcon
                  icon={faPen}
                  style={{ fontSize: "15px", color: "#344767" }}
                />
              </span>
            </div>
          </div>
          <div className={"basicInfoFields"}>
            <div className={"profileFields1"}>
              <div>
                <span>First Name </span>
                <input type="text" placeholder="Emma" />
              </div>
              <div>
                <span>Last Name</span>
                <input placeholder="Watson" type="text" />
              </div>
            </div>
            <div className={"profileFields1"}>
              <div>
                <span>Email </span>
                <input type="text" placeholder="Email" />
              </div>
              <div>
                <span>Phone</span>
                <input placeholder="Phone" type="text" />
              </div>
            </div>
          </div>
        </div>
        <div className={"profileChangePassword"}>
          <div className={"basicLabel"}>
            <div className={"profilePicName"}>
              <span className={"profileName"}>Change Password</span>
            </div>
          </div>
          <div className={"basicInfoFields"}>
            <div className={"profileFields1"}>
              <div>
                <input type="text" placeholder="Current Password" />
              </div>
              <div>
                <input placeholder="New Password" type="text" />
              </div>
              <div>
                <input placeholder="Confirm Password" type="text" />
              </div>
            </div>
          </div>
          <div className={"passwordWrapper"}>
            <div className={"profilePicName"}>
              <span className={"profileName"}>Password requirements</span>
              <span className={"guide"}>
                Please Follow this guide for Strong Password
              </span>
              {/* <span className={profile.profileName}>Password requirements</span> */}
              <ul>
                <li>One Special Character</li>
                <li>Min 8 Character</li>
                <li>1 number {`(2 are Recommended)`}</li>
                <li>Change it often</li>
              </ul>
            </div>
            <div className={"updatePasswordWrapper"}>
              <button>UPDATE PASSWORD</button>
            </div>
          </div>
        </div>
        <div className={"profileAccounts"} id="account">
          <div className={"basicLabel"}>
            <div className={"profilePicName"}>
              <span className={"profileName"}>Accounts</span>
              <span className={"iconList"}>
                Here is the list of accounts you have used to login{" "}
              </span>
            </div>
          </div>
          <div className={"basicInfoFields"}>
            <div className={"profileFields1"}>
              <div>
                <span>
                  <img
                    width={30}
                    src="https://cdn.iconscout.com/icon/free/png-256/facebook-logo-2019-1597680-1350125.png"
                    alt=""
                  />
                </span>
                <span className={"socialLabel"}>Facebook</span>
              </div>
              <div>
                <span>
                  <img
                    width={30}
                    src="https://freesvg.org/img/1534129544.png"
                    alt=""
                  />
                </span>
                <span className={"socialLabel"}>Google</span>
              </div>
              <div>
                <span>
                  <img
                    width={30}
                    src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png"
                    alt=""
                  />
                </span>
                <span className={"socialLabel"}>Twitter</span>
              </div>
            </div>
          </div>
          {/* <div className={profile.passwordWrapper}>
            <div className={profile.profilePicName}>
              <span className={profile.profileName}>Password requirements</span>
              <span className={profile.guide}>
                Please Follow this guide for Strong Password
              </span>
              <ul>
                <li>One Special Character</li>
                <li>Min 8 Character</li>
                <li>1 number {`(2 are Recommended)`}</li>
                <li>Change it often</li>
              </ul>
            </div>
            <div className={profile.updatePasswordWrapper}>
              <button>UPDATE PASSWORD</button>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
export default ProfileDetails;
