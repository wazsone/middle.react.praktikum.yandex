import React from "react";
import { testData } from "../../TestData";
import { List } from "./Preview/List";
import "./Chat.css";

export const Chat: React.FC = () => {
    return (
        <div className="flex chat">
            <List data={testData} />
            <div className="flex chat-screen">{"Some random text"}</div>
        </div>
    );
};
