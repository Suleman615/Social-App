import "./home.css"
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar"
import { useState } from "react";
import Profile from "../profile/Profile";





export default function Home() {
    let [showProfile, setShowProfile] = useState(false)
    let [showHome, setShowHome] = useState(true)


    return (
        <> {!showProfile && showHome && <>
            <Topbar setShowProfile={setShowProfile} setShowHome={setShowHome} />
            <div className="homeContent">
                <Leftbar />
                <Feed />
                <Rightbar />
            </div></>}
            {showProfile && !showHome && <Profile setShowProfile={setShowProfile} setShowHome={setShowHome} />}
        </>

    )
}
