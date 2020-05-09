import React from "react";
import "./DateSeparator.css";

interface IProps {
    date: Date;
}

export const DateSeparator: React.FC<IProps> = ({ date }) => (
    <div className="screen-msg-date">{date.toDateString()}</div>
);
