import './addPost.css'
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material"

export default function AddPost() {
    return (
        <div className="addPost">
            <div className="addPostWrapper">
                <div className="addPostTop">
                    <img src="./assets/profile/p7.jpg" alt="" className="addPostImage" />
                    <input placeholder="What's in your mind..." className="addPostInput" />
                </div>
                <hr className="addPostHr" />
                <div className="addPostBottum">
                    <div className="addPostOptions">
                        <div className="addPostOption">
                            <PermMedia htmlColor='tomato' className='addPostOptionIcon' />
                            <span className='addPostOptionText'>Photo or Video</span>
                        </div>
                        <div className="addPostOption">
                            <Label htmlColor='blue' className='addPostOptionIcon' />
                            <span className='addPostOptionText'>Tags</span>
                        </div>
                        <div className="addPostOption">
                            <Room htmlColor='green' className='addPostOptionIcon' />
                            <span className='addPostOptionText'>Location</span>
                        </div>
                        <div className="addPostOption">
                            <EmojiEmotions htmlColor='goldenrod' className='addPostOptionIcon' />
                            <span className='addPostOptionText'>Feelings</span>
                        </div>

                    </div>
                    <button className='addPostShareButton'>Share</button>
                </div>
            </div>
        </div>
    )
}
