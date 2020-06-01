import React from "react";
import "./styles/common.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Chat from "./components/Chat/Chat";

const App: React.FC = () => {
    return (
        <Switch>
            <Redirect exact from="/" to="/chat" />
            <Redirect from="/react-messenger" to="/chat" />
            <Route exact path="/chat" component={Chat} />
            <Route path="/chat/:chatId" component={Chat} />
        </Switch>
    );
};

export default App;
