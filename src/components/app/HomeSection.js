import React from "react";
import brain from "../assets/brain.png";

const Home = ({ toggleActive }) => {

return(
  <div className="web_section_box">
  <img
    src={brain}
    alt="Alanna Teaching"
    id="heroContactPic"
    rel="noopener noreferrer"
    onClick={() => toggleActive("Service")}
  />
  <section id="heroText">
    Dr. Alanna Everett
    <section id="heroTitle">Psychologist</section>
  </section>
</div>
)
};

export default Home;
