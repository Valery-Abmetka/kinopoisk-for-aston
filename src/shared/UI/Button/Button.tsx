import { Props } from "./Button.type";

export function Button({ children, onClick, type }: Props) {
  return (
    <button type={type} onClick={onClick}>
      {children}
    </button>
  );
}
