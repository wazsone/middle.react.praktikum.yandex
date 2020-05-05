import React from "react";
import { Preview } from "./Preview/Preview";
import { Message } from "./Screen/Message/Message";
import { IChatGroup } from "./types";
import { IChatPreviewItem } from "./Preview/Item/types";
import "./Chat.css";
import { withState } from "./withState";

interface IProps {
    chats: IChatGroup[];
    activeChatId: string;
}

const Chat: React.FC<IProps> = ({ chats, activeChatId }) => {
    const preparePreviewData = (): IChatPreviewItem[] => {
        return chats.map((chat) => {
            return {
                id: chat.id,
                name: chat.name,
                ...chat.messages[chat.messages.length - 1],
            };
        });
    };
    const activeChat = chats.find(({ id }) => id === activeChatId);
    const messages = activeChat ? activeChat.messages : [];
    return (
        <div className="flex chat">
            <Preview data={preparePreviewData()} activeItemId={activeChatId} />
            <div className="flex chat-screen">
                {messages.map((message, id) => (
                    <Message key={id} {...message} />
                ))}
            </div>
        </div>
    );
};

export default withState(Chat);
