import { useEffect, useState } from "react";
import { NewsItemProps } from "../types";
import { ButtonElement } from "./Button/ButtonElement";
import { NewsItem } from "./NewsItem/NewsItem";
import { AddNewsComponent } from "./AddNewsComponent/AddNewsComponent";
import { useAppDispatch, useAppSelector } from "../redux/hook";
import { addItem, updateNews } from "../redux/slices/newsList";

export default function Content() {
  const newsList = useAppSelector((state) => state.newsList);
  const dispatch = useAppDispatch();
  const [stateAdd, setStateAdd] = useState<boolean>(false);

  const changeAddDialogState = () => {
    setStateAdd((state) => !state);
  };

  const addNews = (prop: NewsItemProps) => {
    dispatch(addItem(prop));
    changeAddDialogState();
  };

  useEffect(() => {
    window.addEventListener("storage", () => {
      dispatch(updateNews());
    });
  }, [dispatch]);

  return (
    <div className="content-wrapp">
      <div>
        <ButtonElement
          btnClick={changeAddDialogState}
          title="Добавить"
          color={"blue"}
        />
      </div>
      {newsList &&
        newsList.map((item: NewsItemProps) => {
          const { id, title, text } = item;
          return <NewsItem key={id} id={id} title={title} text={text} />;
        })}
      {!newsList.length && (
        <div style={{ textAlign: "center", fontSize: "24px" }}>
          <span>Добавьте новость</span>
        </div>
      )}
      {stateAdd && (
        <AddNewsComponent close={changeAddDialogState} eventNews={addNews} />
      )}
    </div>
  );
}
