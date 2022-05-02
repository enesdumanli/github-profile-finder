import React from "react";
import "../styles/Result.css";
import view from "../utils/view.svg";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Repository from "./Repository";

const Result = () => {
  const location = useLocation();
  const [user, setUser] = useState([]);
  const [repos, setRepos] = useState([]);
  const [currentSlice, setCurrentSlice] = useState(2);
  const search = location.state.search;

  const dummyRepos = [
    {
      id: 0,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
    {
      id: 1,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
    {
      id: 2,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
  ];

  useEffect(() => {
    fetch(`https://api.github.com/users/${search}`, {
      method: "GET",
    }).then((response) =>
      response.json().then((data) => {
        setUser(data);
      })
    );
    fetch(`https://api.github.com/users/${search}/repos`, {
      method: "GET",
    }).then((response) =>
      response.json().then((data) => {
        setRepos(data);
      })
    );
  }, []);

  return (
    <div>
      {user.location && repos.length > 0 ? (
        <div className="general-container">
          <div className="result-top-container">
            <img
              className="result-top-container-logo"
              src={user.avatar_url}
              alt="logo"
            />
            <div
              onClick={() => window.open(user.html_url)}
              className="result-top-container-right"
            >
              <p className="result-view-on-github">View on Github</p>
              <img src={view} alt="dana" />
            </div>
            <div className="result-top-container-name">{user.name}</div>
            <div className="result-top-container-username">@{user.login}</div>
            <div className="result-top-container-informations">
              <div className="information-container">
                <p
                  style={{ left: "16.97%", right: "80.29%" }}
                  className="information-number"
                >
                  {user.public_repos}
                </p>
                <p
                  style={{ left: "9.12%", right: "72.45%" }}
                  className="information-headline"
                >
                  Repositories
                </p>
              </div>
              <div className="information-container">
                <p
                  style={{ left: "48.72%", right: "48.54%" }}
                  className="information-number"
                >
                  {user.following}
                </p>
                <p
                  style={{ left: "43.07%", right: "43.07%" }}
                  className="information-headline"
                >
                  Following
                </p>
              </div>
              <div className="information-container">
                <p
                  style={{ left: "76.46%", right: "12.96%" }}
                  className="information-number"
                >
                  {user.followers}
                </p>
                <p
                  style={{ left: "74.82%", right: "11.31% " }}
                  className="information-headline"
                >
                  Followers
                </p>
              </div>
            </div>
          </div>
          <div className="result-repository-headline"></div>
          {repos.slice(0, currentSlice).map((repo, index) => (
            <Repository repo={repo} id={index} />
          ))}
          {/*reposu slice yap başta 0,2 arası. buton tıklanırsa 2 aralığını arttır. */}
          <button
            onClick={() => setCurrentSlice(currentSlice + 2)}
            className="load-more-button"
          >
            <p className="load-more-button-p">Load More</p>
          </button>
        </div>
      ) : (
        <div className="general-container">
          <div className="result-top-container">
            <div className="result-top-container-logo"></div>
            <div
              style={{ background: "#222222" }}
              className="result-top-container-name"
            ></div>
            <div
              style={{ background: "#222222" }}
              className="result-top-container-username"
            ></div>
          </div>
          <div
            style={{ background: "#222222" }}
            className="result-repository-headline"
          ></div>
          {dummyRepos.map((repo, index) => (
            <Repository repo={repo} id={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Result;
