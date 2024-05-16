import React from "react";
import "./MyWork.css";
import "./mywork_data";
import mywork_data from "./mywork_data";
function MyWork() {
  return (
    <div>
      <div className="mywork">
        <div className="mywork-title">
          <h1>My Latest Work</h1>
          <img src="." alt="" />
        </div>
        <div className="mywork-contanir">
          {mywork_data.map((work) => (
            <img key={work.id} src={work?.image} alt={work.title} />
          ))}
        </div>
        <div className="mywork-showmore">
          <p>Show More</p>
          <img
            style={{
              color: "white",
              backgroundColor: "white",
              height: "26px",
              width: "38px",
            }}
            src="./img/arrow.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default MyWork;
