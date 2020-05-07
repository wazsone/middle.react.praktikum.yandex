import React from "react";
import { IChatGroup } from "./types";
import { generateChatData } from "../../TestData";
import { RouteComponentProps } from "react-router-dom";

export const withState = (WrappedComponent: React.ComponentType<any>) => {
    interface IState {
        chats: IChatGroup[];
    }
    interface IMatchParams {
        chatId: string;
    }
    // eslint-disable-next-line react/display-name
    return class extends React.Component<
        RouteComponentProps<IMatchParams>,
        IState
    > {
        readonly state: IState = {
            chats: [],
        };
        componentDidMount() {
            const { chats } = this.state;
            if (chats.length === 0) {
                generateChatData().then((data) =>
                    this.setState({ chats: data })
                );
            }
            const { match, history } = this.props;
            const isChatExist = chats.some(
                ({ id }) => id === match.params.chatId
            );
            if (match.params.chatId && !isChatExist) {
                history.push("/");
            }
        }
        render() {
            const chatId = this.props.match.params.chatId ?? "";
            const { chats } = this.state;
            return <WrappedComponent activeChatId={chatId} chats={chats} />;
        }
    };
};
