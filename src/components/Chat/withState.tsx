import React from "react";
import { IChatGroup, IMessage } from "./types";
import { generateChatData, localUser } from "../../TestData";
import { RouteComponentProps } from "react-router-dom";
import { IChatProps } from "./Chat";

export const withState = (
    WrappedComponent: React.ComponentType<IChatProps>
) => {
    interface IState {
        chats: Record<string, IChatGroup>;
    }
    interface IMatchParams {
        chatId: string;
    }
    // eslint-disable-next-line react/display-name
    return class extends React.Component<
        RouteComponentProps<IMatchParams> & IChatProps,
        IState
    > {
        readonly state: IState = {
            chats: {},
        };
        componentDidMount() {
            const { chats } = this.state;
            if (Object.keys(chats).length === 0) {
                generateChatData().then((data) =>
                    this.setState({ chats: data })
                );
            }
            const { match, history } = this.props;
            const currentChatId = match.params.chatId;
            const isChatExist = !!chats[currentChatId];
            if (match.params.chatId && !isChatExist) {
                history.push("/");
            }
        }

        saveMessage = (newMessage: string) => {
            const { chats } = this.state;
            const message: IMessage = {
                user: localUser,
                message: newMessage,
                date: new Date(),
            };
            const { match } = this.props;
            const currentChatId = match.params.chatId;
            const currentChat = { ...chats[currentChatId] };
            if (currentChat) {
                currentChat.messages.push(message);
                this.setState({
                    chats: {
                        ...chats,
                        [currentChatId]: currentChat,
                    },
                });
            }
        };

        render() {
            const chatId = this.props.match.params.chatId ?? "";
            const { chats } = this.state;
            return (
                <WrappedComponent
                    activeChatId={chatId}
                    chats={Object.values(chats)}
                    saveMessage={this.saveMessage}
                />
            );
        }
    };
};
