import React from "react";
import styled from "../Style.module.css";

const SendMessageButton = (props) => {
    const {onClickAction} = props
    return (
        <button type="submit"
                onClick={onClickAction}
                className={styled.SendMessageBtn}>{props.children}</button>
    )
}

export default SendMessageButton