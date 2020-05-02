import React from "react";
import { Item } from "./Item/Item";
import { IChatPreviewItem } from "./Item/types";
import "./Preview.css";

interface IProps {
    data: IChatPreviewItem[];
    activeItemId: string;
    selectItem: (itemId: string) => void;
}

export const Preview: React.FC<IProps> = ({
    data,
    selectItem,
    activeItemId,
}) => {
    const renderItems = () => {
        return data
            .sort((a, b) => b.date.getTime() - a.date.getTime())
            .map((itemData) => (
                <Item
                    key={itemData.id}
                    isActive={itemData.id === activeItemId}
                    selectItem={() => selectItem(itemData.id)}
                    {...itemData}
                />
            ));
    };
    return <div className="flex chat-preview-list">{renderItems()}</div>;
};
