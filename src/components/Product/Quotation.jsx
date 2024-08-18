import React from "react";
import PDF from "../../assets/pdfIcon.png";

const Quotation = () => {
  const quotation = [
    {
      image: PDF,
      text: "Project_v01",
    },
    {
      image: PDF,
      text: "Project_v02",
    },
  ];

  return (
    <div className="pt-[17px] w-[450px]">
      <div className="rounded-lg shadow-lg bg-[#5999A4]">
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold text-left text-[#E6F0F1]">
            Quotation
          </h2>
        </div>
        <div className="h-[1px] bg-[#AABAB9] mx-6"></div>
        <div className="px-6 py-4">
          <div className="flex justify-center">
            <div className="space-y-2">
              <div className="text-[#E6F0F1]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. Lorem
                Ipsum is simply dummy text of the printing.
              </div>
              <div>
                <p className="text-left text-[#E6F0F1]">Quotation Amount:</p>
                <p className="text-left text-[#E6F0F1]"> ₹ 11,00,000</p>
              </div>
              <div className="flex flex-wrap">
                {quotation.map((item, ind) => {
                  return (
                    <div key={ind} className="p-2">
                      <div className="relative w-[60px] h-[60px] rounded-[12px]">
                        <div className="absolute inset-0 bg-[#E6F0F1] opacity-20 rounded-[12px]"></div>
                        <div className="flex justify-center items-center h-full">
                          <img
                            src={item.image}
                            alt={`image ${ind + 1}`}
                            className="relative w-10 h-10 z-10"
                          />
                        </div>
                      </div>

                      <p className="text-center text-[#E6F0F1] mt-2">
                        {item.text}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotation;
