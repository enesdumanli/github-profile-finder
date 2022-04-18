import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import dana from "../utils/dana.svg";

function Home() {
  const navigate = useNavigate();

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      navigate("/dashboard");
    }
  };

  return (
    <div className="general-container">
      <div className="home-container">
        <img src={dana} alt="dana" />
        <p className="text">Github Profile Explorer</p>
        <form>
          <input
            id="someinput"
            placeholder={"Type a username"}
            className="input-form"
            type="text"
            onKeyPress={handleEnter}
          />
        </form>
      </div>
    </div>
  );
}

export default Home;
