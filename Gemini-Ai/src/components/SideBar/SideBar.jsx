import "./SideBar.css";
import { assets } from "../../assets/assets";
import { useState } from "react";
function SideBar() {
  const [extended, setExtended] = useState(false);
  return (
    <>
      <div className="SideBar">
        <div className="top">
          <img
            className="menu"
            src={assets.menu_icon}
            onClick={() => setExtended((prev) => !prev)}
            alt="menu Icon"
          />
          <div className="new-chat">{extended ? <p>New Chat</p> : null}</div>
          {extended ? (
            <div className="recent">
              <p className="recent-title">Recent</p>
              <div className="recent-entry">
                <img src={assets.message_icon} alt="message Icon" />
                <p>React Tutorial</p>
              </div>
              <div className="recent-entry">
                <img src={assets.message_icon} alt="message Icon" />
                <p>Java Script Tutorials</p>
              </div>
            </div>
          ) : null}
        </div>
        <div className="bottom">
          <div className="bottom-item recent-entry">
            <img src={assets.question_icon} alt="" />
            {extended ? <p>Help</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.history_icon} alt="" />
            {extended ? <p>Activity</p> : null}
          </div>
          <div className="bottom-item recent-entry">
            <img src={assets.setting_icon} alt="" />
            {extended ? <p>Settings</p> : null}
          </div>
        </div>
      </div>
    </>
  );
}

export default SideBar;
