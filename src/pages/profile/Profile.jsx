import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar"
import { currentUser } from "../home/Home";
import { Friends } from "../../dummyData";
import { useState } from "react";



export default function Profile() {
    let [user, setUser] = useState(currentUser)
    const [showLogs, setShowLogs] = useState(false)
    const [showChats, setShowChats] = useState(false)




    return (
        <>
            <Topbar user={currentUser} setShowLogs={setShowLogs} showLogs={showLogs} showChats={showChats} setShowChats={setShowChats} />
            <div className="profile">
                <Leftbar user={currentUser} showLogs={showLogs} setShowLogs={setShowLogs} />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src={Friends.filter((u) => u.id === user)[0].cover} alt="" className="profileCoverImage" />
                            <img src={Friends.filter((u) => u.id === user)[0].profilePicture} alt="" className="profileUserImage" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">{Friends.filter((u) => u.id === user)[0].userName}</h4>
                            <span className="profileInfoDesc">Hello My Friends</span>

                        </div>
                    </div>
                    <div className="profileRightBottum">
                        <Feed profile user={user} />
                        <Rightbar profile user={currentUser} setUser={setUser} showChats={showChats} />
                    </div>
                </div>


            </div >
        </>
    )
}
