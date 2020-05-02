import { IMessage } from "./Screen/Message/types";

export interface IChatGroup {
    id: string;
    name: string;
    messages: IMessage[];
}
