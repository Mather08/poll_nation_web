import { faEdit, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, Button } from "antd";
import "./cohorts.scss";
const Cohorts = () => {
  return (
    <>
      <h3>
        <b>Cohorts</b>
      </h3>
      <div className={"cohortsWrapper"}>
        <div className={"InnerWrapper"}>
          <div className="row">
            <div className="col-lg-6">
              <Button
                style={{
                  borderRadius: "15px",
                  color: "#FFF",
                  fontWeight: 700,
                  backgroundColor: "black",
                }}
              >
                Add Cohorts
              </Button>
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
                      <b>IK</b>
                    </h4>
                  </div>
                </div>
                <div className={"cohortsDetail"}>
                  <span className={"label"}>SRC 2022</span>
                  <span className={"hideBtn"}>Cohort for</span>
                  <span className={"hideBtn2"}>SRC 2022 Election</span>
                  <br/>
                  <span className={"Btn1"}>
                  <FontAwesomeIcon
                      icon={faEdit}
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
                      <b>IK</b>
                    </h4>
                </div>
                </div>
                <div className={"cohortsDetail"}>
                  <span className={"label"}>SRC 2022</span>
                  <span className={"hideBtn"}>Cohort for</span>
                  <span className={"hideBtn2"}>SRC 2022 Election</span>
                  <br/>
                  <span className={"Btn1"}>
                  <FontAwesomeIcon
                      icon={faEdit}
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
                      <b>IK</b>
                    </h4>
                </div>
                </div>
                <div className={"cohortsDetail"}>
                  <span className={"label"}>SRC 2022</span>
                  <span className={"hideBtn"}>Cohort for</span>
                  <span className={"hideBtn2"}>SRC 2022 Election</span>
                  <br/>
                  <span className={"Btn1"}>
                  <FontAwesomeIcon
                      icon={faEdit}
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
                      <b>IK</b>
                    </h4>
                </div>
                </div>
                <div className={"cohortsDetail"}>
                  <span className={"label"}>SRC 2022</span>
                  <span className={"hideBtn"}>Cohort for</span>
                  <span className={"hideBtn2"}>SRC 2022 Election</span>
                  <br/>
                  <span className={"Btn1"}>
                  <FontAwesomeIcon
                      icon={faEdit}
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
                      <b>IK</b>
                    </h4>
                </div>
                </div>
                <div className={"cohortsDetail"}>
                  <span className={"label"}>SRC 2022</span>
                  <span className={"hideBtn"}>Cohort for</span>
                  <span className={"hideBtn2"}>SRC 2022 Election</span>
                  <br/>
                  <span className={"Btn1"}>
                  <FontAwesomeIcon
                      icon={faEdit}
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
                      <b>IK</b>
                    </h4>
                </div>
                </div>
                <div className={"cohortsDetail"}>
                  <span className={"label"}>SRC 2022</span>
                  <span className={"hideBtn"}>Cohort for</span>
                  <span className={"hideBtn2"}>SRC 2022 Election</span>
                  <br/>
                  <span className={"Btn1"}>
                  <FontAwesomeIcon
                      icon={faEdit}
                      style={{ fontSize: "15px", color: "#27272a" }}
                    />
                </span>
                </div>
              </div>
            </div>

            <div className={"loadMore"}>
              <span>LOAD MORE ...</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cohorts;
