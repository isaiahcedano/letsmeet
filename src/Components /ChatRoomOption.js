import React from 'react'
import styled from "../Style.module.css";
import {Link} from "react-router-dom";

const ChatRoomOption = ({optionText, linkRedirection}) => {
    return (
        <Link className={styled.ChatRoomOption} to={linkRedirection}>{optionText}</Link>
    )
}

export default ChatRoomOption
