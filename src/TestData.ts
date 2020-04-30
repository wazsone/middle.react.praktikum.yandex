const randomDate = (start: Date, end: Date) => {
    return new Date(
        start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
};

export interface IChatPreviewItem {
    icon: string;
    name: string;
    date: Date;
    author: string;
    message: string;
}

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

export interface IMessage {
    icon: string;
    author: string;
    message: string;
    date: Date;
}

export interface IChatGroup {
    name: string;
    messages: IMessage[];
}

const generateMessage = (user: IRandomUser): IMessage => {
    return {
        icon: user.picture.thumbnail,
        author: `${user.name.last} ${user.name.first}`,
        message: "Hello World! I am going to use all this line! Why not?",
        date: randomDate(new Date(2019, 0, 1), new Date()),
    };
};

const generateGroupChat = (users: IRandomUser[]): IChatGroup => {
    const messages: IMessage[] = [];
    const messagesAmount = Math.ceil(5 + Math.random() * 5);
    let rndUsers = Object.assign([], users);
    for (let count = 0; count < messagesAmount; count++) {
        const usrId = Math.floor(Math.random() * rndUsers.length);
        messages.push(generateMessage(rndUsers[usrId]));
        if (rndUsers.length === 1) {
            rndUsers = Object.assign([], users);
        } else {
            rndUsers.splice(usrId, 1);
        }
    }
    return {
        name: "Group Chat",
        messages: messages.sort((a, b) => a.date.getTime() - b.date.getTime()),
    };
};

export const generateChatData = async (): Promise<IChatGroup[]> => {
    const users = await getRandomUsers();
    const chatsAmount = Math.ceil(10 + Math.random() * 10);
    const chats: IChatGroup[] = [];
    for (let count = 0; count < chatsAmount; count++) {
        chats.push(generateGroupChat(users));
    }
    return chats;
};
