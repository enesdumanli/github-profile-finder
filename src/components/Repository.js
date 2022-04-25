import React from "react";
import "../styles/Result.css";
const Repository = ({ repo, id }) => {
  return (
    id < 2 && (
      <div
        style={{ top: `${514 + 106 * id}px` }}
        className="result-repository-container"
      >
        <div
          style={{ width: "300px" }}
          className="result-repository-container-name"
        >
          {repo.name}
        </div>
        <div className="result-repository-container-description">
          {repo.description}
        </div>
        <div className="result-repository-container-stars">
          <p className="result-repository-stars">{repo.stargazers_count}</p>
          <p className="result-repository-stars-word">Stars</p>
        </div>
      </div>
    )
  );
};

export default Repository;
