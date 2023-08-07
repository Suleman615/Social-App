import './leftbar.css'
import { RssFeedOutlined, ChatOutlined, PlayCircleOutlined, GroupOutlined, BookmarkBorderOutlined, HelpOutline, WorkOutline, EventOutlined, SchoolOutlined } from "@mui/icons-material"
import { Users } from '../../dummyData'
export default function Leftbar() {
    return (
        <div className='leftbar'>
            <div className="leftbarWrapper">
                <ul className="leftbarList">
                    <li className="leftbarListItem">
                        <RssFeedOutlined className='leftbarListIcon' />
                        <span className="leftbarItemText">Feed</span>
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
                    {Users.map((u) => (
                        <li key={u.id} className="leftbarFriend">
                            <img src={u.profilePicture} alt="" className="leftbarFriendImage" />
                            <span className="leftbarFriendNam">{u.userName}</span>
                        </li>
                    ))}



                </ul>
            </div>
        </div>
    )
}
