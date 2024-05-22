import React from "react";
import "./MyWork.css";
import "./mywork_data";
import mywork_data from "./mywork_data";
function MyWork() {
  return (
    <div id="portfolio"className="mywork">
      <div className="mywork_title">
        <h1>My Latest Work</h1>
      </div>
      <div className="mywork_contanir">
        {mywork_data.map((work) => (
          <img
            key={work.id}
            src={work?.image}
            alt={work.title}
            className="mywork_contanir_img"
          />
        ))}
      </div>
      <div className="mywork_showmore">
        <a
          href="https://github.com/Aadibkai"
          style={{ textDecoration: "none" }}
        >
          <p style={{ fontSize: "30px", color: "white", fontWeight: "600" }}>
            Show More
          </p>
        </a>
      </div>
    </div>
  );
}

export default MyWork;
