import React from "react";
import { Item } from "./Item/Item";
import "./Preview.css";
import { IChatPreviewItem } from "../../../TestData";

interface IProps {
    data: IChatPreviewItem[];
    activeItem: number;
    selectItem: (itemId: number) => void;
}

export const Preview: React.FC<IProps> = ({ data, selectItem, activeItem }) => {
    const renderItems = () => {
        return data
            .sort((a, b) => b.date.getTime() - a.date.getTime())
            .map((itemData, id) => (
                <Item
                    key={id}
                    isActive={id === activeItem}
                    selectItem={() => selectItem(id)}
                    {...itemData}
                />
            ));
    };
    return <div className="flex chat-preview-list">{renderItems()}</div>;
};
