import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaLock,
  FaMoneyBill,
  FaSellcast,
  FaUser,
} from "react-icons/fa";
import { MdMessage } from "react-icons/md";
import { BiAnalyse, BiRadioCircleMarked, BiSearch } from "react-icons/bi";
import { BiCog } from "react-icons/bi";
import { AiFillHeart, AiTwotoneFileExclamation } from "react-icons/ai";
import { BsCartCheck, BsCartFill, BsFillCartPlusFill } from "react-icons/bs";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { GiDiamondHard, GiStrikingDiamonds } from "react-icons/gi";
import SidebarMenu from "./SidebarMenu";
import "./sideBar.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Redeem } from "@mui/icons-material";
const routes = [
  {
    path: "/",
    name: "Dashboard",
    icon: <FaHome />,
  },
  {
    path: "/products",
    name: "Products",
    icon: <BsCartFill />,
    subRoutes: [
      // {
      //   path: "/product/new",
      //   name: "New Product",
      //   icon: <BsFillCartPlusFill />,
      // },
      {
        path: "/products/all",
        name: "All Products",
        icon: <BiRadioCircleMarked />,
      },
      {
        path: "/categories",
        name: "Categories",
        icon: <BiRadioCircleMarked />,
      },
      {
        path: "/sub-categories",
        name: "Sub-Categories",
        icon: <BiRadioCircleMarked />,
      },
      {
        path: "/brands",
        name: "brands",
        icon: <BiRadioCircleMarked />,
      },
      {
        path: "/metals",
        name: "Metals",
        icon: <BiRadioCircleMarked />,
      },
      {
        path: "/occassions",
        name: "Occassions",
        icon: <BiRadioCircleMarked />,
      },
      {
        path: "/designs",
        name: "Designs",
        icon: <BiRadioCircleMarked />,
      },
    ],
  },
  {
    path: "/customers",
    name: "Customers",
    icon: <FaUser />,
  },
  {
    path: "/coupons",
    name: "Coupons",
    icon: <Redeem />,
  },
  {
    path: "/sellers",
    name: "Sellers",
    icon: <FaSellcast />,
  },
  // {
  //   path: "/messages",
  //   name: "Messages",
  //   icon: <MdMessage />,
  // },
  // {
  //   path: "/analytics",
  //   name: "Analytics",
  //   icon: <BiAnalyse />,
  // },
  // {
  //   path: "/file-manager",
  //   name: "File Manager",
  //   icon: <AiTwotoneFileExclamation />,
  //   subRoutes: [
  //     {
  //       path: "/settings/profile",
  //       name: "Profile ",
  //       icon: <FaUser />,
  //     },
  //     {
  //       path: "/settings/2fa",
  //       name: "2FA",
  //       icon: <FaLock />,
  //     },
  //     {
  //       path: "/settings/billing",
  //       name: "Billing",
  //       icon: <FaMoneyBill />,
  //     },
  //   ],
  // },
  // {
  //   path: "/order",
  //   name: "Order",
  //   icon: <BsCartCheck />,
  // },
  {
    path: "/settings",
    name: "Settings",
    icon: <BiCog />,
    exact: true,
    subRoutes: [
      {
        path: "/settings/profile",
        name: "Profile ",
        icon: <FaUser />,
      },
    ],
  },
  // {
  //   path: "/saved",
  //   name: "Saved",
  //   icon: <AiFillHeart />,
  // },
];
const inputAnimation = {
  hidden: {
    width: 0,
    padding: 0,
    transition: {
      duration: 0.2,
    },
  },
  show: {
    width: "140px",
    padding: "5px 15px",
    transition: {
      duration: 0.2,
    },
  },
};

const showAnimation = {
  hidden: {
    width: 0,
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
  show: {
    opacity: 1,
    width: "auto",
    transition: {
      duration: 0.5,
    },
  },
};

const SideBar = ({ children }) => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.sidebar);
  const [hiddenSidebarWidth, setHiddenSidebarWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 991) setHiddenSidebarWidth(45);
      else setHiddenSidebarWidth(0);
    };

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      <motion.div
        animate={{
          width: isOpen ? "200px" : `${hiddenSidebarWidth}px`,

          transition: {
            duration: 0.5,
            type: "spring",
            damping: 10,
          },
        }}
        className={`sidebar `}
      >
        <div className="top_section">
          <AnimatePresence>
            {isOpen && (
              <motion.h1
                variants={showAnimation}
                initial="hidden"
                animate="show"
                exit="hidden"
                className="logo"
              >
                Jewellish's Admin
              </motion.h1>
            )}
          </AnimatePresence>
        </div>
        <div className="search">
          <div className="search_icon">
            <BiSearch
              onClick={() =>
                dispatch({
                  type: "setIsOpen",
                  payload: true,
                })
              }
            />
          </div>
          <AnimatePresence>
            {isOpen && (
              <motion.input
                initial="hidden"
                animate="show"
                exit="hidden"
                variants={inputAnimation}
                type="text"
                placeholder="Search"
              />
            )}
          </AnimatePresence>
        </div>
        <section className="routes">
          {routes.map((route, index) => {
            if (route.subRoutes) {
              return (
                <SidebarMenu
                  route={route}
                  key={index}
                  showAnimation={showAnimation}
                />
              );
            }

            return (
              <div key={index} className="side_Bar">
                <NavLink
                  to={route.path}
                  className="link"
                  activeclassname="active"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              </div>
            );
          })}
        </section>
      </motion.div>
    </>
  );
};

export default SideBar;
