import React from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
const Main = () => {
  return (
    <>
      <div className="main">
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="user icon" />
          
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Dev.</span></p>
                <p>How can I help you today ?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p> Teach me react tutorial in depth with full explanation and code for interviews</p>
                    <img src={assets.compass_icon} alt="compass icon" />
                </div>
                <div className="card">
                    <p> Teach me react tutorial in depth with full explanation and code for interviews</p>
                    <img src={assets.bulb_icon} alt="compass icon" />
                </div>
                <div className="card">
                    <p> Teach me react tutorial in depth with full explanation and code for interviews</p>
                    <img src={assets.message_icon} alt="compass icon" />
                </div>
                <div className="card">
                    <p> Teach me react tutorial in depth with full explanation and code for interviews</p>
                    <img src={assets.code_icon} alt="compass icon" />
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Main
