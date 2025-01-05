export default function HelperText({ message }: { message: string | undefined}) {
  return <span className="helper">{message}</span>;
}
