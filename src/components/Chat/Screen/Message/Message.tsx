import React from "react";
import { IMessage } from "../../../../TestData";
import { Avatar } from "../../Preview/Item/Avatar/Avatar";
import "./Message.css";

interface IProps extends IMessage {}

export const Message: React.FC<IProps> = ({ icon, author, message, date }) => {
    return (
        <div className="flex screen-message-item">
            <Avatar avatarUrl={icon} userName={author} />
            <div className="margin-left-8px full-width flex screen-message-text">
                <span className="chat-preview-item-name">{`${author}`}</span>
                <div className="margin-top-8px flex-space-between">
                    <span>{`${message}`}</span>
                    <span className="chat-preview-item-date">{`${date
                        .toLocaleDateString("ru")
                        .replace(/\./g, "/")}`}</span>
                </div>
            </div>
        </div>
    );
};
