import Logo from "../../assets/logo.svg";
import Circle from "../../assets/circle.svg";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
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
    <div className="flex flex-col justify-center gap-10 items-center align-center h-screen w-full relative bg-[#E6F0F1]">
      <img src={Logo} />
      <img src={Circle} className="absolute left-0 bottom-0" />

      <div className="space-y-4 font-semibold">
        <p
          className="text-3xl font-extrabold text-[
rgba(54, 64, 63, 1)]"
        >
          Login
        </p>
        <p className="text-2xl font-bold">Enter your mobile number</p>
        <p className="text-base font-medium text-cyan-700">
          to receive a 6 digit OTP
        </p>
      </div>
      <div>
        <label
          htmlFor="phone-input"
          className="block text-medium font-medium text-left text-[rgba(6,94,108,1)] "
        >
          Mobile Number
        </label>
        <PhoneInput
          id="phone-input"
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
