import React from "react";
import "./Avatar.css";
import logo from "../../img/logo.png";

export interface IProps {
    avatarUrl?: string;
    userName: string;
    hide?: boolean;
}

export const Avatar: React.FC<IProps> = ({ avatarUrl, userName, hide }) => (
    <img
        className={`chat-preview-item-avatar ${hide ? "hidden" : ""}`}
        src={avatarUrl ?? logo}
        alt={userName}
    />
);
