import notification from "../assets/notification.png";
import ellipse from "../assets/ellipse.png";
import carat from "../assets/carat.png";
import account from "../assets/account.svg";
import { useLocation, useNavigate } from "react-router-dom";

const TopNav = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); 
  };
  return (
    <>
      <nav className="h-[64px] gap-[60px] bg-white flex justify-between items-center px-[40px] shadow-sm">
        <div>
          {location.pathname.includes("details-page") && (
            <div
              onClick={goBack}
              className="flex cursor-pointer justify-center items-center gap-2"
            >
              <img src={carat} alt="" />
              <p className="text-[#A4A7B7]">Back</p>
            </div>
          )}
        </div>
        <div className="flex justify-center items-center gap-[60px]">
          <div className="flex justify-end items-center gap-[32px]">
            <img src={notification} alt="" />
            <div className="w-[2px] bg-[#E5E5E5] h-[25px]"></div>
            <div className="flex justify-start items-center gap-[24px]">
              <img src={account} alt="" />
              <p className="text-[#303B54] text-[15px]">John Doe</p>
            </div>
          </div>
          <div>
            <img src={ellipse} alt="" className="h-[3px] w-[17px]" />
          </div>
        </div>
      </nav>
    </>
  );
};

export default TopNav;
