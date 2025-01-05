export interface ButtonElementProps {
  title: string;
  color: "red" | "green" | "blue";
  btnClick?: () => void;
}
export interface NewsItemProps {
  id: string;
  title: string;
  text: string;
}

export interface AddNewsComponentProps {
  close: () => void;
  eventNews: (prop: NewsItemProps) => void;
}

export interface EditNewsComponentProps {
  handleStateDialog: () => void;
  id: string;
}
