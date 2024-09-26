import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";
import { Link } from "react-router-dom";




function Home() {
  return (
    <div>
          <Link to={"/protected/dashboard"}>Dashboard</Link>
          <Link to={"/protected/alarms"}>Alarams</Link>
          
    </div>

  );
}


export default Home;