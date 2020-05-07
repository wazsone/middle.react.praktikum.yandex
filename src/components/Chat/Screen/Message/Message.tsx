import React from "react";
import { Avatar } from "../../Preview/Item/Avatar/Avatar";
import { IMessageItem } from "./types";
import "./Message.css";

export const Message: React.FC<IMessage> = ({ icon, user, message, date }) => {
    return (
        <div className="flex screen-message-item">
            <Avatar avatarUrl={icon} userName={user.userName} />
            <div className="margin-left-8px full-width flex screen-message-text">
                <span className="chat-preview-item-name">{`${user}`}</span>
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
