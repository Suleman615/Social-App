import AddPost from '../addPost/AddPost'
import Post from '../post/Post'
import './feed.css'
import { Posts } from '../../dummyData'
import { currentUser } from '../../pages/home/Home'


export default function Feed(props) {

    const MessageFriends = () => {
        return (<>
            <div className="messageFriend">
                <button className='MessageFriendButton1'><i className="fas fa-user-group fa-lg messageFriendIcon1"></i>Firends</button>
                <button className='MessageFriendButton2'><i className="fa-brands  fa-facebook-messenger fa-lg messageFriendIcon2"></i>Send Message</button>
            </div>
        </>)
    }

    let profile = props.profile
    const GeneralFeed = () => {
        return (<><AddPost user={currentUser} />

            {Posts.map((p) => p.userId === currentUser ? "" : <Post key={p.id} post={p} />)}
        </>)
    }
    const ProfileFeed = () => {
        return (<>
            {props.user === currentUser ? <AddPost user={props.user} /> : <MessageFriends />}
            {Posts.map((p) => p.userId === props.user ? <Post key={p.id} post={p} /> : "")}
        </>)
    }


    return (
        <div className='feed'>
            <div className="feedWrapper">
                {profile ? <ProfileFeed /> : <GeneralFeed />}

            </div>
        </div>
    )
}
