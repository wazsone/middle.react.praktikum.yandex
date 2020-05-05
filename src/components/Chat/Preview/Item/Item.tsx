import React from "react";
import { Avatar } from "./Avatar/Avatar";
import { IChatPreviewItem } from "./types";
import "./Item.css";

interface IProps extends IChatPreviewItem {
    isActive: boolean;
}

export const Item: React.FC<IProps> = ({
    icon,
    name,
    date,
    author,
    message,
    isActive,
}) => {
    const style = "flex full-width chat-preview-item ";
    return (
        <div
            className={`${style} ${
                isActive ? "chat-preview-item-selected" : ""
            }`}
        >
            <Avatar avatarUrl={icon} userName={author} />
            <div className="flex-space-between margin-left-8px chat-preview-item-text-container">
                <div className="flex-space-between margin-top-8px">
                    <span className="chat-preview-item-name">{`${name}`}</span>
                    <span className="chat-preview-item-date">{`${date
                        .toLocaleDateString("ru")
                        .replace(/\./g, "/")}`}</span>
                </div>
                <div className="chat-preview-item-author-message margin-bottom-8px">
                    <span className="chat-preview-item-author">{`${author}: `}</span>
                    <span>{`${message}`}</span>
                </div>
            </div>
        </div>
    );
};
