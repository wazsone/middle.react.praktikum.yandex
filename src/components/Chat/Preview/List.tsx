import React from "react";
import { IChatPreviewItem, Item } from "./Item/Item";
import "./List.css";

interface IProps {
    className?: string;
    data: IChatPreviewItem[];
}

export const List: React.FC<IProps> = ({ className, data }) => {
    const renderItems = () => {
        return data.map((itemProps, id) => <Item key={id} {...itemProps} />);
    };

    return <div className="flex chat-preview-list">{renderItems()}</div>;
};
