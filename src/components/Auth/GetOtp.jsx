import Logo from "../../assets/logo.svg";
import Circle from "../../assets/circle.svg";
import PhoneInput from "react-phone-input-2";
import { setUpRecaptcha } from "../../utils/firebase/firebase";
import { toast } from "react-toastify";

const GetOtp = ({ setPhoneNumber, setConfirmObj, phoneNumber, setStep }) => {
  const generateOTP = async () => {
    const response = await setUpRecaptcha(phoneNumber).catch((err) => {
      toast.error("Something went wrong");
      return;
    });
    setConfirmObj(response);
    setStep(2);
  };
  return (
    <div className="flex flex-col justify-center gap-16 items-center align-center h-screen w-full relative bg-[#E6F0F1]">
      <img src={Logo} />
      <img src={Circle} className="absolute left-0 bottom-0" />

      <div className="space-y-4 font-semibold">
        <p className="text-2xl font-bold">Login</p>
        <p>Enter your mobile number</p>
        <p className="text-gray-400 font-normal">to receive a 6 digit OTP</p>
      </div>
      <div>
        <PhoneInput
          value={phoneNumber}
          onChange={(phoneNumber) => setPhoneNumber("+" + phoneNumber)}
        />
        <div id="recaptcha-container" />
      </div>
      <button
        className="rounded-md px-24 py-2 text-white otp-button"
        onClick={() => generateOTP()}
      >
        Get OTP
      </button>
    </div>
  );
};

export default GetOtp;
