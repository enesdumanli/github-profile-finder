import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import dana from "../utils/dana.svg";

function Home() {
  const navigate = useNavigate();

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      navigate("/result", { state: { search: e.target.value } });
    }
  };

  return (
    <div style={{ height: window.innerHeight }} className="general-container">
      <div className="home-container">
        <img src={dana} alt="dana" />
        <p className="text">Github Profile Explorer</p>

        <input
          id="someinput"
          placeholder={"Type username"}
          type="text"
          onKeyPress={handleEnter}
        />
      </div>
    </div>
  );
}

export default Home;
