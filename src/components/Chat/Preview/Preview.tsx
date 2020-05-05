import React from "react";
import { Link } from "react-router-dom";
import { Item } from "./Item/Item";
import { IChatPreviewItem } from "./Item/types";
import "./Preview.css";

interface IProps {
    data: IChatPreviewItem[];
    activeItemId: string;
}

export const Preview: React.FC<IProps> = ({ data, activeItemId }) => {
    const renderItems = () => {
        return data
            .sort((a, b) => b.date.getTime() - a.date.getTime())
            .map((itemData) => (
                <Link
                    key={itemData.id}
                    className="ignore-link-style"
                    to={`/chat/${itemData.id}`}
                >
                    <Item
                        isActive={itemData.id === activeItemId}
                        {...itemData}
                    />
                </Link>
            ));
    };
    return <div className="flex chat-preview-list">{renderItems()}</div>;
};
