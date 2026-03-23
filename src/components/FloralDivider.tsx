import floralImg from "@/assets/floral-divider.png";

const FloralDivider = ({ className = "" }: { className?: string }) => (
  <div className={`flex justify-center ${className}`}>
    <img src={floralImg} alt="" className="w-40 md:w-52 opacity-70" />
  </div>
);

export default FloralDivider;
