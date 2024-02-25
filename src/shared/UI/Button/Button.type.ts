import { ReactNode } from "react";

export type Props = {
  children?: ReactNode;
  type: "button" | "submit";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
