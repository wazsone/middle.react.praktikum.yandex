import { IMessage } from "./Screen/Message/types";

export interface IChatGroup {
    name: string;
    messages: IMessage[];
}
