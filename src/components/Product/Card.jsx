const Card = (props) => {
  const { heading, children } = props;
  return (
    <div className="border border-[#99ADAC] rounded-[12px] bg-[#F2F5F5]">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-left">{heading}</h2>
      </div>
      <div className="h-[1px] bg-[#AABAB9] mx-6"></div>
      <div className="px-6 py-4">{children}</div>
    </div>
  );
};

export default Card;
