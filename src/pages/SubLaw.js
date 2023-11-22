import React from "react";
import "./index.css";
import NavbarLaw from "./Navbar";
import Footer from "./Footer";
import { useLocation, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../Slices/Modes/Mode";

export default function SubLaw() {
  //----------------Sections holding array---------------
  let [data, setdata] = useState([]);

  //-----------------Routing Catching parameters
  let navigate = useNavigate();
  let location = useLocation();

  //------------Navigate to home---------
  const MoreInfoComponent = (text) => {
    navigate(`/${text}`, { state: "Main" });
  };

  //-------------------Dark and Light mode method -------------

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  let [mode, setmode] = useState(true);
  let [bgcol, setbgcol] = useState("white");
  let [txtcol, settxtcol] = useState("#1a1a1a");
  let [title, settitle] = useState("");
  let [summary, setsummary] = useState("");

  const changeBG = () => {
    if (count === false) {
      setbgcol("white");
      settxtcol("#1a1a1a");
      setmode(true);
    } else {
      setbgcol("#1a1a1a");
      settxtcol("white");
      setmode(false);
    }
  };

  useEffect(() => {
    changeBG();
  }, [count]);

  const handleToggle = () => {
    dispatch(changeMode());
  };

  //-------------------------------Navigtes to the sections Content component--------------------------------

  const SubLawDetails = (ele, index) => {
    navigate("/LawDetails", {
      state: {
        titlename: title,
        chapterName: data[index].name,
        Section: ele,
        chapters: data,
        summary: summary,
      },
    });
  };

  useEffect(() => {
    console.log(location.state[1]);
    changeBG();
    if (location?.state?.detailpannel != undefined) {
      settitle(location?.state?.detailpannel.title);
      setdata(location?.state?.detailpannel?.chapters);
      setsummary(location?.state?.detailpannel?.summary);
    } else {
      setdata(location.state[1]);
      settitle(location.state[2]);
      setsummary(location.state[0]);
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    }
  }, [location]);

  //---------------------Dom Elements --------------------

  let MainCon = (
    <div style={{ background: bgcol }}>
      <NavbarLaw />{" "}
      <div className="sub-title">
        <p className="path-container">
          <span className="path" onClick={() => MoreInfoComponent("")}>
            Home
          </span>{" "}
          /{" "}
          <span className="path" onClick={() => MoreInfoComponent("law")}>
            Laws
          </span>{" "}
          /
        </p>
        <h1>{title}</h1>
      </div>
      <div className="summary" style={{ color: txtcol, background: bgcol }}>
        <h4
          className="chapter-name"
          style={{
            color: txtcol,
            background: bgcol,
            marginLeft: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          Summary :{"  "}
          <div
            className="toggler"
            onClick={handleToggle}
            style={{ marginRight: "20px" }}
          >
            <div
              className="togglediv"
              style={{
                transition: "all 0.5s ease",
                float: `${mode == true ? "left" : "right"}`,
              }}
            ></div>
          </div>
        </h4>
        <p>
          <ul className="summary-ul">
            {summary.split(".").map((ele) =>
              ele != "" ? (
                <>
                  <li>{ele}</li>
                </>
              ) : (
                ""
              )
            )}
          </ul>
        </p>
      </div>
      <div
        className="SubLawContainer"
        style={{
          color: txtcol,
          background: bgcol,
          minHeight: "400px",
          paddingBottom: "50px",
        }}
      >
        {data.map((e, ind) => {
          return (
            <li
              key={e.name}
              style={{ listStyleType: "none" }}
              className="outer-li"
            >
              <h4
                className="chapter-name"
                style={{
                  color: txtcol,
                  background: bgcol,
                }}
              >
                Chapter {"  "}
                {e.name
                  .split(" ")
                  .map((word, index) =>
                    index === 0
                      ? word.toUpperCase()
                      : word.charAt(0).toUpperCase() +
                        word.slice(1).toLowerCase()
                  )
                  .join(" ")}
              </h4>
              <ul className="Sections-names">
                {e.sections.map((sec) => {
                  return (
                    <li key={sec.name} onClick={() => SubLawDetails(sec, ind)}>
                      {sec.name}
                    </li>
                  );
                })}
              </ul>
            </li>
          );
        })}
      </div>
      <Footer />
    </div>
  );

  return MainCon;
}
