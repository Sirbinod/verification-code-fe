import { FC } from "react";
import VerificationInput from "react-verification-input";
import { FormInput } from "../../interface";

interface PropsInterface extends FormInput {
  length: number;
  isError: boolean;
}

const CVerificationInput: FC<PropsInterface> = ({ length, placeholder, onChange, isError }) => {
  return (
    <div className={isError ? "verification-input-wrap verification-error" : "verification-input-wrap"}>
      <VerificationInput length={length} placeholder={placeholder} onChange={onChange} />
    </div>
  );
};
export default CVerificationInput;
