import { useForm, SubmitHandler } from "react-hook-form";
import "./AddNewsComponent.css";
import { AddNewsComponentProps, NewsItemProps } from "../../types";
import { ButtonElement } from "../Button/ButtonElement";
import HelperText from "../HelperText";

export const AddNewsComponent: React.FC<AddNewsComponentProps> = ({
  close,
  eventNews,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<NewsItemProps>({
    mode: "onBlur",
    defaultValues: { title: "", text: "" },
  });

  const onSubmit: SubmitHandler<NewsItemProps> = (data) => {
    const date = Date.now().toString();
    const prop = { ...data, id: date };
    eventNews(prop);
  };
  return (
    <div className="wrapp-dialog">
      <div className="dialog">
        <div className="wrapp-header">
          <span style={{ fontSize: "24px" }}>Добавить Новость</span>
          <ButtonElement btnClick={close} title="Закрыть" color={"red"} />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Заголовок"
            className="input-title"
            {...register("title", {
              required: true,
              minLength: {
                value: 2,
                message: "минимум 2 символа",
              },
            })}
          />
          {errors.title && <HelperText message={errors.title.message} />}
          <textarea
            rows={10}
            cols={20}
            placeholder="Текст"
            {...register("text", {
              required: true,
              minLength: {
                value: 10,
                message: "минимум 10 символов",
              },
            })}
          />
          {errors.text && <HelperText message={errors.text.message} />}
          <ButtonElement title="Сохранить" color={"blue"} />
        </form>
      </div>
    </div>
  );
};
