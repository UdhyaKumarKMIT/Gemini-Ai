import './SideBar.css'
import { assets } from '../../assets/assets';
function SideBar(){
    return(
        <>
        
         <div className="SideBar">
            <div className="top">
                 <img className='menu' src="assets.menu_icon" alt="" />
                 <div className="new-chat">
                     <p>New Chat</p>
                 </div>
                 <div className="recent">
                    <p className="react-title">Recent</p>
                    <div className="recent-entry">
                        <img src={assets.message_icon} alt="" />
                        <p>React Tutorials</p>
                    </div>
                 </div>
            </div>
            <div className="bottom"></div>
         </div>
        </>
       
    );

}

export default SideBar