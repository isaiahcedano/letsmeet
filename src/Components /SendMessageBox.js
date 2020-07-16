import React from "react";
import styled from '../Style.module.css'
import SendMessageButton from "./SendMessageButton";

const SendMessageBox = ({onClickAction, onKeyPressAction}) => {
    return (
        <div className={styled.SendMessageBoxContainer}>
            <input type="text" className={styled.SendMessageBox} onKeyPress={onKeyPressAction}/>
            <SendMessageButton onClickAction={onClickAction}>Send Message</SendMessageButton>
        </div>
    )
}

export default SendMessageBox