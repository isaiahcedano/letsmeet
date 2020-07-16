import React from "react";
import Chat from "../Components/Chat";
import styled from '../Style.module.css'
import {generateId} from "../External_Functions";

const ChatList = ({user_database, onClickMethod}) => {

    return (
            <div className={styled.ChatList}>
                {
                    Array.isArray(user_database) ?
                        user_database.length !== 0 ?
                            user_database.map((user, index) => {
                                return (
                                    <Chat onClickAction={onClickMethod} key={index} username={
                                        user[0].match(generateId()[1]) !== null ?
                                            user[0].replace(generateId()[1], ""):
                                            user[0]
                                    } category={user[1]}/>
                                )
                            }) : <h3 style={{textAlign: "center"}}>No Users Found</h3> :
                        Object.entries(user_database).map((user, index) => {
                            return (
                                <Chat onClickAction={onClickMethod} key={index} username={
                                    user[0].match(generateId()[1]) !== null ?
                                        user[0].replace(generateId()[1], ""):
                                        user[0]
                                } category={user[1]}/>
                            )
                        })

                }
            </div>
    )
}

export default ChatList