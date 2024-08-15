import { useState } from "react";
import Girl from "../../assets/girl.svg";
import VerifyOTP from "./VerifyOTP";
import GetOtp from "./GetOtp";

const LogIn = () => {
  const [phoneNumber, setPhoneNumber] = useState();
  const [confirmObj, setConfirmObj] = useState("+91 90232 90926");
  const [step, setStep] = useState(1);

  return (
    <div className="flex text-center">
      <div className="flex flex-col justify-center items-center align-center h-screen w-2/3 px-16 bg-[#065E6C] text-white">
        <div className="mb-16 space-y-4">
          <p className="text-xl font-bold">Easily Available</p>
          <p className="text-lg">One stop platform for all your packaging</p>
        </div>
        <img src={Girl} />
      </div>
      {step == 1 && (
        <GetOtp
          setPhoneNumber={setPhoneNumber}
          setConfirmObj={setConfirmObj}
          phoneNumber={phoneNumber}
          setStep={setStep}
        />
      )}
      {step == 2 && (
        <VerifyOTP
          phoneNumber={phoneNumber}
          setStep={setStep}
          confirmObj={confirmObj}
        />
      )}
    </div>
  );
};

export default LogIn;
