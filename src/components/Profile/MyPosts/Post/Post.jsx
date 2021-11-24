import React from "react";
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.posts}>
            <div className={style.item}>
                <img src="https://assets.cdn.moviepilot.de/files/2615328af993ec02077cfb0274943518785eea4453f85e6dc8bd5b09e191/limit/1024/2000/avatar26.jpg" />
                {props.message}
                <div>
                    <span>{props.likes} likes</span>
                </div>
            </div>
        </div>
    )
}
     
export default Post;