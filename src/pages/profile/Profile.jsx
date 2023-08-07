import "./profile.css"
import Topbar from "../../components/topbar/Topbar";
import Leftbar from "../../components/leftbar/Leftbar";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar"



export default function Profile(props) {



    return (
        <>
            <Topbar setShowProfile={props.setShowProfile} setShowHome={props.setShowHome} />
            <div className="profile">
                <Leftbar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img src="./assets/post/p3.jpg" alt="" className="profileCoverImage" />
                            <img src="./assets/profile/p3.jpg" alt="" className="profileUserImage" />
                        </div>
                        <div className="profileInfo">
                            <h4 className="profileInfoName">Hira Khan</h4>
                            <span className="profileInfoDesc">Hello My Friends</span>

                        </div>
                    </div>
                    <div className="profileRightBottum">
                        <Feed />
                        <Rightbar profile />
                    </div>
                </div>


            </div >
        </>
    )
}
