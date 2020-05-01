import React from "react";
import { Item } from "./Item/Item";
import "./Preview.css";
import { IChatPreviewItem } from "../../../TestData";

interface IProps {
    data: IChatPreviewItem[];
    activeItem: number;
    selectItem: (itemId: number) => void;
}

export class Preview extends React.Component<IProps> {
    private renderItems = () => {
        const { data, selectItem, activeItem } = this.props;
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
    render() {
        return (
            <div className="flex chat-preview-list">{this.renderItems()}</div>
        );
    }
}
