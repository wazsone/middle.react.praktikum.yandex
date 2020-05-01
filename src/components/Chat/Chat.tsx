import React from "react";
import { generateChatData, IChatGroup, IChatPreviewItem } from "../../TestData";
import { Preview } from "./Preview/Preview";
import { Message } from "./Screen/Message/Message";
import "./Chat.css";

interface IState {
    chats: IChatGroup[];
    activeChat: number;
}

export class Chat extends React.Component<{}, IState> {
    readonly state: IState = {
        chats: [],
        activeChat: -1,
    };

    private selectChat = (chatId: number) => {
        this.setState({ activeChat: chatId });
    };

    componentDidMount() {
        generateChatData().then((chats) => this.setState({ chats: chats }));
    }

    private preparePreviewData = (): IChatPreviewItem[] => {
        const { chats } = this.state;
        return chats.map((chat) => {
            return {
                name: chat.name,
                ...chat.messages[chat.messages.length - 1],
            };
        });
    };

    render() {
        const { chats, activeChat } = this.state;
        const messages =
            activeChat >= 0 && chats.length > 0
                ? chats[activeChat].messages
                : undefined;
        return (
            <div className="flex chat">
                <Preview
                    data={this.preparePreviewData()}
                    activeItem={activeChat}
                    selectItem={this.selectChat}
                />
                <div className="flex chat-screen">
                    {messages &&
                        messages.map((message, id) => (
                            <Message key={id} {...message} />
                        ))}
                </div>
            </div>
        );
    }
}
