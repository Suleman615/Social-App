import './leftbar.css'
import { AccountCircleOutlined, HomeOutlined, ChatOutlined, PlayCircleOutlined, GroupOutlined, BookmarkBorderOutlined, HelpOutline, WorkOutline, EventOutlined, SchoolOutlined } from "@mui/icons-material"
import { Friends } from '../../dummyData'
import { Link } from 'react-router-dom'




export default function Leftbar(props) {



    const LeftbarSnip = () => {
        return (

            <div className="leftbarWrapper">

                <ul className="leftbarList">
                    <li ><Link to="/home" className="leftbarListItem">
                        <HomeOutlined className='leftbarListIcon' />
                        <span className="leftbarItemText">Home</span></Link>
                    </li>
                    <li ><Link to="/profile" className="leftbarListItem">
                        <AccountCircleOutlined className='leftbarListIcon' />
                        <span className="leftbarItemText">Profile</span></Link>
                    </li>
                    <li className="leftbarListItem">
                        <ChatOutlined className='leftbarListIcon' />
                        <span className="leftbarItemText">Chats</span>
                    </li>
                    <li className="leftbarListItem">
                        <PlayCircleOutlined className='leftbarListIcon' />
                        <span className="leftbarItemText">Videos</span>
                    </li>
                    <li className="leftbarListItem">
                        <GroupOutlined className='leftbarListIcon' />
                        <span className="leftbarItemText">Groups</span>
                    </li>
                    <li className="leftbarListItem">
                        <BookmarkBorderOutlined className='leftbarListIcon' />
                        <span className="leftbarItemText">Bookmarks</span>
                    </li>
                    <li className="leftbarListItem">
                        <HelpOutline className='leftbarListIcon' />
                        <span className="leftbarItemText">Questions</span>
                    </li>
                    <li className="leftbarListItem">
                        <WorkOutline className='leftbarListIcon' />
                        <span className="leftbarItemText">Jobs</span>
                    </li>
                    <li className="leftbarListItem">
                        <EventOutlined className='leftbarListIcon' />
                        <span className="leftbarItemText">Events</span>
                    </li>
                    <li className="leftbarListItem">
                        <SchoolOutlined className='leftbarListIcon' />
                        <span className="leftbarItemText">Courses</span>
                    </li>


                </ul>
                <button className='leftbarShowMore'>Show More</button>
                <hr className='leftbarHr' />
                <ul className="leftbarFriendList">
                    {Friends.map((u) => (u.id === props.user ? "" :

                        <li key={u.id} className="leftbarFriend">
                            <img src={u.profilePicture} alt="" className="leftbarFriendImage" />
                            <span className="leftbarFriendNam">{u.userName}</span>
                        </li>
                    ))}



                </ul>
            </div>

        )
    }


    const LeftbarLarge = () => {
        return (<div className="largeLeftBar">
            <LeftbarSnip />
        </div>)

    }
    const LeftbarSmall = () => {
        return (
            <div className="smallLeftBar">
                <LeftbarSnip />
            </div>
        )

    }


    return (
        <>
            {props.showLogs && <LeftbarSmall />}
            <LeftbarLarge />

        </>
    )
}
