import React, { useContext } from "react";
import { AppContext } from "../context";

import SignInForm from "./SignInForm";

import styled from "styled-components/macro";
import { theme } from "../styles";
const { colors } = theme;

const SignInModal = () => {
  const { modalState, toggleModals } = useContext(AppContext);

  const closeModal = () => {
    toggleModals();
  };

  return (
    <>
      {modalState.signInModal && (
        <ModalContainer>
          <ModalFade onClick={closeModal} />
          <ModalWrapper>
            <div className="dialog">
              <div className="content">
                <div className="content__header">
                  <h5>Sign In</h5>
                  <button
                    className="close fat black"
                    onClick={closeModal}
                  ></button>
                </div>
                <div className="content__body">
                  <SignInForm closeModal={closeModal} />
                </div>
              </div>
            </div>
          </ModalWrapper>
        </ModalContainer>
      )}
    </>
  );
};

export default SignInModal;

const ModalContainer = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
`;

const ModalFade = styled.div`
  width: 100%t;
  height: 100%;
  background-color: rgba(40, 44, 52, 0.75);
`;

const ModalWrapper = styled.div`
  position: absolute;
  min-width: 380px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .dialog {
    position: relative;
    width: auto;
    max-width: 380px;
    margin: 1.75rem auto;
    // margin: 0.5rem;
    pointer-events: none;
  }
  .content {
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: auto;
    background-color: ${colors.darkGrey};
    background-clip: padding-box;
    border: 1px solid rgba(0, 0, 0, 0.2);
    border-radius: 0.3rem;
    outline: 0;
  }
  .content__header {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid #dee2e6;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
  }
  h5 {
    margin-bottom: 0;
    line-height: 1.5;
  }
  .close {
    position: relative;
    display: inline-block;
    width: 1em;
    height: 1em;
    padding: 0.25em 0.25em;
    border: 0;
    border-radius: 50%;
    background-color: inherit;
  }
  .close:hover {
    transform: scale(1.5);
  }
  .close::before,
  .close::after {
    content: "";
    position: absolute;
    height: 2px;
    width: 100%;
    top: 50%;
    left: 0;
    margin-top: -1px;
    background-color: ${colors.white};
  }
  .close::before {
    transform: rotate(45deg);
    border-radius: 100%;
  }
  .close::after {
    transform: rotate(-45deg);
    border-radius: 100%;
  }
  .content__body {
    position: relative;
    flex: 1 1 auto;
  }
`;
