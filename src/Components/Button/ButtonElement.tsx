import { ButtonElementProps } from "../../types";
import "./ButtonElement.css";

export const ButtonElement = ({
  title,
  color,
  btnClick,
}: ButtonElementProps) => {
  return (
    <button
      onClick={btnClick}
      className={"button-element" + " " + `button-${color}`}
    >
      {title}
    </button>
  );
};
