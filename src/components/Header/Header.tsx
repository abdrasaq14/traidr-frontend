/* eslint-disable react-hooks/exhaustive-deps */
import userDataInterface from "../../interfaces/userInterface.tsx";
import traidrLogo from "../../assets/traidr-logo-orange.png";
import CartCounter from "../CartCounter/CartCounter.tsx";
import "./HeaderStyle.tsx";
import HeaderStyle from "./HeaderStyle.tsx";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { useSelector } from "react-redux";
import { MdKeyboardArrowDown } from "react-icons/md";
import UserProfileModal from "../UserProfileModal/UserProfileModal.tsx";
// import { fetchUserShopDetails } from "../../api/users.ts";

interface userState {
  user: userDataInterface;
}

interface HeaderProps {
  show?: () => void;
}
export default function Header({ show }: HeaderProps) {
  const token = localStorage.getItem("token");
  const [isRotate, setIsRotate] = useState(false);
  const userData = useSelector((state: userState) => state.user);
const modalRef = useRef<HTMLDivElement | null>(null);
  const [profileModalVisibility, setProfileModalVisibility] = useState(false);
  
 const toggleProfileModal = (isOutsideClick = false) => {
    if (!isOutsideClick) {
      setIsRotate(!isRotate);
    }
    setProfileModalVisibility(!profileModalVisibility);
 };

 useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        toggleProfileModal(true); 
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
 }, [toggleProfileModal]); 


  return (
    <>
      <HeaderStyle>
        <div className="header-inner">
          <div className="logo-wrapper">
            <Link to={"/"}>
              <img
                src={traidrLogo}
                alt="traidr-logo"
                className="traidr-header-logo"
              />
            </Link>
          </div>
          <div className="header-right-btn-wrapper">
            {!token && (
              <i
                className="fa-solid fa-bars small-screen-icon"
                style={{ cursor: "pointer" }}
                onClick={show}
              ></i>
            )}
            {token ? (
              <>
                <div
                  className="user-profile-img-wrapper"
                  onClick={(event) => {
                    event.stopPropagation()
                    toggleProfileModal(false)
                  }}
                  style={{ position: "relative" }}
                >
                  {profileModalVisibility && (
                    <div ref={modalRef}>
                      <UserProfileModal toggleVissiblity={()=>toggleProfileModal(false)} />
                    </div>
                  )}
                  {userData &&
                  userData?.profilePic &&
                  !userData?.profilePic?.toString().includes("undefined") ? (
                    <div
                      style={{
                        borderRadius: "50%",
                        overflow: "hidden",
                        height: "2rem",
                        width: "2rem"
                      }}
                    >
                      <img
                        src={userData?.profilePic}
                        alt=""
                        onClick={()=>toggleProfileModal(false)}
                      />
                    </div>
                  ) : (
                    <div className="shop-profile-header-icon">
                      <FaRegUser />
                    </div>
                  )}
                  <span style={{ fontSize: "12px" }}>
                    Hi, {userData?.name?.split(" ")[0]}
                  </span>
                  <span className="user-drop-down-icon">
                    <MdKeyboardArrowDown
                      style={{
                        transform: isRotate ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform 0.3s ease-in-out"
                      }}
                    />
                  </span>
                </div>
                <div className="cart-count">
                  <CartCounter />
                </div>
              </>
            ) : (
              <>
                <Link to="/login" className="header-right-login-btn big-screen">
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="header-right-signup-btn big-screen"
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </HeaderStyle>
    </>
  );
}
