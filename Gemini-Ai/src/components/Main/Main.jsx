import React, { useContext, useState } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { Context } from "../context";
const Main = () => {
  const { onSent, loading, resultData, setInput, input } = useContext(Context);
  const {hideGreeting} = useContext(Context);
  return (
    <>
      <div className="main">
        <div className="nav">
          <p>Gemini</p>
          <img src={assets.user_icon} alt="user icon" />
        </div>
        <div className="main-container">
          {
            !hideGreeting && (
              <div className="greeting">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today Gemini AI? </p>
            </div>
            
            )
          }

          {
            !hideGreeting && (
 
              <div className="cards">
              <div className="card">
                <p>
                  Teach me react tutorial in depth with full explanation and code
                  for interviews
                </p>
                <img src={assets.compass_icon} alt="compass icon" />
              </div>
              <div className="card">
                <p>
                  Teach me react tutorial in depth with full explanation and code
                  for interviews
                </p>
                <img src={assets.compass_icon} alt="compass icon" />
              </div>
              <div className="card">
                <p>
                  Teach me react tutorial in depth with full explanation and code
                  for interviews
                </p>
                <img src={assets.bulb_icon} alt="buld icon" />
              </div>
              <div className="card">
                <p>
                  Teach me react tutorial in depth with full explanation and code
                  for interviews
                </p>
                <img src={assets.bulb_icon} alt="buld icon" />
              </div>
              <div className="card">
                <p>
                  Teach me react tutorial in depth with full explanation and code
                  for interviews
                </p>
                <img src={assets.bulb_icon} alt="buld icon" />
              </div>
              <div className="card">
                <p>
                 give me code for AI image generation 
                </p>
                <img src={assets.bulb_icon} alt="buld icon" />
              </div>
              <div className="card">
                <p>
                  Teach me react tutorial in depth with full explanation and code
                  for interviews
                </p>
                <img src={assets.message_icon} alt="message icon" />
              </div>
              <div className="card">
                <p>
                   Give me code for Gemini API Request and response and also add css
                </p>
                <img src={assets.code_icon} alt="compass icon" />
              </div>
            </div>
            )
          }
        

          <div className="main-bottom">
            <div className="search-box">
              <input
                type="text"
                placeholder="Enter a prompt"
                onChange={(e) => setInput(e.target.value)}
                value={input}
              />
              <div>
                <img src={assets.gallery_icon} alt="Gallery Icon" />
                <img src={assets.mic_icon} alt="Mic Icon" />
                <img
                  src={assets.send_icon}
                  onClick={() => onSent(input)}
                  alt="Send Icon"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>

            {loading ? (
              <p>Loading...</p>
            ) : resultData ? (

              <div className="response-box">
                <strong>Response:</strong>
                <p>{resultData}</p>
              </div>
            ) : null}

            <div className="bottom-info">
              <p>
                Gemini may display inaccurate information, including about
                people, so double-check its responses.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
