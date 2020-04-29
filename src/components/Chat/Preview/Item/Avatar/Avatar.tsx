import React from "react";
import "./Avatar.css";

export interface IProps {
    avatarUrl: string;
    userName: string;
}

export const Avatar: React.FC<IProps> = ({ avatarUrl, userName }) => {
    return (
        <img
            className="margin-left-8px full-height chat-preview-item-avatar"
            src={avatarUrl}
            alt={userName}
        />
    );
};
