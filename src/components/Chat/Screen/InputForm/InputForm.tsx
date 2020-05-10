import React from "react";
import "./InputForm.css";

interface IProps {
    hide?: boolean;
    onChange:
        | ((event: React.ChangeEvent<HTMLTextAreaElement>) => void)
        | undefined;
    onSend: () => void;
    onKeyDown: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
}

export const InputForm: React.FC<IProps> = ({
    hide,
    onChange,
    onSend,
    onKeyDown,
}) => (
    <div className={`flex chat-screen-input ${hide ? "hidden" : ""}`}>
        <textarea
            autoFocus
            spellCheck
            className="chat-screen-input-form"
            placeholder="Please write a message..."
            onChange={onChange}
            onKeyDown={onKeyDown}
        />
        <button
            className="margin-left-8px chat-screen-send-buttom"
            onClick={onSend}
        >
            SEND
        </button>
    </div>
);
