export interface IUser {
    id: string;
    userName: string;
    avatar: string;
}

export interface IMessage {
    user: IUser;
    message: string;
    date: Date;
}

export interface IChatGroup {
    id: string;
    name: string;
    messages: IMessage[];
}
