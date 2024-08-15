const Card = (props) => {
  const { heading, children } = props;
  return (
    <div className="rounded-lg shadow-lg bg-white">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-left">{heading}</h2>
      </div>
      <div className="h-[1px] bg-[#AABAB9] mx-6"></div>
      <div className="px-6 py-4">{children}</div>
    </div>
  );
};

export default Card;
