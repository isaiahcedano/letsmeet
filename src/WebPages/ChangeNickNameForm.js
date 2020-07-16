import React from "react";
import {generateId} from "../External_Functions";
import URLS from "../url_paths";
import styled from "../Style.module.css";
import {setUsername} from "../UsersDatabase";

const ChangeNickNameForm = (props) => {
    const changeNickname = () => {
        let nameID = generateId()[0]
        let name = `${document.getElementById("nickname").value}${nameID}`
        setUsername(name)
        props.history.push(URLS.HOME_PAGE)
    }

    return (
        <div className={styled.ChangeNicknameFormContainer}>
            <div className={styled.ChangeNicknameForm}>
                <div className={styled.FormTitle}>
                    <label className={styled.FormMainLabel}>New NickName</label>
                    <input id={"nickname"} style={{textAlign:'center', width:'60%'}}
                           type="text"
                           required={true}/>
                </div>
                <button type={"submit"} className={styled.ChangeNicknameFormBtn} onClick={changeNickname}>
                    Change NickName
                </button>
            </div>
        </div>
    )
}

export default ChangeNickNameForm