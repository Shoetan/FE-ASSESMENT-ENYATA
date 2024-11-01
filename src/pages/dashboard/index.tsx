import { Outlet } from "react-router-dom";
import SideNav from "../../components/Sidebar";
import TopNav from "../../components/TopNav";

const Landing = () => {

  return (
    <>
      <div className="lg:overflow-hidden lg:h-screen relative">
        <div className="grid grid-cols-12 w-full">
          <div className={`col-span-2 h-[85vh]`}>
            <SideNav />
          </div>
          <div
            className={`col-span-10 max-h-[100vh] min-h-[100vh] overflow-y-auto`}
          >
            <TopNav />
            <div className="p-10">
                <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
