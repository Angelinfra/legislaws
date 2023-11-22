import React, { useEffect } from "react";
import NavbarLaw from "./Navbar";
import Footer from "./Footer";
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeMode } from "../Slices/Modes/Mode";

export default function SubLawDetails() {
  //--------------------switch b/w dark and light theme------------------------

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  let [mode, setmode] = useState(true);
  let [bgcol, setbgcol] = useState("white");
  let [txtcol, settxtcol] = useState("#1a1a1a");

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

  //-----------------------------------Navigating to the previous components--------------------------

  let navigate = useNavigate();
  let location = useLocation();

  const MoreInfoComponent = (text) => {
    navigate(`/${text}`, { state: "sub" });
  };

  const tochapter = (text) => {
    navigate(`/${text}`, {
      state: {
        detailpannel: {
          title: location.state.titlename,
          chapters: location.state.chapters,
          summary: location.state.summary,
        },
      },
    });
  };

  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;

  return (
    <>
      <NavbarLaw />
      <div className="sub-title">
        <p className="path-container">
          <span className="path" onClick={() => MoreInfoComponent("")}>
            Home
          </span>{" "}
          /{" "}
          <span className="path" onClick={() => MoreInfoComponent("law")}>
            Laws
          </span>{" "}
          /{" "}
          <span className="path" onClick={() => tochapter("LawSection")}>
            Chapters
          </span>{" "}
          /
        </p>
        <h1>{location.state.titlename}</h1>
      </div>

      <div
        className="SubLawDetails"
        style={{
          minHeight: "80vh",
          background: bgcol,
          color: txtcol,
          paddingBottom: "50px",
        }}
      >
        <h3
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
            flexWrap: "nowrap",
            textAlign: "left",
          }}
        >
          {location.state.Section.name}:
          <div
            className="toggler"
            onClick={handleToggle}
            style={{ marginRight: "0px", minWidth: "50px" }}
          >
            <div
              className="togglediv"
              style={{
                transition: "all 0.5s ease",
                float: `${mode == true ? "left" : "right"}`,
              }}
            ></div>
          </div>
        </h3>
        <br />

        <ul style={{ color: txtcol }}>
          {location.state.Section.details.map((con) => {
            return (
              <>
                {typeof con == "string" ? (
                  <li key={con} style={{ marginBottom: "15px" }}>
                    {con}
                  </li>
                ) : (
                  <li key={con}>
                    {con.name}
                    <ul id="innerlist" style={{ color: txtcol }}>
                      {con.details.map((d) => {
                        return (
                          <>
                            {typeof d == "string" ? (
                              <li key={d}>{d}</li>
                            ) : (
                              <li key={d}>
                                {d.name}
                                <ul id="innerlist" style={{ color: txtcol }}>
                                  {d.details.map((dn) => {
                                    return <li>{dn}</li>;
                                  })}
                                </ul>
                              </li>
                            )}
                          </>
                        );
                      })}
                    </ul>
                    <br />
                  </li>
                )}
              </>
            );
          })}
        </ul>
      </div>
      <Footer />
    </>
  );
}
