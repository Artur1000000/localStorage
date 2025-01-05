import { useState } from "react";
import { ButtonElement } from "../Button/ButtonElement";
import { FormatDate } from "../FormatDate/FormatDateComponent";
import { NewsItemProps } from "../../types";
import { EditNewsComponent } from "../EditNewsComponent/EditNewsComponent";
import { useAppDispatch } from "../../redux/hook";
import { removeItem } from "../../redux/slices/newsList";

export const NewsItem = ({ id, title, text }: NewsItemProps) => {
  const [state, setState] = useState(false);
  const dispatch = useAppDispatch();

  const handleStateDialog = () => {
    setState((state) => !state);
  };
  const removeItemNews = () => {
    dispatch(removeItem(id))
  };
  return (
    <>
      <div className="wrapper-card">
        <FormatDate created={id} />
        <div>{title}</div>
        <div>{text}</div>
        <div className="button-block">
          <ButtonElement
            title="Редактировать"
            color={"green"}
            btnClick={handleStateDialog}
          />
          <ButtonElement
            title={"Удалить"}
            color={"red"}
            btnClick={removeItemNews}
          />
        </div>
      </div>
      {state && (
        <EditNewsComponent handleStateDialog={handleStateDialog} id={id} />
      )}
    </>
  );
};
