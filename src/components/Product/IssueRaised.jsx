import React from "react";

const IssueRaised = () => {
  const IssueDetails = {
    IssueNo: "2658746",
    IssueStatus: "Pending",
    IssueReason: "Lorem lorem lorem",
  };

  return (
    <div className="pt-0 pr-[20px] pb-8 pl-8  w-[700px]">
      <div className="rounded-lg shadow-lg bg-[#5999A4] ">
        <div className="px-6 py-4">
          <h2 className="text-xl font-bold text-left text-[#E6F0F1]">
            Issue Raised
          </h2>
        </div>
        <div className="h-[1px] bg-[#AABAB9] mx-6"></div>
        <div className="px-6 py-4">
          <div className="">
            <div className=" flex justify-between">
              <div className="grid grid-cols-[auto_minmax(0,_1fr)] gap-x-2 mb-[10px]">
                <p className="text-[#E6F0F1] font-normal">Issue No:</p>
                <p className="text-[#FCFCFC] font-semibold">
                  {IssueDetails.IssueNo}
                </p>
              </div>
              <div className="grid grid-cols-[auto_minmax(0,_1fr)] gap-x-2 mb-[10px]">
                <p className="text-[#E6F0F1] font-normal">Issue Status:</p>
                <p className="text-[#FCFCFC] font-semibold">
                  {IssueDetails.IssueStatus}
                </p>
              </div>
            </div>
            <div className=" grid grid-cols-[auto_minmax(0,_1fr)] gap-x-2 mb-[10px]">
              <p className="text-[#E6F0F1] font-normal">Issue Reason:</p>
              <p className="text-[#FCFCFC] font-semibold">
                {IssueDetails.IssueReason}
              </p>
            </div>
            <div>
              <p className="text-[#E6F0F1] font-normal">Description:</p>
              <p className="text-[#FCFCFC] font-semibold">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. A
                perspiciatis numquam animi, eum possimus unde ut eveniet omnis
                laboriosam sit voluptate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IssueRaised;
