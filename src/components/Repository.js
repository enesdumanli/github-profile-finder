import React from "react";
import "../styles/Result.css";
const Repository = ({ repo, id }) => {
  console.log("calisiyorum");
  return (
    <div
      onClick={() => window.open(repo.html_url)}
      className="result-repository-container"
    >
      <div style={{ marginLeft: "26px" }}>
        <p
          style={{ width: "300px" }}
          className="result-repository-container-name"
        >
          {repo.name}
        </p>
        <p className="result-repository-container-description">
          {repo.description && repo.description.length > 100
            ? `${repo.description.slice(0, 140)}...`
            : repo.description}
        </p>
      </div>
      <div style={{ marginRight: "23px" }}>
        <p className="result-repository-stars">{repo.stargazers_count}</p>
        <p className="result-repository-stars-word">Stars</p>
      </div>
    </div>
  );
};

export default Repository;
