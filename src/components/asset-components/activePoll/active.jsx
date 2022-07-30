import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "antd";
import "./active.scss";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";
import { useEffect, useState } from "react";

const Active = () => {
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
        <b>Active Polls</b>
      </h3>

      <div className={"activeWrapper"}>
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

          <div className={"activeListWrapper"}>
            <div className={"activeList"}>

              <div className={"activeListWrapper"}>
                <div className={"activeAvatar"}>
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
                {/* {websitename.map((mess) => ( */}

                <div className={"activeDetail row"}>
                  <br />
                  <span className={"label"}>
                    {/* {mess.description} */}
                    </span>
                  <span className={"phone"}>
                    {/* Phone: +434 342 346 734 <br /> */}
                    starts in{" "}
                    <span className={"hideBtn"}>
                      <button>
                        {/* {mess.startTime} */}
                        </button>
                    </span>
                  </span>
                </div>
  {/* ))} */}

              </div>

              <div className={"activeListWrapper"}>
                <div className={"activeAvatar"}>
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
                <div className={"activeDetail"}>
                  <span className={"label"}>Title 2</span>
                  <span className={"phone"}>
                    {/* Phone: +434 342 346 734 <br />
                  Email: janedoe@heremail.com */}
                  </span>
                  <span className={"hideBtn"}>
                    <button>ONGOING</button>
                  </span>
                </div>
              </div>
              <div className={"activeListWrapper"}>
                <div className={"activeAvatar"}>
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
                <div className={"activeDetail"}>
                  <span className={"label"}>
                    {/* {mess.description} */}
                    </span>
                  <span className={"phone"}>
                    ends in{" "}
                    <span className={"hideBtn"}>
                      {" "}
                      <button>
                        {/* {mess.endTime} */}
                        </button>
                    </span>
                  </span>
                  {/* <span className={"hideBtn"}>
                  <button>2 HOURS</button>
                </span> */}
                </div>
              </div>
            </div>
            {/* ******************* */}
            
            <div className={"loadMore"}>
              <span>LOAD MORE ...</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Active;
