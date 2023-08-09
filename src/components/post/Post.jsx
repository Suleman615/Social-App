import { useState } from 'react'
import './post.css'
import { MoreVert, EmojiEmotions, ThumbUp, ChatBubbleOutlineOutlined, ReplyOutlined, SentimentSatisfiedOutlined, AccountCircleOutlined, GifBoxOutlined, StickyNote2Outlined } from "@mui/icons-material"
import { Friends } from '../../dummyData'
import Comments from './Comments'








export default function Post({ post }) {

    const emojis = {
        like: "fas fa-thumbs-up fa-2xl likeEmojiColor2",
        love: "fa-solid fa-heart fa-2xl heartEmojiColor",
        haha: " fa-solid fa-face-laugh fa-2xl careEmojiColor",
        care: "fa-solid fa-face-grin-hearts fa-2xl hahaEmojiColor",
        wow: "fa-solid fa-face-surprise fa-2xl wowEmojiColor",
        sad: "fas fa-face-sad-tear fa-2xl sadEmojiColor",
        angry: "fas fa-face-angry fa-2xl  angryEmojiColor"
    }

    let reactions = 0
    for (var R in post.reacts) {
        reactions = reactions + post.reacts[R]
    }

    let [classOfEmoji, setclassOfEmoji] = useState("fas fa-thumbs-up fa-2xl")
    let [reacted, setReacted] = useState(false)
    let [comments, setComments] = useState(false)
    let commentArray = post.comments;
    let [reactCount, setReactCount] = useState(reactions)


    const updateReaction = (reaction) => {

        setclassOfEmoji(emojis[reaction])
        setReacted(true)
    }

    function Emoji() {

        return <i className={classOfEmoji}></i>
    }

    function postLikeReact() {
        if (reacted) {
            setclassOfEmoji("fas fa-thumbs-up fa-2xl")
            setReacted(false)
        } else {
            setReacted(true)
            setclassOfEmoji("fas fa-thumbs-up fa-2xl likeEmojiColor2")
        }

    }





    return (

        <div className='post'>
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img src={Friends.filter((u) => u.id === post.userId)[0].profilePicture} alt="..?" className="postProfileImage" />
                        <span className='PostUser'>
                            <p className="postUserName">{Friends.filter((u) => u.id === post.userId)[0].userName}</p>
                            <p className="postDateTime">{post.date}</p>
                        </span>

                    </div>
                    <div className="postTopRight">
                        <MoreVert className='postMoreOPtion' />
                    </div>
                </div>
                <div className="postCenter">
                    <span className='postText'>{post.disc}</span>
                    <img src={post.photo} alt="" className="postImage" />
                </div>
                <div className="postBottum">
                    <div className="postBottumLeft">
                        <EmojiEmotions className='ReactedIcon1' />
                        <ThumbUp className='ReactedIcon2' />
                        <span className="postReactCount">{reactCount} People Reacted</span>
                    </div>
                    <div className="postBottumRight">
                        <span onClick={() => { setComments(true) }} className="postCommentCount">{commentArray.length} comments</span>
                    </div>
                </div>
                <div className="postInteractions">
                    <div className="postInteractionTop">
                        <span className=" interaction postLikeOption">
                            <div className='postReactionOptions'>
                                <span onClick={() => { updateReaction("like") }} className="postReactionEmoji"><i className="fas fa-thumbs-up fa-2xl likeEmojiColor"></i></span>
                                <span onClick={() => { updateReaction("love") }} className="postReactionEmoji"><i className="fa-solid fa-heart fa-2xl heartEmojiColor"></i></span>
                                <span onClick={() => { updateReaction("care") }} className="postReactionEmoji"><i className="fa-solid fa-face-grin-hearts fa-2xl careEmojiColor"></i></span>
                                <span onClick={() => { updateReaction("haha") }} className="postReactionEmoji"><i className="fa-solid fa-face-laugh fa-2xl hahaEmojiColor"></i></span>
                                <span onClick={() => { updateReaction("wow") }} className="postReactionEmoji"><i className="fa-solid fa-face-surprise fa-2xl wowEmojiColor"></i></span>
                                <span onClick={() => { updateReaction("sad") }} className="postReactionEmoji"><i className="fas fa-face-sad-tear fa-2xl sadEmojiColor"></i></span>
                                <span onClick={() => { updateReaction("angry") }} className="postReactionEmoji"><i className="fas fa-face-angry fa-2xl angryEmojiColor"></i></span>


                            </div><Emoji />
                        </span>
                        <span className=" interaction"> <ChatBubbleOutlineOutlined className='interactionIcon' />Comment</span>
                        <span className=" interaction">< ReplyOutlined className='interactionIcon' />Share</span>
                    </div>
                    <div className="postInteractionCenter">
                        <img src="./assets/profile/p6.jpg" alt="" className="postCommentProfileImage" />
                        <span className='postComment'>
                            <input placeholder='Write a comment...' className="postCommentInput" />
                            <span className='PostCommentInsertOptions'>
                                <SentimentSatisfiedOutlined className='CommentOptionIcon' />
                                <AccountCircleOutlined className='CommentOptionIcon' />
                                <GifBoxOutlined className='CommentOptionIcon' />
                                <StickyNote2Outlined className='CommentOptionIcon' />

                            </span>
                        </span>
                    </div>
                    {!comments && <><Comments comment={commentArray[0]} />

                        <p onClick={() => { setComments(true) }} className='postCommentShowMore'>Show More Comments</p></>
                    }

                    {comments &&
                        <>
                            {commentArray.map((c) => (<Comments key={c.id} comment={c} />))}
                            <p p onClick={() => { setComments(false) }} className='postCommentShowMore'>Show less</p>
                        </>
                    }

                </div>

            </div>
        </div >
    )
}
