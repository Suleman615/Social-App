import "./home.css"
import { useState } from "react";
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar"



export const currentUser = 5

export default function Home() {
    const [showLogs, setShowLogs] = useState(false)
    const [showChats, setShowChats] = useState(false)


    return (
        <>

            <Topbar user={currentUser} setShowLogs={setShowLogs} showLogs={showLogs} showChats={showChats} setShowChats={setShowChats} />
            <div className="homeContent">
                <Leftbar user={currentUser} showLogs={showLogs} />
                <Feed user={currentUser} />
                <Rightbar user={currentUser} showChats={showChats} />
            </div>

        </>

    )
}
