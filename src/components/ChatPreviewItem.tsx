import React from "react";
import style from "./ChatPreviewItem.module.css";

export interface IChatPreviewData {
  icon: string;
  name: string;
  date: Date;
  author: string;
  message: string;
}

interface IProps {
  data: IChatPreviewData;
}

export const ChatPreviewItem: React.FC<IProps> = ({ data }) => {
  return (
    <div className={style.item}>
      <img className={style.avatar} src={data.icon} alt="Avatar" />
      <div className={style.text_container}>
        <div className={style.name_date}>
          <span>{`${data.name}`}</span>
          <span>{`${data.date.toLocaleDateString("ru")}`}</span>
        </div>
        <div className={style.author_message}>
          <span>{`${data.author}: `}</span>
          <span>{`${data.message}`}</span>
        </div>
      </div>
    </div>
  );
};
