import AppTab from "../../tabs";
import "./mypage.scss";
const MyPage = () => {
  return (
    <div className={"mypageWrapper"}>
      <div className={"bannerProfileWrapper"}>
        <div className={"profilepic"}> </div>
        <div className={"bannerWrapper"}>
          {" "}
          <h4>
            <br />
          </h4>
        </div>
      </div>
      <div className={"bioWrapper"}>
        <div>
          <div className="text-center">
            <AppTab />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
