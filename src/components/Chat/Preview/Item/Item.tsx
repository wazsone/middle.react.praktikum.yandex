import React from "react";
import "./Item.css";

export interface IChatPreviewItem {
    icon: string;
    name: string;
    date: Date;
    author: string;
    message: string;
}

export const Item: React.FC<IChatPreviewItem> = ({
    icon,
    name,
    date,
    author,
    message,
}) => {
    return (
        <div className="flex margin-top-8px full-width chat-preview-item">
            <img
                className="margin-left-8px full-height chat-preview-item-avatar"
                src={icon}
                alt="Avatar"
            />
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
