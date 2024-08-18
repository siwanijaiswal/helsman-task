import React from "react";
import NotifyIcon from "../../assets/notifyIcon.png";
import SettingIcon from "../../assets/settingicon.svg";
import Userprofile from "../../assets/userprofile.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className=" ml-10 mr-10 mt-5 flex justify-between items-center">
        <div>
          <h2 className="font-semibold text-[26px] leading-[51px]">
            Manage Orders
          </h2>
          <p className="font-normal text-[16px] leading-[27px] text-[#787878]">
            All the orders you have received
          </p>
        </div>
        <div className="flex justify-around items-center flex-row mr-[50px]">
          <Link to="#">
            <div className="mr-5 w-[50px] h-[50px] bg-[#E6F0F1] rounded-[15px] flex items-center justify-center">
              {" "}
              <img src={NotifyIcon} alt="notify" width="15px" />
            </div>
          </Link>
          <Link to="#">
            <div className="mr-5 w-[48px] h-[48px] bg-[#E6F0F1] rounded-[15px] flex items-center justify-center">
              {" "}
              <img src={SettingIcon} alt="SettingIcon" width="18px" />{" "}
            </div>
          </Link>
          <Link to="#">
            <div className="w-[48px] h-[48px] bg-[#E6F0F1] rounded-[15px] flex items-center justify-center">
              {" "}
              <img src={Userprofile} alt="Userprofile" width="20px" />{" "}
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
