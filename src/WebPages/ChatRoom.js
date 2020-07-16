import React, {Component} from "react";
import {Users, storeMessages, UserMessages} from "../UsersDatabase";
import PrivateChat from "../Containers/PrivateChat";
import styled from '../Style.module.css'
import ChatRoomLeftSide from "../Containers/ChatRoomLeftSide";

class ChatRoom extends Component {
    state = {
        database: Users,
        user:"",
        msgDatabase: UserMessages,
    }

    storeMessages = (username, sentMessages) => {
        storeMessages(username, sentMessages)
        this.setState({
            msgDatabase:UserMessages
        })
    }

    onSearch = (event) => {
        const isArrayInArray = (inArr, arr) => {
            const arrStringified = JSON.stringify(arr)
            return inArr.some(element => {
                return JSON.stringify(element) === arrStringified
            })
        }

        const searchedUsers = Object.entries(Users).filter(user => {
            return user[0].toLowerCase().includes(event.target.value.toLowerCase())
        })

        const searchedUsersByCategories = Object.entries(Users).filter(user => {
            return Users[user[0]].toLowerCase().includes(event.target.value.toLowerCase())
        })

        searchedUsersByCategories.forEach(data => {
            if (!isArrayInArray(searchedUsers, data)) {
                searchedUsers.push(data)
            }
        })

        this.setState({
            database:searchedUsers
        })

    }


    onClick = (event) => {
        let username = ""
        if (event.target.tagName === "DIV") {
            username = event.target.children[2].textContent

        } else if (event.target.tagName === "P") {
            username = event.target.textContent
        }
        this.setState({
            user:username
        })
    }

    render() {
        return (
            <div className={styled.ChatRoom}>
                <ChatRoomLeftSide onClick={this.onClick}
                                  onSearch={this.onSearch}
                                  userDatabase={this.state.database}/>
                {
                    this.state.user !== "" ?
                        <PrivateChat default_display={true}
                                     username={this.state.user}
                                     onMessageInteraction={this.storeMessages}
                                     sentMessages={this.state.msgDatabase[this.state.user]}
                        /> :
                        <PrivateChat default_display={false} username={this.state.user}/>
                }
            </div>
        )
    }
}

export default ChatRoom