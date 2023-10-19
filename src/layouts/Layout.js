import SideBar from "./Sidebar/Sidebar";
import Header from "./Header/Header";
// import { useDispatch, useSelector } from "react-redux";
import "./layout.css";
import { Outlet } from "react-router-dom";
// import Loading from "../Components/loading/loading";

const Layout = () => {
//   const dispatch = useDispatch();
//   const { isOpen } = useSelector((state) => state.sidebar);
//   const handleClickOutside = () => {
//     dispatch({
//       type: "setIsOpen",
//       payload: false,
//     });
//   };

  return (
    <>
      <div className="main-container">
        <SideBar />
        <div style={{ flex: 1, height: "100vh", overflowY: "auto" }}>
          <Header />
          <main className="container">
            <Outlet />{" "}
          </main>
        </div>
        {/* <div
          onClick={handleClickOutside}
          className={`overlay ${isOpen ? "show" : ""}`}
        ></div> */}
      </div>
    </>
  );
};

export default Layout;
