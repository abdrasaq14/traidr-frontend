import styled from "styled-components";

export const UserProfileModalContainer = styled.div`
  background-color: white;
  min-width: 15rem;
  min-height: 5rem;
  border-radius: 4px;
  position: absolute;
  overflow: hidden;
  top: 3.5rem;
  right: 0;
  z-index: 1000;
  text-decoration: none;
  box-shadow: -5px 0px 10px 0px rgba(0, 0, 0, 0.1);
  animation: modal-animation 0.3s ease-in-out;
  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
  @keyframes modal-animation {
    0% {
      opacity: 0;
      height: 1rem;
    }
    100% {
      opacity: 1;
      height: 45vh;
      min-height: 45vh;
    }
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--orange-color);
  padding: 0.5rem 1rem;

  .user-profile-modal-user-image-container {
    border-radius: 100%;
    margin-right: 1rem;
   
  }

  .user-profile-modal-user-info-container {
    width: 100%;
    a {
      text-decoration: none;
    }
  }

  .user-profile-modal-user-name {
    margin-bottom: 0;
    font-weight: 700;
    font-size: .8rem;
    color: #ffffff
  }

  .user-profile-modal-user-visit-profile {
    font-size: 1.2rem;
    font-weight: 300;
    color: white;
    
  }
  .user-profile-modal-user-visit-profile:hover {
    font-size: 1.2rem;
    font-weight: 350;
  }
`;

export const ModalBody = styled.div`
  background-color: white;
  padding: 1rem;
  a {
    text-decoration: none;
  }

  .user-profile-modal-link-text-and-icon-container {
    display: flex;
    margin: 1.1rem 0;
  }

  .user-profile-modal-link-icon {
    width: 1.5rem;
    margin-right: 1rem;
  }

  .user-profile-modal-link-text {
    color: black;
    font-size: .8rem;
    text-decoration: none;
  }
  .user-profile-modal-link-text:hover {
    color: #e04f16;
  }
`;
