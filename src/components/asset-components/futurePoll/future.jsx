import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "antd";
import "./future.scss";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { useEffect, useState } from "react";
const Future = () => {
  const [websitename, setwebsitename] = useState("");
  useEffect(() => {
    const secret = JSON.parse(sessionStorage.getItem("items"));
    const client = new ApolloClient({
      uri: "https://graphql.us.fauna.com/graphql",
      headers: { Authorization: `Bearer ${secret}` },
    });
    client
      .query({
        query: gql`
          query {
            findMyPollThemes {
              after
              before
              data {
                _id
                _ts
                name
                cohort {
                  _id
                  _ts
                  name
                  description
                }
                type
                style
                startTime
                endTime
                pollStatus
                pollAccess
                description
                coverImage
                slug
                isOTPEnabled
                isGeoRestricted
                officers {
                  after
                  before
                  data {
                    _id
                    firstName
                    familyName
                    photoUrl
                  }
                }
                polls {
                  after
                  before
                  data {
                    _id
                    title
                    description
                    voteType
                    gradientColor {
                      primaryColor
                      secondaryColor
                    }
                    pollOptions {
                      after
                      before
                      data {
                        _id
                        name
                        account {
                          _id
                          firstName
                          familyName
                          assets {
                            after
                            before
                            data {
                              _id
                              url
                              isLinked
                              description
                            }
                          }
                        }
                        picture
                        coverImage
                        metas {
                          after
                          before
                          data {
                            _id
                            metaKey
                            metaValue
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `,
      })
      .then((response) => {
        setwebsitename(response.data.findMyPollThemes.data);
        console.log(response.data.findMyPollThemes.data);

      })
      .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <h3>
        <b>Future Polls</b>
      </h3>
      <div className={"futureWrapper"}>
        <div className={"InnerWrapper"}>
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
          <div className={"futureListWrapper"}>
            <div className={"futureList"}>
              <div className={"futureListWrapper"}>
                <div className={"futureAvatar"}>
                  <span>
                    {" "}
                    <Avatar
                      shape="square"
                      // size={100}
                      style={{
                        borderRadius: "8px",
                        height: "100px",
                        width: "170px",
                      }}
                      src="https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c="
                    />
                  </span>
                </div>
                <div className={"futureDetail"}>
                  <br />
                  <span className={"label"}>Title 1</span>
                  <span className={"phone"}>
                    {/* Phone: +434 342 346 734 <br /> */}
                    starts in{" "}
                    <span className={"hideBtn"}>
                      <button>2 WEEKS</button>
                    </span>
                  </span>
                </div>
              </div>
              <div className={"futureListWrapper"}>
                <div className={"futureAvatar"}>
                  <span>
                    {" "}
                    <Avatar
                      shape="square"
                      // size={80}
                      style={{
                        borderRadius: "8px",
                        height: "100px",
                        width: "170px",
                      }}
                      src="https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c="
                    />
                  </span>
                </div>
                <div className={"futureDetail"}>
                  <span className={"label"}>Title 2</span>
                  <span className={"phone"}>
                    {/* Phone: +434 342 346 734 <br /> */}
                    starts in{" "}
                    <span className={"hideBtn"}>
                      <button>2 WEEKS</button>
                    </span>
                  </span>
                </div>
              </div>
              <div className={"futureListWrapper"}>
                <div className={"futureAvatar"}>
                  <span>
                    {" "}
                    <Avatar
                      shape="square"
                      // size={80}
                      style={{
                        borderRadius: "8px",
                        height: "100px",
                        width: "170px",
                      }}
                      src="https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c="
                    />
                  </span>
                </div>
                <div className={"futureDetail"}>
                  <span className={"label"}>Title 3</span>
                  <span className={"phone"}>
                    {/* Phone: +434 342 346 734 <br /> */}
                    starts in{" "}
                    <span className={"hideBtn"}>
                      <button>2 WEEKS</button>
                    </span>
                  </span>
                  {/* <span className={"hideBtn"}>
                  <button>2 HOURS</button>
                </span> */}
                </div>
              </div>
            </div>
            {/* ******************* */}
            <div className={"futureList"}>
              <div className={"futureListWrapper"}>
                <div className={"futureAvatar"}>
                  <span>
                    {" "}
                    <Avatar
                      shape="square"
                      // size={80}
                      style={{
                        borderRadius: "8px",
                        height: "100px",
                        width: "170px",
                      }}
                      src="https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c="
                    />
                  </span>
                </div>
                <div className={"futureDetail"}>
                  <span className={"label"}>Title 4</span>
                  <span className={"phone"}>
                    {/* Phone: +434 342 346 734 <br /> */}
                    starts in{" "}
                    <span className={"hideBtn"}>
                      <button>2 WEEKS</button>
                    </span>
                  </span>
                  {/* <span className={"hideBtn"}>
                  <button>HIDE</button>
                </span> */}
                </div>
              </div>
              <div className={"futureListWrapper"}>
                <div className={"futureAvatar"}>
                  <span>
                    {" "}
                    <Avatar
                      shape="square"
                      // size={80}
                      style={{
                        borderRadius: "8px",
                        height: "100px",
                        width: "170px",
                      }}
                      src="https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c="
                    />
                  </span>
                </div>
                <div className={"futureDetail"}>
                  <span className={"label"}>Title 5</span>
                  <span className={"phone"}>
                    {/* Phone: +434 342 346 734 <br /> */}
                    starts in{" "}
                    <span className={"hideBtn"}>
                      <button>2 WEEKS</button>
                    </span>
                  </span>
                </div>
              </div>
              <div className={"futureListWrapper"}>
                <div className={"futureAvatar"}>
                  <span>
                    {" "}
                    <Avatar
                      shape="square"
                      // size={80}
                      style={{
                        borderRadius: "8px",
                        height: "100px",
                        width: "170px",
                      }}
                      src="https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c="
                    />
                  </span>
                </div>
                <div className={"futureDetail"}>
                  <span className={"label"}>Title 6</span>
                  <span className={"phone"}>
                    {/* Phone: +434 342 346 734 <br /> */}
                    starts in{" "}
                    <span className={"hideBtn"}>
                      <button>2 WEEKS</button>
                    </span>
                  </span>
                  {/* <span className={"hideBtn"}>
                  <button>HIDE</button>
                </span> */}
                </div>
              </div>
            </div>
            {/* ******************* */}
            <div className={"futureList"}>
              <div className={"futureListWrapper"}>
                <div className={"futureAvatar"}>
                  <span>
                    {" "}
                    <Avatar
                      shape="square"
                      // size={80}
                      style={{
                        borderRadius: "8px",
                        height: "100px",
                        width: "170px",
                      }}
                      src="https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c="
                    />
                  </span>
                </div>
                <div className={"futureDetail"}>
                  <span className={"label"}>Title 7</span>
                  <span className={"phone"}>
                    {/* Phone: +434 342 346 734 <br /> */}
                    starts in{" "}
                    <span className={"hideBtn"}>
                      <button>2 WEEKS</button>
                    </span>
                  </span>
                  {/* <span className={"hideBtn"}>
                  <button>HIDE</button>
                </span> */}
                </div>
              </div>
              <div className={"futureListWrapper"}>
                <div className={"futureAvatar"}>
                  <span>
                    {" "}
                    <Avatar
                      shape="square"
                      // size={80}
                      style={{
                        borderRadius: "8px",
                        height: "100px",
                        width: "170px",
                      }}
                      src="https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c="
                    />
                  </span>
                </div>
                <div className={"futureDetail"}>
                  <span className={"label"}>Title 8</span>
                  <span className={"phone"}>
                    {/* Phone: +434 342 346 734 <br /> */}
                    starts in{" "}
                    <span className={"hideBtn"}>
                      <button>2 WEEKS</button>
                    </span>
                  </span>
                </div>
              </div>
              <div className={"futureListWrapper"}>
                <div className={"futureAvatar"}>
                  <span>
                    {" "}
                    <Avatar
                      shape="square"
                      // size={80}
                      style={{
                        borderRadius: "8px",
                        height: "100px",
                        width: "170px",
                      }}
                      src="https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c="
                    />
                  </span>
                </div>
                <div className={"futureDetail"}>
                  <span className={"label"}>Title 9</span>
                  <span className={"phone"}>
                    {/* Phone: +434 342 346 734 <br /> */}
                    starts in{" "}
                    <span className={"hideBtn"}>
                      <button>2 WEEKS</button>
                    </span>
                  </span>
                  {/* <span className={"hideBtn"}>
                  <button>HIDE</button>
                </span> */}
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
export default Future;
