import React from "react";
import {
    IChatPreviewData,
    ChatPreviewItem,
} from "./components/ChatPreviewItem";
import logo from "./img/logo.png";
import "./styles/common.css";

// test data
const testData: IChatPreviewData = {
    icon: logo,
    name: "Group Chat",
    date: new Date(),
    author: "Ruslan",
    message: "Hello World! I am going to use all this line! Why not?",
};

const App: React.FC = () => {
    return <ChatPreviewItem data={testData} />;
};

export default App;
