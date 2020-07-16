import React, {Component} from "react";
import styled from '../Style.module.css'

class MessageBox extends Component {
    state = {
        showOptions:false,
        showOptionsBtn: false
    }

    componentDidMount() {
        document.getElementsByTagName("body")[0].addEventListener("click", this.hideOptions)
    }

    componentWillUnmount() {
        document.getElementsByTagName("body")[0].removeEventListener("click", this.hideOptions)
    }

    showOptionsBtn = () => {
        this.setState({
            showOptionsBtn:true
        })
    }

    hideOptionsBtn = () => {
        this.setState({
            showOptionsBtn:false
        })
    }

    showOptions = () => {
        this.setState({
            showOptions:true
        })
    }

    hideOptions = (event) => {
        if (event.target.tagName !== "P") {
            this.setState({
                showOptions:false
            })}
    }

    removeMessage = () => {
        this.props.messageOptions.Remove(this.props.message)
    }

    render() {
        return (
            (this.props.message === undefined) || (this.props.message === "") ?
                null :
                <div onMouseLeave={this.hideOptionsBtn}
                     onMouseMove={this.showOptionsBtn}
                     className={`${Boolean(this.props.messageType) ?
                    styled.MessageSentContainer :
                    styled.MessageRecievedContainer}`}>
                    <div className={styled.MessageOptionsContainer}>
                        {
                            this.state.showOptionsBtn ?
                            !this.state.showOptions ?
                                <span className={styled.MessageOptionsBtn} onClick={this.showOptions}>
                                    ...
                                </span> :
                                null :
                                null
                        }
                        {(this.state.showOptions && (this.props.messageOptions !== undefined)) ?
                            <div className={styled.MessageOptions}>
                                {
                                    Object.entries(this.props.messageOptions).map((option, index) => {
                                        if (option[0] === "Remove") {
                                            return <p key={index}
                                               onClick={this.removeMessage}
                                               className={styled.MessageOption}>
                                                {option[0]}
                                            </p>
                                        } else {
                                            return <p key={index}
                                                      onClick={option[1]}
                                                      className={styled.MessageOption}>
                                                {option[0]}
                                            </p>
                                        }
                                    })
                                }
                            </div> :
                            null
                        }
                    </div>
                    <div className={styled.MessageDateContainer}>
                        <p className={`${Boolean(this.props.messageType) ?
                            styled.MessageSent :
                            styled.MessageRecieved}`}>
                            {this.props.message.replace(this.props.regex, "")}
                        </p>
                        <p className={styled.SentDateMessage}>{this.props.msgDate}</p>
                    </div>
                </div>
        )
    }
}

export default MessageBox