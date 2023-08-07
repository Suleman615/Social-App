import './rightbar.css'
import { Users } from '../../dummyData'




export default function Rightbar({ profile }) {
    const HomeRighbar = () => {
        return (
            <>
                <div className="birthdayContainer">
                    <img src="./assets/gift.png" alt="" className="birthdayImage" />
                    <span className='birthdayText'><b>Aslam Khan</b> and <b>3 others friends</b> have Birthday today</span>
                </div>
                <img src="./assets/ad.jpg" alt="" className="rightbarAd" />
                <h4 className="rightbarTitle">Online Friends</h4>

                <ul className="rightbarFriendList">
                    {Users.map((u) => (
                        <li key={u.id} className="rightbarFriend">
                            <div className="rightbarProfileContainer">
                                <img src={u.profilePicture} alt="" className="rightbarProfileImage" />
                                <span className='rightbarOnline'></span>
                            </div>
                            <span className="rightbarFriendName">{u.userName}</span>
                        </li>

                    ))}

                </ul>
            </>
        )
    }

    const ProfileRightbar = () => {
        return (
            <>
                <h4 className='rightbarTitle'>User Information</h4>
                <div className="rightbarInfo">
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Country:</span>
                        <span className="rightbarInfoValue">Pakistan</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">City:</span>
                        <span className="rightbarInfoValue">Sukkur</span>
                    </div>
                    <div className="rightbarInfoItem">
                        <span className="rightbarInfoKey">Relationship:</span>
                        <span className="rightbarInfoValue">None</span>
                    </div>
                </div>
                <h4 className='rightbarTitle'>User Friends</h4>
                <div className="rightbarFollowings">
                    {Users.map((p) => (
                        <div key={p.id} className="rightbarFollowing">
                            <img src={p.profilePicture} alt="" className="rigntbarFollowingImage" />
                            <span className="rightbarFollowingName">{p.userName}</span>
                        </div>
                    ))}


                </div>

            </>
        )
    }

    return (
        <div className='rightbar'>
            <div className="rightbarWrapper">
                {profile ? <ProfileRightbar /> : <HomeRighbar />}
            </div>

        </div>
    )
}
