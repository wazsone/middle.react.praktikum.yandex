import React from "react";
import { testData } from "../../TestData";
import { Preview } from "./Preview/Preview";
import "./Chat.css";

export const Chat: React.FC = () => {
    return (
        <div className="flex chat">
            <Preview data={testData} />
            <div className="flex chat-screen">{"Some random text"}</div>
        </div>
    );
};
