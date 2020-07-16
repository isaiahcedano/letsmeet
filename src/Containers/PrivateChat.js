import React, {Component} from "react";
import ChatIcon from "../Components /ChatIcon";
import styled from '../Style.module.css'
import SendMessageBox from "../Components /SendMessageBox";
import MessageBox from "../Components /MessageBox";
import ChatRoomOption from "../Components /ChatRoomOption";
import URLS from "../url_paths";
import {generateId} from "../External_Functions";
import {DefaultUserName} from "../UsersDatabase";

class PrivateChat extends Component {
    sentMessages = this.props.sentMessages !== undefined ? this.props.sentMessages : {}
    state = {
        sentMessages: this.props.sentMessages !== undefined ?
            this.props.sentMessages : this.sentMessages,
        recievedMessages:[],
        sentMsgDate: "",
    }

    usedMsgIds = []

    getTime = () => {
        let today = new Date()
        let time
        if (today.getHours() > 12) {
            time = `${today.getHours()-12}:${this.getTimeMinutes()}pm`
        } else if (today.getHours() === 24) {
            time = `${today.getHours()-12}:${this.getTimeMinutes()}am`
        } else {
            time = `${today.getHours()}:${this.getTimeMinutes()}am`
        }
        return time
    }

    getTimeMinutes = () => {
        const today = new Date()
        let minutes = today.getMinutes()
        if (minutes.toString().length === 1) {
            minutes = `0${minutes}`
        }
        return minutes
    }

    sendMsgByClick = () => {
        this.sentMsgDate = this.getTime()
        let messageID = ""
        do {
            messageID = generateId()[0]
        } while (this.usedMsgIds.includes(messageID))


        const message = `${document.querySelectorAll("input")[1].value}${messageID}`
        this.usedMsgIds.push(messageID)
        this.sentMessages[message] = this.sentMsgDate
        this.setState({
            sentMessages: this.sentMessages,
        })
        this.props.onMessageInteraction(this.props.username, this.sentMessages)
        document.querySelectorAll("input")[1].value = ""
    }

    sendMsgByInput = (event) => {
        if (event.which === 13) {
            this.sentMsgDate = this.getTime()
            let messageID = ""
            do {
                messageID = generateId()[0]
            } while (this.usedMsgIds.includes(messageID))

            const message = `${event.target.value}${messageID}`
            this.usedMsgIds.push(messageID)
            this.sentMessages[message] = this.sentMsgDate
            this.setState({
                sentMessages: this.sentMessages,
            })
            this.props.onMessageInteraction(this.props.username, this.sentMessages)
            event.target.value = ""
        }
    }

    remvMsg = (msg) => {
        delete this.sentMessages[msg]
        this.setState({
            sentMessages: this.sentMessages
        })
        this.props.onMessageInteraction(this.props.username, this.sentMessages)
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.username !== this.props.username) {
            this.sentMessages = this.props.sentMessages !== undefined ? this.props.sentMessages : {}
            this.setState({
                sentMessages:this.props.sentMessages !== undefined ? this.props.sentMessages : this.sentMessages
            })
        }
    }

    render() {
        return (
            this.props.default_display ?
                <div className={styled.PrivateChat}>
                    <header className={styled.ChatRoomHeader}>
                        <div className={styled.UsernameIconContainer}>
                            <ChatIcon/>
                            <h3 className={styled.UsernamePrivateRoom}>{this.props.username}</h3>
                        </div>
                        <div className={styled.ChatRoomOptions}>
                            <ChatRoomOption optionText={"Create Group"} linkRedirection={URLS.CREATE_GROUP_FORM}/>
                            <ChatRoomOption optionText={"Add User"} linkRedirection={URLS.ADD_USER_FORM}/>
                            <ChatRoomOption optionText={"Home Page"} linkRedirection={URLS.HOME_PAGE}/>
                        </div>
                    </header>
                    <div className={styled.MessageContainer}>
                        {
                            this.state.recievedMessages.map((msg, index) =>
                                <MessageBox message={msg}
                                            key={index}
                                            messageType={0}
                                            messageOptions={{"Remove":this.remvMsg}}/>
                            )
                        }
                        {
                            Object.keys(this.state.sentMessages).map((msg, index) =>
                                <MessageBox message={msg}
                                            key={index}
                                            messageType={1}
                                            messageOptions={{"Remove":this.remvMsg}}
                                            msgDate={this.state.sentMessages[msg]}
                                            regex={generateId()[1]}
                                />
                            )
                        }
                    </div>
                    <SendMessageBox onClickAction={this.sendMsgByClick}
                                    onKeyPressAction={this.sendMsgByInput}/>
                    <p className={styled.DefaultUsername}>
                        {DefaultUserName}
                    </p>
                </div> :
                <div className={styled.PrivateChatDefault}>
                    <h2 className={styled.ChatRoomGreeting}>Welcome</h2>
                </div>
        )
    }
}

export default PrivateChat