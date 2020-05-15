import React, { Fragment } from "react";
import { Preview } from "./Preview/Preview";
import { IChatGroup, IMessage } from "./types";
import { IChatPreviewItem } from "./Preview/Item/types";
import "./Chat.css";
import { withState } from "./withState";
import { DateSeparator } from "./Screen/DateSeparator/DateSeparator";
import { Message } from "./Screen/Message/Message";
import { InputForm } from "./Screen/InputForm/InputForm";

export interface IChatProps {
    chats: IChatGroup[];
    activeChatId: string;
    onUserMessageChanged: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    onMessageSent: () => void;
    handleKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

const Chat: React.FC<IChatProps> = ({
    chats,
    activeChatId,
    onUserMessageChanged,
    onMessageSent,
    handleKeyDown,
}) => {
    const preparePreviewData = (): IChatPreviewItem[] => {
        return chats.map((chat) => {
            const lastMessage = chat.messages[chat.messages.length - 1];
            return {
                id: chat.id,
                avatar: lastMessage.user.avatar,
                name: chat.name,
                userName: lastMessage.user.userName,
                ...(lastMessage as Omit<IMessage, "user">),
            };
        });
    };
    const renderChatMessages = () => {
        const activeChat = chats.find(({ id }) => id === activeChatId);
        const messages = activeChat ? activeChat.messages : [];
        let previousUser = "";
        let previousDate: number = new Date(0).setHours(0, 0, 0, 0);
        return messages.map((message) => {
            const inRow = String(previousUser) === message.user.id;
            previousUser = message.user.id;
            const msgDate = new Date(message.date).setHours(0, 0, 0, 0);
            const addDateSeparator = previousDate !== msgDate;
            previousDate = msgDate;
            return (
                <Fragment key={`${message.date.getTime()}`}>
                    {addDateSeparator ? (
                        <DateSeparator date={message.date} />
                    ) : undefined}
                    <Message
                        avatar={message.user.avatar}
                        isInRow={!addDateSeparator && inRow}
                        {...message}
                    />
                </Fragment>
            );
        });
    };

    const messages = renderChatMessages();
    return (
        <div className="flex chat">
            <Preview data={preparePreviewData()} activeItemId={activeChatId} />
            <div className="flex chat-screen">
                <div className="flex chat-screen-messages">{messages}</div>
                <InputForm
                    hide={messages.length === 0}
                    onChange={onUserMessageChanged}
                    onSend={onMessageSent}
                    onKeyDown={handleKeyDown}
                />
            </div>
        </div>
    );
};

export default withState(Chat);
