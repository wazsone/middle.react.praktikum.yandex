import { IChatGroup, IMessage, IUser } from "./components/Chat/types";
import shortid from "shortid";

const randomDate = (start: Date, end: Date) => {
    return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
};

const setRandomHours = (date: Date) => {
    const h = Math.floor(Math.random() * 23);
    const m = Math.floor(Math.random() * 59);
    const s = Math.floor(Math.random() * 59);
    return new Date(date.setHours(h, m, s));
};

export interface IRandomUserName {
    title: string;
    first: string;
    last: string;
}

export interface IRandomUserIcon {
    large: string;
    medium: string;
    thumbnail: string;
}

export interface IRandomUser {
    name: IRandomUserName;
    picture: IRandomUserIcon;
}

const getRandomUsers = () => {
    const usersAmount = Math.ceil(Math.random() * 10);
    const url = `https://randomuser.me/api/?results=${usersAmount}&inc=name,picture&noinfo`;
    return fetch(url)
        .then((res) => res.json())
        .then((json) => json.results);
};

const generateUsers = async () => {
    const users = await getRandomUsers();
    return users.map((user: IRandomUser) => ({
        id: shortid.generate(),
        userName: `${user.name.last} ${user.name.first}`,
        avatar: user.picture.thumbnail,
    }));
};

const generateMessage = async (
    user: IUser,
    rndMsgs: string[],
    date: Date
): Promise<IMessage> => {
    const message = rndMsgs[Math.floor(Math.random() * rndMsgs.length)];
    return {
        user: user,
        message: message,
        date: setRandomHours(date),
    };
};

const generateGroupChat = async (
    users: IUser[],
    rndMsgs: string[]
): Promise<IChatGroup> => {
    const messages: IMessage[] = [];
    const messagesAmount = Math.ceil(25 + Math.random() * 5);
    const messagesInDay = Math.ceil(2 + Math.random() * 4);
    let rndUsers = Object.assign([], users);
    let date = randomDate(new Date(2019, 0, 0), new Date());
    for (let count = 0; count < messagesAmount; count++) {
        const usrId = Math.floor(Math.random() * rndUsers.length);
        if (count % messagesInDay === 0) {
            date = randomDate(new Date(2019, 0, 0), new Date());
        }
        messages.push(await generateMessage(rndUsers[usrId], rndMsgs, date));
        if (rndUsers.length === 1) {
            rndUsers = Object.assign([], users);
        } else {
            rndUsers.splice(usrId, 1);
        }
    }
    return {
        id: shortid.generate(),
        name: "Group Chat",
        messages: messages.sort((a, b) => a.date.getTime() - b.date.getTime()),
    };
};

const getRandomText = () => {
    const url = `https://baconipsum.com/api/?type=all-meat&paras=25&start-with-lorem=1`;
    return fetch(url)
        .then((res) => res.json())
        .then((json) => json);
};

export const generateChatData = async (): Promise<
    Record<string, IChatGroup>
> => {
    const rndMsgs = await getRandomText();
    const users = await generateUsers();
    const chatsAmount = Math.ceil(10 + Math.random() * 10);
    const chats: Record<string, IChatGroup> = {};
    for (let count = 0; count < chatsAmount; count++) {
        const groupChat = await generateGroupChat(users, rndMsgs);
        chats[groupChat.id] = groupChat;
    }
    return chats;
};

export const localUser: IUser = {
    id: shortid.generate(),
    userName: "User Name",
};
