import React from "react";
import { generateChatData } from "../../TestData";
import { Preview } from "./Preview/Preview";
import { Message } from "./Screen/Message/Message";
import { IChatGroup } from "./types";
import { IChatPreviewItem } from "./Preview/Item/types";
import "./Chat.css";

interface IState {
    chats: IChatGroup[];
    activeChatId: string;
}

export class Chat extends React.Component<{}, IState> {
    readonly state: IState = {
        chats: [],
        activeChatId: "",
    };

    private selectChat = (chatId: string) => {
        this.setState({ activeChatId: chatId });
    };

    componentDidMount() {
        generateChatData().then((chats) => this.setState({ chats: chats }));
    }

    private preparePreviewData = (): IChatPreviewItem[] => {
        const { chats } = this.state;
        return chats.map((chat) => {
            return {
                id: chat.id,
                name: chat.name,
                ...chat.messages[chat.messages.length - 1],
            };
        });
    };

    render() {
        const { chats, activeChatId } = this.state;
        const activeChat = chats.find(({ id }) => id === activeChatId);
        const messages = activeChat ? activeChat.messages : [];

        return (
            <div className="flex chat">
                <Preview
                    data={this.preparePreviewData()}
                    activeItemId={activeChatId}
                    selectItem={this.selectChat}
                />
                <div className="flex chat-screen">
                    {messages.map((message, id) => (
                        <Message key={id} {...message} />
                    ))}
                </div>
            </div>
        );
    }
}
