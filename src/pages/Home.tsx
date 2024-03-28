import { FC, useState } from "react";
import CVerificationInput from "../components/CVerificationInput";
import CButton from "../components/CButton";
import { postData } from "../api/request";
import { verifyCode } from "../api";
import { useNavigate } from "react-router-dom";

const Home: FC = () => {
  const navigate = useNavigate();
  const [verificationCode, setVerificationCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [verificationError, setVerificationError] = useState({ status: false, error: "" });

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    setIsLoading(true);
    event.preventDefault();

    // Check if verification code is empty
    if (!verificationCode || verificationCode.length < 6) {
      setVerificationError({ status: true, error: "Please enter the verification code." });
      setIsLoading(false);

      return;
    }

    const response = await postData(verifyCode, { code: verificationCode });
    console.log(response, "0000000000000000");
    if (response.status) navigate("/success");
    else setVerificationError({ status: true, error: response?.errors[0] });
    setIsLoading(false);
  };

  const handleChange = (e: string) => {
    console.log(e);
    setVerificationError({ status: false, error: "" });
    setVerificationCode(e);
  };

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="flex flex-col gap-2 text-center items-center">
        <h2 className="text-2xl font-bold mb-2">Verification Code:</h2>
        <form onSubmit={handleSubmit}>
          <CVerificationInput length={6} placeholder="0" onChange={handleChange} isError={verificationError.status} />
          <CButton
            className={`uppercase  py-3 w-[200px] bg-[#100249] mt-3 text-xl font-bold text-white hover:bg-[#090119] rounded-md ${
              verificationError.status && "cursor-not-allowed"
            }`}
            type="submit"
            disabled={verificationError.status}
          >
            {isLoading ? "Loading..." : "Submit"}
          </CButton>
        </form>
        {verificationError.status && <p className="text-red-600">{verificationError.error}</p>}
      </div>
    </div>
  );
};
export default Home;
