import Logo from "../../assets/logo.svg";
import Circle from "../../assets/circle.svg";
import Edit from "../../assets/edit.svg";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const VerifyOTP = ({ phoneNumber, confirmObj, setStep }) => {
  const [countDown, setCountDown] = useState(15);
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const navigate = useNavigate();

  useEffect(() => {
    if (countDown > 0) {
      const timer = setTimeout(() => {
        setCountDown((prevCount) => prevCount - 1);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [countDown]);

  const resendOTP = () => {
    setCountDown(15);
  };

  const goBack = () => {
    setStep(1);
  };

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
    }
  };

  const verify = async () => {
    console.log(otp);
    const OTP = otp.join("");
    console.log(OTP);
    try {
      await confirmObj.confirm(OTP);
      toast.success("User Authenticated");
      navigate("/product");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="flex flex-col justify-center gap-16 items-center align-center h-screen w-full relative bg-[#E6F0F1]">
      <img src={Logo} />
      <img src={Circle} className="absolute left-0 bottom-0" />

      <div className="space-y-4 font-semibold">
        <p className="text-2xl font-bold">Verification</p>
        <p>Enter 6 digit sent to phone number</p>
        <p>
          {phoneNumber}
          <span
            className="pl-2 font-normal cursor-pointer"
            onClick={() => goBack()}
          >
            <img src={Edit} className="inline h-4" />
          </span>
        </p>
      </div>
      <div className="flex gap-4">
        {[1, 2, 3, 4, 5, 6].map((num, index) => {
          return (
            <input
              key={num}
              className="border rounded-lg w-10 h-10 text-center text-xl bg-white text-gray-900"
              value={otp[index]}
              onChange={(e) => handleChange(e, index)}
              maxLength={1}
            />
          );
        })}
      </div>
      <div className="flex flex-col bg-cyan-100 py-6 px-10 rounded-[50%] text-xl">
        <span>{countDown}</span>
        <span className="text-sm">Sec</span>
      </div>
      <div>
        <span>Didn&apos;t receive code?</span>{" "}
        <span
          className="underline decoration-[#076777] decoration-2 cursor-pointer"
          onClick={() => resendOTP()}
        >
          Resend
        </span>
      </div>
      <button
        className="rounded-md px-24 py-2 text-white otp-button"
        onClick={() => verify()}
      >
        Verify OTP
      </button>
    </div>
  );
};

export default VerifyOTP;
