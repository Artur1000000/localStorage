import { useForm, SubmitHandler } from "react-hook-form";
import { EditNewsComponentProps, NewsItemProps } from "../../types";
import { ButtonElement } from "../Button/ButtonElement";
import "./EditNewsComponent.css";
import { useAppDispatch } from "../../redux/hook";
import { editItem } from "../../redux/slices/newsList";

export const EditNewsComponent: React.FC<EditNewsComponentProps> = ({
  handleStateDialog,
  id,
}) => {
  const dispatch = useAppDispatch();
  const { handleSubmit, register } = useForm<NewsItemProps>({
    mode: "onBlur",
    defaultValues: { ...JSON.parse(window.localStorage.getItem(id) || "") },
  });

  const onSubmit: SubmitHandler<NewsItemProps> = (data) => {
    dispatch(editItem(data));
    handleStateDialog();
  };

  return (
    <div className="wrapp-dialog">
      <div className="dialog">
        <div className="wrapp-header">
          <span style={{ fontSize: "24px" }}>Редактировать Новость</span>
          <ButtonElement
            btnClick={handleStateDialog}
            title="Закрыть"
            color={"red"}
          />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Заголовок"
            className="input-title"
            {...register("title", { required: true })}
          />
          <textarea
            rows={10}
            cols={20}
            placeholder="Текст"
            {...register("text", { required: true })}
          />
          <ButtonElement title="Сохранить" color={"blue"} />
        </form>
      </div>
    </div>
  );
};
