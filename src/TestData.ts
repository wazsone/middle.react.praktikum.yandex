import logo from "./img/logo.png";

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

// test data
export const testData: IChatPreviewItem[] = [
    {
        icon: logo,
        name: "Group Chat",
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: "Ruslan",
        message: "Hello World! I am going to use all this line! Why not?",
    },
    {
        icon: logo,
        name: "Group Chat",
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: "Ruslan",
        message: "Hello World! I am going to use all this line! Why not?",
    },
    {
        icon: logo,
        name: "Group Chat",
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: "Ruslan",
        message: "Hello World! I am going to use all this line! Why not?",
    },
    {
        icon: logo,
        name: "Group Chat",
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: "Ruslan",
        message: "Hello World! I am going to use all this line! Why not?",
    },
    {
        icon: logo,
        name: "Group Chat",
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: "Ruslan",
        message: "Hello World! I am going to use all this line! Why not?",
    },
    {
        icon: logo,
        name: "Group Chat",
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: "Ruslan",
        message: "Hello World! I am going to use all this line! Why not?",
    },
    {
        icon: logo,
        name: "Group Chat",
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: "Ruslan",
        message: "Hello World! I am going to use all this line! Why not?",
    },
    {
        icon: logo,
        name: "Group Chat",
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: "Ruslan",
        message: "Hello World! I am going to use all this line! Why not?",
    },
    {
        icon: logo,
        name: "Group Chat",
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: "Ruslan",
        message: "Hello World! I am going to use all this line! Why not?",
    },
    {
        icon: logo,
        name: "Group Chat",
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: "Ruslan",
        message: "Hello World! I am going to use all this line! Why not?",
    },
    {
        icon: logo,
        name: "Group Chat",
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: "Ruslan",
        message: "Hello World! I am going to use all this line! Why not?",
    },
    {
        icon: logo,
        name: "Group Chat",
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: "Ruslan",
        message: "Hello World! I am going to use all this line! Why not?",
    },
    {
        icon: logo,
        name: "Group Chat",
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: "Ruslan",
        message: "Hello World! I am going to use all this line! Why not?",
    },
    {
        icon: logo,
        name: "Group Chat",
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: "Ruslan",
        message: "Hello World! I am going to use all this line! Why not?",
    },
    {
        icon: logo,
        name: "Group Chat",
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: "Ruslan",
        message: "Hello World! I am going to use all this line! Why not?",
    },
    {
        icon: logo,
        name: "Group Chat",
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: "Ruslan",
        message: "Hello World! I am going to use all this line! Why not?",
    },
    {
        icon: logo,
        name: "Group Chat",
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: "Ruslan",
        message: "Hello World! I am going to use all this line! Why not?",
    },
    {
        icon: logo,
        name: "Group Chat",
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: "Ruslan",
        message: "Hello World! I am going to use all this line! Why not?",
    },
    {
        icon: logo,
        name: "Group Chat",
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: "Ruslan",
        message: "Hello World! I am going to use all this line! Why not?",
    },
    {
        icon: logo,
        name: "Group Chat",
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: "Ruslan",
        message: "Hello World! I am going to use all this line! Why not?",
    },
    {
        icon: logo,
        name: "Group Chat",
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: "Ruslan",
        message: "Hello World! I am going to use all this line! Why not?",
    },
    {
        icon: logo,
        name: "Group Chat",
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: "Ruslan",
        message: "Hello World! I am going to use all this line! Why not?",
    },
    {
        icon: logo,
        name: "Group Chat",
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: "Ruslan",
        message: "Hello World! I am going to use all this line! Why not?",
    },
    {
        icon: logo,
        name: "Group Chat",
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: "Ruslan",
        message: "Hello World! I am going to use all this line! Why not?",
    },
    {
        icon: logo,
        name: "Group Chat",
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: "Ruslan",
        message: "Hello World! I am going to use all this line! Why not?",
    },
    {
        icon: logo,
        name: "Group Chat",
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: "Ruslan",
        message: "Hello World! I am going to use all this line! Why not?",
    },
    {
        icon: logo,
        name: "Group Chat",
        date: randomDate(new Date(2019, 0, 1), new Date()),
        author: "Ruslan",
        message: "Hello World! I am going to use all this line! Why not?",
    },
];
