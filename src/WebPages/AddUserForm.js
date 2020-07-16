import React from "react";
import {capitalizeWord, generateId} from "../External_Functions";
import {userDatabaseSendData} from "../UsersDatabase";
import styled from "../Style.module.css";
import {categories} from "../categories";
import URLS from "../url_paths";

const AddUserForm = (props) => {
    const storeGroup = () => {
        let category = ""
        document.querySelectorAll(".user-radiobox").forEach(box => {
            if (box.checked) {
                category = box.value
            }
        })
        let userID = generateId()[0]
        let userName = `${document.getElementById("username").value}${userID}`
        userDatabaseSendData (userName, category, generateId()[1])
        props.history.push(URLS.CHAT_ROOM)
    }

    return (
        <div className={styled.AddUserFormContainer}>
            <div className={styled.AddForm}>
                <div className={styled.FormTitle}>
                    <label className={styled.FormMainLabel}>Username</label>
                    <input id={"username"} style={{textAlign:'center', width:'60%'}}
                           type="text"
                           required={true}/>
                </div>
                <div className={styled.Categories}>
                    {
                        Object.keys(categories).map((category, index) =>
                            <div key={index} className={styled.IndividualCategoryInputContainer}>
                                <label>{capitalizeWord(category)}</label>
                                <input type="radio"
                                       name={"category"}
                                       required={true}
                                       className={"user-radiobox"}
                                       defaultValue={category}
                                />
                            </div>
                        )
                    }
                </div>
                <button className={styled.AddFormBtn} onClick={storeGroup}>
                    Add User
                </button>
            </div>
        </div>
    )
}

export default AddUserForm