import React from "react";
import { Preview } from "./Preview/Preview";
import { IChatGroup, IMessage } from "./types";
import { IChatPreviewItem } from "./Preview/Item/types";
import "./Chat.css";
import { withState } from "./withState";
import { Message } from "./Screen/Message/Message";

interface IProps {
    chats: IChatGroup[];
    activeChatId: string;
}

const Chat: React.FC<IProps> = ({ chats, activeChatId }) => {
    const preparePreviewData = (): IChatPreviewItem[] => {
        return chats.map((chat) => {
            const lastMessage = chat.messages[chat.messages.length - 1];
            return {
                id: chat.id,
                icon: lastMessage.user.avatar,
                name: chat.name,
                userName: lastMessage.user.userName,
                ...(lastMessage as Omit<IMessage, "user">),
            };
        });
    };
    const activeChat = chats.find(({ id }) => id === activeChatId);
    const messages = activeChat ? activeChat.messages : [];
    let previousUser = "";
    return (
        <div className="flex chat">
            <Preview data={preparePreviewData()} activeItemId={activeChatId} />
            <div className="flex chat-screen">
                {messages.map((message) => {
                    const inRow = String(previousUser) === message.user.id;
                    previousUser = message.user.id;
                    return (
                        <Message
                            key={`${message.user.id}${message.date.getTime()}`}
                            icon={message.user.avatar}
                            isInRow={inRow}
                            {...message}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default withState(Chat);
