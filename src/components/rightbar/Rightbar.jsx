import './rightbar.css'
import { Friends } from '../../dummyData'
import { currentUser } from '../../pages/home/Home'




export default function Rightbar(props) {
    let profile = props.profile
    let user = props.user
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
                    {Friends.map((u) => ((u.id === currentUser) ? "" :
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
                    {Friends.map((p) => (p.id === user ? "" :
                        <div onClick={() => { props.setUser(p.id) }} key={p.id} className="rightbarFollowing">
                            <img src={p.profilePicture} alt="" className="rigntbarFollowingImage" />
                            <span className="rightbarFollowingName">{p.userName}</span>
                        </div>
                    ))}


                </div>

            </>
        )
    }


    const RightbarLarge = () => {
        return (
            <div className="rightbarLarge">
                <div className="rightbarWrapper">
                    {profile ? <ProfileRightbar /> : <HomeRighbar />}
                </div>
            </div>
        )
    }

    const RightbarSmall = () => {
        return (
            <div className="rightbarSmall">
                <div className="rightbarWrapper">
                    {profile ? <ProfileRightbar /> : <HomeRighbar />}
                </div>
            </div>
        )
    }
    return (
        <>
            {
                props.showChats && <RightbarSmall />
            }
            <RightbarLarge />
        </>

    )
}
