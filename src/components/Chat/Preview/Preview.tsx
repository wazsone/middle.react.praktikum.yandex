import React from "react";
import { Item } from "./Item/Item";
import "./Preview.css";
import { IChatPreviewItem } from "../../../TestData";

interface IProps {
    data: IChatPreviewItem[];
}

interface IState {
    activeItemId: number;
}

export class Preview extends React.Component<IProps, IState> {
    readonly state: IState = {
        activeItemId: -1,
    };

    private selectItem = (itemId: number) => {
        this.setState({ activeItemId: itemId });
    };

    private renderItems = () => {
        const { data } = this.props;
        const { activeItemId } = this.state;
        return data
            .sort((a, b) => b.date.getTime() - a.date.getTime())
            .map((itemData, id) => (
                <Item
                    key={id}
                    isActive={id === activeItemId}
                    selectItem={() => this.selectItem(id)}
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
