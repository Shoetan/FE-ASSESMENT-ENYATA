import logo from "../assets/login.png";
import square from "../assets/Square.png";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

type Props = {
  isActive: boolean;
  isExactActive?: boolean;
};

const SideNav = () => {
  const location = useLocation();

  const navigate = useNavigate()

  const navLinkStyle = ({ isActive, isExactActive }: Props) => {
    return {
      background:
        isExactActive && location.pathname === "/dashboard"
          ? "#0A74DC"
          : isActive
          ? "#0A74DC"
          : "",
      borderRadius:
        isExactActive && location.pathname === "/dashboard"
          ? "4px"
          : isActive
          ? "4px"
          : "",
    };
  };

  const logout = () => {
    navigate("/")
  }

  return (
    <>
      <div className="bg-[#031434] h-[100vh] pt-[32px]">
        <div className="flex justify-center items-center pb-[30px]">
          <img src={logo} alt="" className="w-[107px]" />
        </div>

        <div className="flex justify-center flex-col items-center w-full text-white pl-[24px] pr-[16px]">
          <NavLink
            style={(props) => navLinkStyle({ ...props, isExactActive: true })}
            to="/dashboard"
            className="w-full mb-[70px]"
            end
          >
            <div className="flex items-center gap-[15px] px-[26px] py-4">
              <img src={square} alt="" />

              <p className="hidden lg:block text-[16px] font-[500]">Overview</p>
            </div>
          </NavLink>

          <div className="flex flex-col gap-[20px] w-full">
            <NavLink
              style={navLinkStyle}
              to="/dashboard/starships"
              className="w-full"
            >
              <div className="flex items-center gap-[15px] px-[26px] py-4">
                <div className="w-[17px] h-[16px] rounded-[5px] bg-[#A9C1FF]"></div>
                <p className="hidden lg:block text-[16px] font-[500]">
                  Starships
                </p>
              </div>
            </NavLink>
            <NavLink
              style={navLinkStyle}
              to="/dashboard/people"
              className="w-full"
            >
              <div className="flex items-center gap-[15px] px-[26px] py-4">
                <div className="w-[17px] h-[16px] rounded-[5px] bg-[#FFA9EC]"></div>
                <p className="hidden lg:block text-[16px] font-[500]">People</p>
              </div>
            </NavLink>
            <NavLink
              style={navLinkStyle}
              to="/dashboard/species"
              className="w-full"
            >
              <div className="flex items-center gap-[15px] px-[26px] py-4">
                <div className="w-[17px] h-[16px] rounded-[5px] bg-[#FDFFA9]"></div>
                <p className="hidden lg:block text-[16px] font-[500]">
                  Species
                </p>
              </div>
            </NavLink>
            <div onClick={()=>{logout()}} className="ml-10 mt-60 cursor-pointer text-red-500">
              <p className="hidden lg:block text-[16px] font-[500]">
                  Logout
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNav;
