import React from "react"
import Comment from "./Comment"

const comments = [
    {
        name : "홍길동",
        comment : "안녕하세요! 홍길동입니다.",
    },
    {
        name : "유재석",
        comment : "리액트 재밌어요~~.",
    },
    {
        name : "김도균",
        comment : "안녕하세요! 프론트엔드 개발자입니다.",
    },
];
function CommentList(props){
    return (
        <div>
            {comments.map((comment) => {
                return ( 
                    <Comment name = {comment.name}
                    comment = {comment.comment}/>
                );
            })}
        </div>
    );
}
export default CommentList;