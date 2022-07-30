import "./footer.scss";
const AssetComponentFooter = () => {
  return (
    <div className={"footerWrapper"}>
      <div className={"footerInnerWrapper"}>
        <div>
          <span className={"poll"}>POLL</span>
          <span className={"nation"}>NATION</span>
          <span className={"copyright"}>©2022</span>
        </div>
        <div>
          <span className={"terms"}>Terms of Use</span>
          <span className={"privacy"}>Privacy Policy</span>
        </div>
      </div>
    </div>
  );
};
export default AssetComponentFooter;
