import React from 'react'
import styled from '../Style.module.css'
import {categories} from "../categories";
import ChatIcon from "./ChatIcon";

const Chat = ({category, username, onClickAction}) => {

    let chat_icon_category = ""
    let user_valid = false

    if (Object.keys(categories).includes(category)) {
        if (category === "romance") {
            chat_icon_category =
                (<img className={styled.ChatIconCategory}
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Emojione_1F60D.svg/800px-Emojione_1F60D.svg.png"
                alt={""}/>)

        } else if (category === "friendship") {
            chat_icon_category = 
                (<img src="https://upload.wikimedia.org/wikipedia/commons/0/0a/Emojione_1F604.svg"
                         className={styled.ChatIconCategory}
                alt={""}/>)

        } else if (category === "business") {
            chat_icon_category =
                (<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAbFBMVEX///8AAABgYGCMjIyHh4eCgoK+vr63t7fv7+8lJSX8/Pz19fX5+fkpKSnp6emUlJTg4ODZ2dnExMRxcXE7OztOTk4vLy+jo6PQ0NBpaWmvr68JCQk2NjadnZ1aWlqpqalGRkYeHh4YGBh6enqV+iv4AAAEOklEQVRoge2bWZurIAyGxXaqda3axdrN5f//x3GpEiB2ZgA558JcTeGxb4EQPhLHsqQsjU83EjZOJPe4iuV3MtqXb5i9IcDCg1F2Qxi7maQ/CGdnczMf8ex23Y3Bv0S4uYkX2YRcDLFzDH4yBL9g8L0heIzBq8AMXNhoPdwzA99h8NAM23IxeGYIbt0R+M4UvBDZd0P+1tr53w3csg48e2OOLQS5xtA+e1tSAnZsFN2aV1TjJktMsztLisvjlZqd8d5813X93tzOTP6CyN6zFjauKbYXilHmnBqCo2eqKS2DsgmxTYRYVMn0tvzUB9ihZircoFpitOeyXu89P8FJtejUo8LZ1NTbP8EXVFTJj2xCrkvBs1/AF7k2+ofi+hs2IS/N5OSRidJt1jSe8d7l8/4STZ+aRZIBZIO07Wv6tzaXL0VO6CJzEaYV/VCMT6tlTLDdtUPP1RRq6iFXEdnHTGUJkAtKO6wUgTfWi36o7UtgRZ3uOCrAHQGSd80I/M4FwDIZNI8CPWAJ1Tt4I57Q7jAfkVgtXX7mqXoom2JKtWI5ggIcPHV0AnMg73aXdji3U7OL4Fdgi/4EP+rhHkHPSX7sbp4feG0eVAi96xhyo8+IVTylVm2PHuy9K97agTouH4xVfJ43cQ901jvjk9SBLx4E+saOa/chF9hu9uMR6dR01nkN8t299aObOf4eWtj+/CHX60dc5920FERcbE7ftu368ZFrSUxz98Qm3my21fipDCx3vxybq3E4fRtdh2hG3+phM6moOh8aaawtAmzSb5p0FdQwU12JnvkZWojQpemAp5fTzcydYunR908CXBebYsgVhKwMgAJ+N2grwESTLzMXEyp32lASnJZhg01uw1hN8+BdhIVRSNt6dzbtpArexb3pN4VdIKPiVivb2uLTSZv7CDvR9eYnaWaigM30iB2uiUGpeb17o/cX5lbi0UW2KF13oZHKBLaQR/fXe0a8V6w/QzNdk0PmjKQat9aOpEbjaw6bQczXfT0HNuNxIO7Wy+UiaTxh78FAyCtmpHLhNnSeKki0iX0GBFUlxSTUj+ASTx5XsQwg3RoVOFqszYROLt0I0kUqgQ3LehD73Uk9zmGfAmkElVzcRzj1OA4Os3Q5/5Wa4FY1N7mgwKxwNfsMH+ddTDmB5+TTz5/h71B6FW/8vo6h/wC3kviZofU8sE14h9AGnzWg2kvZIPsBnjucsYsLEmeyYW4WHoiinF1dj8Zl7XA0IcHU86bzJZTNQM3Ct1gHm9wf5a300aYCjwafs6VTMCpwy48rUiqoGSW4qknAg3THmexbBX+He0giWDLn+Xc4WluWW/i/wzU6wwpf4St8ha/wFb7CV/gKX+ErfIWv8BX+/8DR12Cucx3buZ8r9/8t6Lu1XZEFfQuly0Fi72nJZp5T4c2HaihkOUJHOHQUwptw51+kfr8BvQs7jYGgc6kAAAAASUVORK5CYII="
                         className={styled.ChatIconCategory}
                alt={""}/>)

        } else if (category === "travel") {
            chat_icon_category =
                (<img src="data:image/png;base64,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"
                         className={styled.ChatIconCategory}
                alt={""}/>)
        }
    }

    if (username !== undefined) {
        user_valid = true
    }

    return (
        user_valid && chat_icon_category !== "" ?
            <div onClick={onClickAction} className={styled.ChatBox}>
                <ChatIcon/>
                {chat_icon_category}
                <p className={styled.Username}>{username}</p>
            </div> :
            null
    )
}

export default Chat