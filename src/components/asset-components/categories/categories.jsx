import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar } from "antd";
import "./categories.scss";
const Categories = () => {
  return (
    <>
    <h3><b>Categories</b></h3>
    <div className={"categoriesWrapper"}>
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
        <div className={"categoriesListWrapper"}>
          <div className={"categoriesList"}>
            <div className={"categoriesListWrapper"}>
              <div className={"categoriesAvatar"}>
                <span>
                  {" "}
                  <Avatar
                    shape="square"
                    size={80}
                    style={{ borderRadius: "8px", backgroundColor: "pink" }}
                    
                    // src="https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c="
                  />
                </span>
              </div>
              <div className={"categoriesDetail"}>
                <span className={"label"}>Title</span>
                <span className={"hideBtn"}>
                 info
                </span>
                {/* <span className={"hideBtn"}>
                  <button>HIDE</button>
                </span> */}
              </div>
            </div>
            <div className={"categoriesListWrapper"}>
              <div className={"categoriesAvatar"}>
                <span>
                  {" "}
                  <Avatar
                    shape="square"
                    size={80}
                    style={{ borderRadius: "8px",  backgroundColor: "green" }}
                    // src="https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c="
                  />
 
                </span>
              </div>
              <div className={"categoriesDetail"}>
                <span className={"label"}>Title</span>
                <span className={"hideBtn"}>
                 info
                </span>
                {/* <span className={"hideBtn"}>
                  <button>HIDE</button>
                </span> */}
              </div>
            </div>
            <div className={"categoriesListWrapper"}>
              <div className={"categoriesAvatar"}>
                <span>
                  {" "}
                  <Avatar
                    shape="square"
                    size={80}
                    style={{ borderRadius: "8px", backgroundColor: "orange" }}
                    // src="https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c="
                  />
                </span>
              </div>
              <div className={"categoriesDetail"}>
                <span className={"label"}>Title</span>
                <span className={"hideBtn"}>
                 info
                </span>
                {/* <span className={"hideBtn"}>
                  <button>HIDE</button>
                </span> */}
              </div>
            </div>
          </div>
          
          {/* ******************* */}
          <div className={"categoriesList"}>
            <div className={"categoriesListWrapper"}>
              <div className={"categoriesAvatar"}>
                <span>
                  {" "}
                  <Avatar
                    shape="square"
                    size={80}
                    style={{ borderRadius: "8px", backgroundColor: "pink" }}
                    // src="https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c="
                  />
                </span>
              </div>
              <div className={"categoriesDetail"}>
                <span className={"label"}>Title</span>
                <span className={"hideBtn"}>
                 info
                </span>
                {/* <span className={"hideBtn"}>
                  <button>HIDE</button>
                </span> */}
              </div>
            </div>
            <div className={"categoriesListWrapper"}>
              <div className={"categoriesAvatar"}>
                <span>
                  {" "}
                  <Avatar
                    shape="square"
                    size={80}
                    style={{ borderRadius: "8px",backgroundColor: "green" }}
                    // src="https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c="
                  />
                </span>
              </div>
              <div className={"categoriesDetail"}>
                <span className={"label"}>Title</span>
                <span className={"hideBtn"}>
                 info
                </span>
                {/* <span className={"hideBtn"}>
                  <button>HIDE</button>
                </span> */}
              </div>
            </div>
            <div className={"categoriesListWrapper"}>
              <div className={"categoriesAvatar"}>
                <span>
                  {" "}
                  <Avatar
                    shape="square"
                    size={80}
                    style={{ borderRadius: "8px", backgroundColor: "orange" }}
                    // src="https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c="
                  />
                </span>
              </div>
              <div className={"categoriesDetail"}>
                <span className={"label"}>Title</span>
                <span className={"hideBtn"}>
                 info
                </span>
                {/* <span className={"hideBtn"}>
                  <button>HIDE</button>
                </span> */}
              </div>
            </div>
          </div>
          <div className={"categoriesList"}>
            <div className={"categoriesListWrapper"}>
              <div className={"categoriesAvatar"}>
                <span>
                  {" "}
                  <Avatar
                    shape="square"
                    size={80}
                    style={{ borderRadius: "8px", backgroundColor: "pink" }}
                    // src="https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c="
                  />
                </span>
              </div>
              <div className={"categoriesDetail"}>
                <span className={"label"}>Title</span>
                <span className={"hideBtn"}>
                 info
                </span>
                {/* <span className={"hideBtn"}>
                  <button>HIDE</button>
                </span> */}
              </div>
            </div>
            <div className={"categoriesListWrapper"}>
              <div className={"categoriesAvatar"}>
                <span>
                  {" "}
                  <Avatar
                    shape="square"
                    size={80}
                    style={{ borderRadius: "8px",backgroundColor: "green" }}
                    // src="https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c="
                  />
                </span>
              </div>
              <div className={"categoriesDetail"}>
                <span className={"label"}>Title</span>
                <span className={"hideBtn"}>
                 info
                </span>
                {/* <span className={"hideBtn"}>
                  <button>HIDE</button>
                </span> */}
              </div>
            </div>
            <div className={"categoriesListWrapper"}>
              <div className={"categoriesAvatar"}>
                <span>
                  {" "}
                  <Avatar
                    shape="square"
                    size={80}
                    style={{ borderRadius: "8px", backgroundColor: "orange" }}
                    // src="https://media.istockphoto.com/photos/focused-on-success-and-growth-picture-id1311977351?b=1&k=20&m=1311977351&s=170667a&w=0&h=h7_o-NmSz-t-tFMKVoIYk9c05c0mche1ocfeSQ2C4_c="
                  />
                </span>
              </div>
              <div className={"categoriesDetail"}>
                <span className={"label"}>Title</span>
                <span className={"hideBtn"}>
                 info
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
export default Categories;
