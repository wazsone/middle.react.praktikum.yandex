import React from "react";
import "./ChatPreviewItem.css";

export interface IChatPreviewData {
    icon: string;
    name: string;
    date: Date;
    author: string;
    message: string;
}

interface IProps {
    data: IChatPreviewData;
}

export const ChatPreviewItem: React.FC<IProps> = ({ data }) => {
    return (
        <div className="flex margin-top-8px chat-preview-item">
            <img
                className="margin-left-8px chat-preview-item-avatar"
                src={data.icon}
                alt="Avatar"
            />
            <div className="flex-space-between margin-left-8px chat-preview-item-text-container">
                <div className="flex-space-between margin-top-8px">
                    <span className="chat-preview-item-name">{`${data.name}`}</span>
                    <span className="chat-preview-item-date">{`${data.date
                        .toLocaleDateString("ru")
                        .replace(/\./g, "/")}`}</span>
                </div>
                <div className="chat-preview-item-author-message margin-bottom-8px">
                    <span className="chat-preview-item-author">{`${data.author}: `}</span>
                    <span>{`${data.message}`}</span>
                </div>
            </div>
        </div>
    );
};
