import React from "react";
import "./tabs.scss";
import Tabs from "./tabs";
import TabPane from "./tab-pane";

export default function AppTab() {
  return (
    <div className="App">
      <div className="container">
        <Tabs>
          <TabPane style={{marginRight: "50%"}} name="info" key="1">
            Content of Tab Pane 1
          </TabPane>
          <TabPane name="Position" key="2">
            Content of Tab Pane 2
          </TabPane>
          <TabPane name="Advance" key="3">
            Content of Tab Pane 3
          </TabPane>
        </Tabs>
      </div>
      
    </div>
  );
}