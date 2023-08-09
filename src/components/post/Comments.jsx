import { Friends } from "../../dummyData"

export default function Comments(com) {
    let comment = com.comment
    return (
        <>
            <div className="postINteractionBottum">
                <img src={Friends.filter((u) => u.id === comment.userId)[0].profilePicture} alt="" className="postCommentProfileImage" />
                <div>
                    <div className='postPublicComment'>

                        <h4 className="postCommentUserName">{Friends.filter((u) => u.id === comment.userId)[0].userName}</h4>
                        <p className="postPublicCommentText">{comment.text}</p>


                    </div>
                    <div className='postCommentInteractions'>
                        <span className='postCommentLike'>Like</span>
                        <span className='postCommentReply'>Reply</span>
                        <span className='postCommentTime'>{comment.time}</span>
                    </div>
                </div>
            </div></>
    )
}
