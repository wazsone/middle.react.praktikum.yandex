import React from "react";
import { generateChatData, IChatGroup, IChatPreviewItem } from "../../TestData";
import { Preview } from "./Preview/Preview";
import "./Chat.css";

interface IState {
    chats: IChatGroup[];
}

export class Chat extends React.Component<{}, IState> {
    readonly state: IState = {
        chats: [],
    };

    componentDidMount() {
        generateChatData().then((chats) => this.setState({ chats: chats }));
    }

    private preparePreviewData = (): IChatPreviewItem[] => {
        const { chats } = this.state;
        const data = chats.map((chat) => {
            return {
                name: chat.name,
                ...chat.messages[chat.messages.length - 1],
            };
        });
        return data.sort((a, b) => b.date.getTime() - a.date.getTime());
    };

    render() {
        return (
            <div className="flex chat">
                <Preview data={this.preparePreviewData()} />
                <div className="flex chat-screen">{"Some random text"}</div>
            </div>
        );
    }
}
