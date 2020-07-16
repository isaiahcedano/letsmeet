import React from "react";
import styled from "../Style.module.css";
import SearchBar from "../Components /SearchBar";
import ChatList from "../Containers/ChatList";

const ChatRoomLeftSide = ({onSearch, onClick, userDatabase}) => {
    return (
        <div className={styled.ChatRoomLeftSide}>
            <SearchBar searchAction={onSearch}/>
            <ChatList onClickMethod={onClick} user_database={userDatabase}/>
        </div>
    )
}

export default ChatRoomLeftSide