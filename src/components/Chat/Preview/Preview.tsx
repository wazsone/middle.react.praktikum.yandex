import React from "react";
import { IChatPreviewItem, Item } from "./Item/Item";
import "./Preview.css";

interface IProps {
    data: IChatPreviewItem[];
}

export const Preview: React.FC<IProps> = ({ data }) => {
    const renderItems = () => {
        return data
            .sort((a, b) => b.date.getTime() - a.date.getTime())
            .map((itemProps, id) => <Item key={id} {...itemProps} />);
    };

    return <div className="flex chat-preview-list">{renderItems()}</div>;
};
