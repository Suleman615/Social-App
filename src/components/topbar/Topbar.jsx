import "./topbar.css"
import { useState } from "react"
import { Link } from "react-router-dom"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"
import UserSettings from "../user settings/UserSettings"
import { Friends } from "../../dummyData"

export default function Topbar(props) {
    const [showSettings, setShowSettings] = useState(false)

    const gotoSettings = () => {
        setShowSettings(true)
    }

    const gotoLogs = () => {
        props.setShowLogs(!props.showLogs)
    }
    const gotoChats = () => {
        props.setShowChats(!props.showChats)
    }
    return (
        <>
            {showSettings && <UserSettings setShowSettings={setShowSettings} />}
            <div className="topbarContainer">
                <div className="topbarLeft">
                    <Link to="/home" className="logo">GetSocial</Link>
                </div>
                <div className="topbarCenter">
                    <div className="searchbar">
                        <Search className="searchIcon" />
                        <input placeholder="Search Something" className="searchInput" />
                    </div>

                </div>
                <div className="topbarRight">

                    <div className="topbarIcons">
                        <div className="topbarIcon">
                            <Person onClick={gotoLogs} />
                            <span className="topbarIconBadge">1</span>
                        </div>
                        <div className="topbarIcon">
                            <Chat />
                            <span className="topbarIconBadge">1</span>
                        </div>
                        <div onClick={gotoChats} className="topbarIcon">
                            <Notifications />
                            <span className="topbarIconBadge">1</span>
                        </div>
                    </div>
                    <img onClick={gotoSettings} src={Friends.filter((u) => u.id === props.user)[0].profilePicture} alt="" className="profileImage" />
                </div>


            </div>
        </>
    )
}
