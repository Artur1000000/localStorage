import { format, formatISO } from "date-fns";

interface FormatDateProps {
  created: string | undefined;
}
export const FormatDate: React.FC<FormatDateProps> = ({ created }) => {
  const str: string = format(
    new Date(formatISO(new Date(Number(created)))),
    "PPpp"
  ).toString();
  return (
    <div className="form-date">
      {str}
    </div>
  );
};
