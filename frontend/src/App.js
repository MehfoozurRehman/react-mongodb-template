import { useEffect, useState } from "react";
import "./App.css";
import axios from "./axios";

function App() {
  const [apiData, setApiData] = useState([]);
  useEffect(() => {
    async function fetchData() {
      let res = await axios.get("/books/entry");
      setApiData(res.data);
      console.log(res.data);
    }
    fetchData();
  }, []);
  return (
    <div className="App">
      {apiData.map((data) => (
        <li style={{ display: "flex", alignItems: "center" }} key={data.name}>
          {data.name}
          <img style={{ width: 300, height: 300 }} src={data.imgURL} alt="" />
        </li>
      ))}
    </div>
  );
}

export default App;
