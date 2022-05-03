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
  const [userNotFound, setUserNotFound] = useState(false);
  const search = location.state.search;

  const dummyRepos = [
    {
      id: -2,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
    {
      id: -1,
      open_issues: 0,
      watchers: 0,
      default_branch: "main",
    },
  ];

  useEffect(() => {
    fetch(`https://api.github.com/users/${search}`, {
      method: "GET",
    }).then((response) =>
      response.ok
        ? response.json().then((data) => setUser(data))
        : setUserNotFound(true)
    );
    fetch(`https://api.github.com/users/${search}/repos`, {
      per_page: 10,
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
              style={{ right: `${window.innerWidth / 2 - 254}px` }}
            >
              <p className="result-view-on-github">View on Github</p>
              <img src={view} alt="viewgithub" />
            </div>
            <div className="result-top-container-name">{user.name}</div>
            <div className="result-top-container-username">@{user.login}</div>
            <div className="result-top-container-informations">
              <div className="information-container">
                <p className="information-number">{user.public_repos}</p>
                <p className="information-headline">Repositories</p>
              </div>
              <div className="information-container">
                <p className="information-number">{user.following}</p>
                <p className="information-headline">Following</p>
              </div>
              <div className="information-container">
                <p className="information-number">{user.followers}</p>
                <p className="information-headline">Followers</p>
              </div>
            </div>
          </div>
          <div className="result-repository-headline">Repositories</div>
          {repos.slice(0, currentSlice).map((repo, index) => (
            <Repository repo={repo} id={index} />
          ))}
          {/*reposu slice yap başta 0,2 arası. buton tıklanırsa 2 aralığını arttır. */}
          <button
            onClick={() => setCurrentSlice(currentSlice + 2)}
            className="load-more-button"
            style={currentSlice > 2 ? { marginBottom: "153px" } : {}}
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
          {dummyRepos.map((repo) => (
            <Repository repo={repo} id={repo.id} />
          ))}
          <div
            style={userNotFound ? {} : { visibility: "hidden" }}
            className="error-container"
          >
            <p className="error-container-para">
              Couldn't load the user profile. Please try again.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Result;
