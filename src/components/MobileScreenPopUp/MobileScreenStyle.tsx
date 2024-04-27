import styled from "styled-components";
import { MobilePopUpProps } from "./MobilePopUp";

const MobileScreenStyle = styled.div<MobilePopUpProps>`
 min-height: 100vh;
 width: 50%;
 background-color: #fff;
 position: fixed;
 top: 0;
 right: 0; 
 z-index: 1000;
 display: flex;
 flex-direction: column;
 justify-content: start;
 align-items: center;
 padding: 1.5rem;
 padding-top: 2rem;
 animation: ${(props) => (props.show ? 'slideIn 0.5s forwards' : 'slideOut 0.5s backwards')};
 visibility: ${(props) => (props.show ? 'visible' : 'hidden')};
 @keyframes slideIn {
 from {
    transform: translateX(100%);
 }
 to {
    transform: translateX(0);
 }
}

@keyframes slideOut {
 from {
    transform: translateX(0);
 }
 to {
    transform: translateX(100%);
 }
}

 box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
 .inner-mobile-pop-up-wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 3rem;
    .pop-up-item {
      display: flex;
      align-items: center;
      justify-content: start;
      text-decoration: none;
      gap: 1rem;
      color: #000000;
      padding: 1rem 0.2rem;
      border-radius: 5px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        background-color: #f2f2f2;
        color: var(--orange-color);
        padding-left: 1rem;
      }
      a{
        text-decoration: none;
        color: inherit;
      }
    }
 }
`;

export default MobileScreenStyle;
