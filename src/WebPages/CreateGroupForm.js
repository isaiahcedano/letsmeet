import React from "react";
import styled from '../Style.module.css'
import {Users, userDatabaseSendData} from "../UsersDatabase";
import {generateId, capitalizeWord} from "../External_Functions";
import {categories} from "../categories";
import URLS from "../url_paths";

const CreateGroupForm = (props) => {
    const storeGroup = () => {
        let category = ""
        document.querySelectorAll(".user-radiobox").forEach(box => {
            if (box.checked) {
                category = box.value
            }
        })
        let groupID = generateId()[0]
        let groupName = `${document.getElementById("group-name").value}${groupID}`
        userDatabaseSendData (groupName, category, generateId()[1])
        props.history.push(URLS.CHAT_ROOM)
    }

    let users = Object.keys(Users).map(user => user)

    return (
        <div className={styled.CreateGroupFormContainer}>
            <div className={styled.GroupForm}>
                <div className={styled.FormTitle}>
                    <label className={styled.FormMainLabel}>Group Name</label>
                    <input id={"group-name"} style={
                        {textAlign:'center', width:'60%'}
                    }
                           type="text"
                           required={true}/>
                </div>
                <div className={styled.Users}>
                    {
                        users.map((user, index) =>
                            <div className={styled.GroupFormInputContainer} key={index}>
                                <label>{user.replace(generateId()[1], "")}</label>
                                <input type="checkbox"
                                       className={"user-checkbox"}
                                       defaultValue={user}
                                />
                            </div>
                        )
                    }
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
                <button className={styled.GroupFormBtn} onClick={storeGroup}>
                    Create Group
                </button>
            </div>
        </div>
    )
}

export default CreateGroupForm