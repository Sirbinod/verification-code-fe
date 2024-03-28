import { FC, ReactNode } from "react";

interface PropsInterface {
  className: string;
  type: "submit" | "reset" | "button";
  children: ReactNode;
  disabled: boolean;
}

const CButton: FC<PropsInterface> = ({ className, type, children, disabled }) => {
  return (
    <button className={className} type={type} disabled={disabled}>
      {children}
    </button>
  );
};
export default CButton;
