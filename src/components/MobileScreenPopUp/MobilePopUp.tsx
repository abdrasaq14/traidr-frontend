import MobileScreenStyle from "./MobileScreenStyle";
import { CiLogin } from "react-icons/ci";
import { CiLogout } from "react-icons/ci";
import { FaCartArrowDown, FaFirstOrder } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaUserPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { BiCartAdd } from "react-icons/bi";
import { BsHeart } from "react-icons/bs";
export interface MobilePopUpProps {
  show: boolean;
  handleShowMobile: () => void;
}

export function MobilePopUp({ show, handleShowMobile }: MobilePopUpProps) {
  const token = localStorage.getItem("token");

  return (
    <MobileScreenStyle show={show}>
      <span
        style={{
          alignSelf: "start",
          height: "1rem",
          width: "0.8rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "var(--orange-color)",
          color: "#ffffff",
          padding: "1rem",
          cursor: "pointer"
        }}
        onClick={() => handleShowMobile()}
      >
        X
      </span>
      <div className="inner-mobile-pop-up-wrapper">
        {token ? (
          <>
            <Link to="/" className="pop-up-item">
              <IoHome />
              Edit Profile
            </Link>
            <Link to="/" className="pop-up-item">
              <FaCartArrowDown />
              My Shop
            </Link>
            <Link to="/"className="pop-up-item">
              <BiCartAdd />
              Cart
            </Link>
            <Link className="pop-up-item" to="/">
              <FaFirstOrder />
              Orders
            </Link>
            <Link to="/" className="pop-up-item">
              <BsHeart />
              Wishlist
            </Link>
            <Link to="/" className="pop-up-item">
              <CiLogout />
             Logout
            </Link>
          </>
        ) : (
          <>
            <Link to="/login" className="pop-up-item">
              <CiLogin />
              Login
            </Link>
            <Link to="/signup" className="pop-up-item">
              <FaUserPlus />
              Signup
            </Link>
          </>
        )}
      </div>
    </MobileScreenStyle>
  );
}

export default MobilePopUp;
