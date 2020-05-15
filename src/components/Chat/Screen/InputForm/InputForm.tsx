import React from "react";
import "./InputForm.css";

interface IProps {
    hide?: boolean;
    saveMessage: (newMessage: string) => void;
}

interface IState {
    userMessage: string;
}

export class InputForm extends React.Component<IProps, IState> {
    readonly state: IState = {
        userMessage: "",
    };

    private onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({ userMessage: e.target.value });
    };

    private handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        const { key } = e;
        if (key === "Enter") {
            e.preventDefault();
            if (e.shiftKey) {
                this.setState((prevState) => ({
                    userMessage: `${prevState.userMessage}\n`,
                }));
                console.log(this.state.userMessage);
                return;
            } else {
                return this.onSend();
            }
        }
    };

    private onSend = () => {
        const { userMessage } = this.state;
        if (userMessage.length === 0) {
            return;
        }
        this.props.saveMessage(userMessage);
        this.setState({ userMessage: "" });
        this.forceUpdate();
    };

    render() {
        const { hide } = this.props;
        const { userMessage } = this.state;
        return (
            <div className={`flex chat-screen-input ${hide ? "hidden" : ""}`}>
                <textarea
                    autoFocus
                    spellCheck
                    className="chat-screen-input-form"
                    placeholder="Please write a message..."
                    onChange={this.onChange}
                    onKeyDown={this.handleKeyDown}
                    value={userMessage}
                />
                <button
                    disabled={userMessage.length === 0}
                    className="margin-left-8px chat-screen-send-buttom"
                    onClick={this.onSend}
                >
                    SEND
                </button>
            </div>
        );
    }
}
