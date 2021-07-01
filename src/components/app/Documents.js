import React from "react";
import DocumentData from "../Data/Documents.js";
import docImage from "../assets/folder_open36dp.png";

const Documents = () => (
  <div className="web_section_box">
    <h3 className="web_section_title">Documents</h3>
    <div className="notes">
      Note: Please feel free to reach out to{" "}
      <a href="mailto:alannaeeverett@gmail.com">me</a> with any questions.{" "}
    </div>
    {DocumentData.map((doc, docIndex) => (
      <section className="serviceSingleSection" key={docIndex}>
        <h2 className="serviceHeading">{doc.Title}</h2>
        <a href={doc.href} target="_blank" rel="noopener noreferrer">
          <img src={docImage} alt={doc.Title} /> {doc.Title}
        </a>
      </section>
    ))}
  </div>
);

export default Documents;
