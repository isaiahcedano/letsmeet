import React from "react";
import {Link} from "react-router-dom";
import styled from '../Style.module.css'
import URLS from "../url_paths";

const MainPage = () => {
    return (
        <div className={styled.HomePage}>
            <header className={styled.HomePageHeader}>
                <Link to={URLS.CHAT_ROOM} className={styled.LinkTypeHeader}>
                    ChatRoom
                </Link>
                <Link to={URLS.CHANGE_NICKNAME_FORM} className={styled.LinkTypeHeader}>
                    Change NickName
                </Link>
            </header>
            <p className={styled.LogoHomePage}>Let's Meet</p>
        </div>
    )
}

export default MainPage