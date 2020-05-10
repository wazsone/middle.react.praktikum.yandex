import React from "react";
import { Avatar } from "../../../Avatar/Avatar";
import { IMessageItem } from "./types";
import "./Message.css";

interface IProps extends IMessageItem {
    isInRow: boolean;
}

export const Message: React.FC<IProps> = ({
    icon,
    user,
    message,
    date,
    isInRow,
}) => {
    return (
        <div
            className={`flex ${
                isInRow ? "screen-message-in-row-item" : "screen-message-item"
            }`}
        >
            <Avatar avatarUrl={icon} userName={user.userName} hide={isInRow} />
            <div className="margin-left-8px full-width flex screen-message-text">
                <span
                    className={
                        isInRow
                            ? "hidden screen-message-in-row-name"
                            : "chat-preview-item-name"
                    }
                >
                    {`${user.userName}`}
                </span>
                <div
                    className={`${
                        isInRow ? "" : "margin-top-8px"
                    } flex-space-between`}
                >
                    <span>{`${message}`}</span>
                    <span className="margin-left-8px chat-preview-item-date">
                        {date.toLocaleTimeString("ru")}
                    </span>
                </div>
            </div>
        </div>
    );
};
