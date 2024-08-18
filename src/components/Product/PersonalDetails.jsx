import Card from "./Card";

const PersonalDetails = () => {
  const customerDetails = {
    name: "Rahul Sharma",
    email: "rahul.sharma@example.com",
    contact: "+91-9876543210",
    companyName: "Tech Innovators Pvt. Ltd.",
    companyGstNo: "27AAACT1234A1Z5",
  };

  return (
    <div className="mt-8 h-100 w-[450px]">
      <Card heading="Personal Details">
        <div className="space-y-4">
          <div>
            <p className="font-semibold">Name:</p>
            <p>{customerDetails.name}</p>
          </div>
          <div>
            <p className="font-semibold">Email ID:</p>
            <p>{customerDetails.email}</p>
          </div>
          <div>
            <p className="font-semibold">Contact:</p>
            <p>{customerDetails.contact}</p>
          </div>
          <div>
            <p className="font-semibold">Company Name:</p>
            <p className="text-cyan-600">{customerDetails.companyName}</p>
          </div>
          <div className="!mb-[102px]">
            <p className="font-semibold">Company GST No:</p>
            <p className="text-cyan-600">{customerDetails.companyGstNo}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PersonalDetails;
