import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { NewsItemProps } from "../../types";

const getNewsList = () => {
  const length = window.localStorage.length;
  const list: NewsItemProps[] | [] = [];
  if (length) {
    for (let i: number = 0; i < length; i++) {
      const keyItem: string = window.localStorage.key(i) || "";
      const result: NewsItemProps = JSON.parse(
        window.localStorage.getItem(keyItem) || ""
      );
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-expect-error
      list.push(result);
    }
    return list;
  }
  return list;
};
const addNewsItem = (props: NewsItemProps) => {
  window.localStorage.setItem(props.id, JSON.stringify(props));
  return;
};
const editNewsItem = (prop: NewsItemProps) => {
  window.localStorage.setItem(prop.id, JSON.stringify(prop));
  return;
};
const removeNewsItem = (prop: string) => {
  window.localStorage.removeItem(prop);
  return;
};

export const newsListSlice = createSlice({
  name: "newsList",
  initialState: getNewsList(),
  reducers: {
    updateNews: () => {
      return getNewsList();
    },
    addItem: (__, actions: PayloadAction<NewsItemProps>) => {
      addNewsItem(actions.payload);
      return getNewsList();
    },
    editItem: (__, actions: PayloadAction<NewsItemProps>) => {
      editNewsItem(actions.payload);
      return getNewsList();
    },
    removeItem: (__, actions: PayloadAction<string>) => {
      removeNewsItem(actions.payload);
      return getNewsList();
    },
  },
});

export const { updateNews, addItem, editItem, removeItem } =
  newsListSlice.actions;

export default newsListSlice.reducer;
