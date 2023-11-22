import React from "react";
import "./index.css";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <>
      <footer className="bottom">
        <br />
        <hr className="hr" />
        <div className="under-footer">
          <section className="profile-icons">
            <BsFacebook className="profile-icon" />

            <BsInstagram className="profile-icon" />

            <BsTwitter className="profile-icon" />

            <BsLinkedin className="profile-icon" />
          </section>
          <section className="copyrightsection">
            CopyRights ©️ 2023 - <b>Legis Law</b>
          </section>
        </div>
      </footer>
    </>
  );
}
