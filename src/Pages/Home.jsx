import React, { useState } from "react";
import "../Styles/Home.scss";
import { BiColorFill, BiMoon, BiSun } from "react-icons/bi";
import { FaArrowRight } from "react-icons/fa";
import "../Styles/About.scss";

const Home = () => {
  const colors = ["#e27d60", "#85dcbe", "orange", "pink", "#41b3a3", "#c38d9e"];
  const front_colors = ["white", "black"];
  const [color, set_color] = useState();
  const [show_colors, set_show_colors] = useState(false);
  const [front_color, set_front_color] = useState();
  const [dark_theme, set_dark_theme] = useState(false);
  return (
    <div className={dark_theme == true ? "dark home-wrap" : "light home-wrap"}>
      <div
        className="hero-sect flex col"
        style={{
          background: `${color}`,
        }}
      >
        <div
          className="colors-sect flex col"
          style={{ maxHeight: `${show_colors == true ? "100vh" : "0px"}` }}
        >
          <div className="top flex">
            {colors.map((color) => (
              <div
                key={color}
                className="color-box"
                style={{
                  background: `${color}`,
                }}
                onClick={() => set_color(color)}
              ></div>
            ))}
          </div>
          <div className="bottom flex">
            {front_colors.map((color) => (
              <div
                key={color}
                className="color-box"
                style={{
                  background: `${color}`,
                }}
                onClick={() => set_front_color(color)}
              ></div>
            ))}
          </div>
        </div>
        <h2 style={{ color: front_color }}>Hello I'm</h2>
        <h1 style={{ color: front_color }}>Jawad</h1>
      </div>
      <div className="color-picker flex col">
        <button
          onClick={() => set_show_colors(!show_colors)}
          style={{
            border: `${show_colors == true ? "1px solid white" : ""}`,
            color: `${dark_theme == true ? "white" : ""}`,
          }}
        >
          <BiColorFill />
        </button>
        {dark_theme == true ? (
          <button
            style={{ color: `${dark_theme == true ? "white" : ""}` }}
            onClick={() => set_dark_theme(false)}
          >
            <BiSun />
          </button>
        ) : (
          <button
            style={{
              color: `${dark_theme == true ? "white" : ""}`,
            }}
            onClick={() => set_dark_theme(true)}
          >
            <BiMoon />
          </button>
        )}
      </div>
      <div
        className={
          dark_theme == true ? "dark navs-wrap flex" : "light navs-wrap flex"
        }
      >
        <ul className="flex">
          <li>About</li>
          <li>Gallery</li>
          <li>Contact</li>
          <li>Work</li>
        </ul>
      </div>
      <div className="about-page flex col">
        <h1>About</h1>
        <div className="bottom flex">
          <div className="img-sect flex">
            <img src="./avatar.png" alt="" />
          </div>
          <div className="content flex col">
            <p>
              Welcome! to my world of web development , I am Jawad Ali A
              passionate web developer leveraging most new technologies like
              blockchain and eteherium with frontend tehnologies like react and
              nextjs and what makes me expert in web development is my passion
              and technical expertise with personal touch.
            </p>
            <button
              className="flex"
              style={{ background: `${color}`, color: front_color }}
            >
              Read More{" "}
              <span style={{ color: front_color }}>
                <FaArrowRight />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
