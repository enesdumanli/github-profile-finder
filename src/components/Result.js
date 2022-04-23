import React from "react";
import "../styles/Result.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Result = () => {
  const location = useLocation();
  const [user, setUser] = useState([]);
  const search = location.state.search;
  useEffect(() => {
    fetch(`https://api.github.com/users/${search}`).then((response) =>
      response.json().then((data) => {
        setUser(data);
      })
    );
  }, []);

  return (
    <div className="general-container">
      {user.length > 0 ? (
        <div style={{ color: "white" }}>
          <h1>{user.name}</h1>
        </div>
      ) : (
        <div>gelmedi</div>
      )}
    </div>
  );
};

export default Result;
