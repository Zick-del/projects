import React from "react";
import style from './Profile.module.css';


const Profile = () => {
    return (
    <div className={style.content}>

        <div>
            <img width="1000px" src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg" alt="Mountains" />
        </div>

        <div>ava + descr</div>

        <div>My posts
            <div>New post</div>
            <div className={style.item}>Post1</div>
            <div>Post2</div>
        </div>

    </div>
    )
}

export default Profile;