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
        <div className="flex chat-preview-item">
            <img
                className="margin-left-4px chat-preview-item-avatar"
                src={data.icon}
                alt="Avatar"
            />
            <div className="flex-space-between margin-left-4px chat-preview-item-text-container">
                <div className="flex-space-between margin-top-4px">
                    <span>{`${data.name}`}</span>
                    <span>{`${data.date.toLocaleDateString("ru")}`}</span>
                </div>
                <div className="chat-preview-item-author-message margin-bottom-4px">
                    <span>{`${data.author}: `}</span>
                    <span>{`${data.message}`}</span>
                </div>
            </div>
        </div>
    );
};
