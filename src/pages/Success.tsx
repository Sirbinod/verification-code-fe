import { FC } from "react";
import { Link } from "react-router-dom";

const Success: FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div>
        <div className="flex flex-col items-center space-y-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-green-600 w-28 h-28"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1"
          >
            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-4xl font-bold">Code Successfully Verified!</h1>
          <Link to="/">
            <button className="mt-4 bg-[#100249] hover:bg-[#090119] text-white font-bold py-2 px-4 rounded">Go Home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Success;
