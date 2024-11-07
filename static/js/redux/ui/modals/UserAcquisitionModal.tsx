/*
Copyright (C) 2017 Semester.ly Technologies, LLC

Semester.ly is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

Semester.ly is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
*/

import React from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { userAcquisitionModalActions } from "../../state/slices";
import { selectTheme } from "../../state/slices/themeSlice";
import Modal from "./Modal";

/**
 * This modal appears when a student tries to log in or sign up (it should really be
 * called the LoginModal). It allows the student to log in with Google, Facebook or
 * JHED.
 */
const UserAcquisitionModal = () => {
  const LoginToken = useAppSelector((state) => state.userInfo.data.LoginToken);
  const LoginHash = useAppSelector((state) => state.userInfo.data.LoginHash);
  const isVisible = useAppSelector((state) => state.userAcquisitionModal.isVisible);
  const dispatch = useAppDispatch();
  const isDarkTheme = useAppSelector(selectTheme).name === "dark";

  const modalHeader = (
    <div className="modal-header">
      <h1>Login/Signup</h1>
    </div>
  );

  return (
    <Modal
      visible={isVisible}
      className="user-acquisition-modal abnb-modal max-modal"
      customStyles={{
        width: "90%",
        height: "520px",
        maxWidth: "450px",
      }}
      onClose={() => {
        dispatch(userAcquisitionModalActions.toggleAcquisitionModal());
        history.replaceState({}, "Semester.ly", "/");
      }}
    >
      {modalHeader}

      <div className="user-acquisition-modal__container">
        <h3>Recommended:</h3>
        <button
          className="btn abnb-btn fb-btn"
          onClick={() => {
            const link = document.createElement("a");
            link.href =
              `/login/facebook/?student_token=${LoginToken}` +
              `&login_hash=${LoginHash}`;
            document.body.appendChild(link);
            link.click();
          }}
        >
          <span className="img-icon">
            <i className="fa-brands fa-facebook" />
          </span>
          <span>Continue with Facebook</span>
        </button>
        <p className="method-details">
          Allows the option to see friends in your classes.
        </p>
        <br />

        <button
          className="btn abnb-btn secondary"
          onClick={() => {
            const link = document.createElement("a");
            link.href = `/login/azuread-tenant-oauth2/?student_token=${LoginToken}&login_hash=${LoginHash}`;
            document.body.appendChild(link);
            link.click();
          }}
        >
          <span className="img-icon">
            <img
              alt="JHU"
              className="jhu-square"
              src={`/static/img/school_logos/jhu-square${
                isDarkTheme ? "-dark" : ""
              }.png`}
            />
          </span>
          <span>Continue with JHED*</span>
        </button>
        <p className="method-details">* Exclusive to JHU students & faculty.</p>

        <div className="or-separator">
          <span className="h6 or-separator--text">or</span>
        </div>

        <button
          className="btn abnb-btn secondary"
          onClick={() => {
            const link = document.createElement("a");
            link.href = `/login/google-oauth2/?student_token=${LoginToken}&login_hash=${LoginHash}`;
            document.body.appendChild(link);
            link.click();
          }}
        >
          <span className="img-icon">
            <img
              alt="Google"
              className="google-logo"
              src="https://a0.muscache.com/airbnb/static/signinup/google_icon_2x-745c2280e5004d4c90e3ca4e60e3f677.png"
            />
          </span>
          <span>Continue with Google</span>
        </button>
      </div>
    </Modal>
  );
};

export default UserAcquisitionModal;
