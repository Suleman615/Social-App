import "./topbar.css"
import { Search, Person, Chat, Notifications } from "@mui/icons-material"

export default function Topbar(props) {
    const gotoProfile = () => {
        props.setShowProfile(true)
        props.setShowHome(false)

    }
    const gotoHome = () => {
        props.setShowProfile(false)
        props.setShowHome(true)

    }
    return (
        <div className="topbarContainer">
            <div className="topbarLeft">
                <span className="logo">GetSocial</span>
            </div>
            <div className="topbarCenter">
                <div className="searchbar">
                    <Search className="searchIcon" />
                    <input placeholder="Search Something" className="searchInput" />
                </div>

            </div>
            <div className="topbarRight">
                <div className="topbarlinks">
                    <span onClick={gotoHome} className="topbarLink">Homepage</span>
                    <span onClick={gotoProfile} className="topbarLink">TimeLine</span>
                </div>
                <div className="topbarIcons">
                    <div className="topbarIcon">
                        <Person />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIcon">
                        <Chat />
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIcon">
                        <Notifications />
                        <span className="topbarIconBadge">1</span>
                    </div>
                </div>
                <img src="./assets/profile/p3.jpg" alt="" className="profileImage" />
            </div>


        </div>
    )
}
