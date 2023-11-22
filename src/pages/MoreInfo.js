import React from "react";
import NavbarLaw from "./Navbar";
import { useLocation } from "react-router-dom";
import "./index.css";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import { BsFacebook, BsInstagram, BsTwitter, BsLinkedin } from "react-icons/bs";

export default function MoreInfo() {
  let location = useLocation();
  let navigate = useNavigate();
  const MoreInfoComponent = (text) => {
    navigate(`${text}`, { state: "sub" });
  };

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  return (
    <>
      <NavbarLaw />

      <div className="sub-title">
        <p className="path-container">
          {" "}
          <span className="path" onClick={() => MoreInfoComponent("/")}>
            Home
          </span>{" "}
          /{" "}
          <span className="path" onClick={() => MoreInfoComponent("/blog")}>
            Blogs
          </span>{" "}
        </p>
        <h1>Title of the Blog </h1>
      </div>
      <br />
      <section className="container-fluid card-blog-outer">
        <div className="row">
          <div className="col-md-12">
            <div className="More_img main-blog-card">
              <div className="img-blog-outer">
                <img
                  className="img_blog_more"
                  src="https://images.unsplash.com/photo-1568092806323-8ec13dfa9b92?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80"
                />
              </div>

              <div
                style={{
                  padding: "5px",
                  margin: "10px 5px 5px 5px",
                  borderRadius: "10px",
                }}
              >
                <h6 className="date" style={{ marginLeft: "10px" }}>
                  October 31,2023
                </h6>
                <div className="blog-icons">
                  <BsFacebook className="facebook icon" />
                  <BsInstagram className="instagram icon" />
                  <BsLinkedin className="linkedin icon" />
                  <BsTwitter className="twitter icon" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 More_Content">
            <p>
              <span style={{ fontSize: "30px ", fontWeight: "bold" }}>
                The Legal System:
              </span>
              <br />
              <br />
              The legal system of India consists of civil law, common law,
              customary law, religious law and corporate law within the legal
              framework inherited from the colonial era and various legislation
              first introduced by the British are still in effect in modified
              forms today. Since the drafting of the Indian Constitution, Indian
              laws also adhere to the United Nations guidelines on human rights
              law and the environmental law. Indian personal law is fairly
              complex, with each religion adhering to its own specific laws. In
              most states, registering of marriages and divorces is not
              compulsory. Separate laws govern Hindus including Sikhs, Jains and
              Buddhist, Muslims, Christians, and followers of other religions.
              The exception to this rule is in the state of Goa, where a uniform
              civil code is in place, in which all religions have a common law
              regarding marriages, divorces, and adoption.
              <br />
              <br />
              In the first major reformist judgment for the 2010s, the Supreme
              Court of India banned the Islamic practice of "Triple Talaq"
              (divorce by uttering of the "Talaq" word thrice by the husband).
              The landmark Supreme Court of India judgment was welcomed by
              women's rights activists across India. As of July 2022, there are
              about 839 Central laws as per the online repository hosted by the
              Legislative Department, Ministry of Law and Justice, Government of
              India.Further, there are many State laws for each state, which can
              also be accessed from the same repository.
            </p>
          </div>
        </div>{" "}
      </section>
      <Footer />
    </>
  );
}
