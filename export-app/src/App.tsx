import React, { useEffect, useState } from "react";
import "./App.css";
import Team from "./component/Team";
import { TeamInfo } from "./@types";

function App() {
  const [Data, setData] = useState<TeamInfo>();

  const fetchData = () => {
    const newData = {
      teamName: "T1",
      teamImgUrl:
        "https://steamuserimages-a.akamaihd.net/ugc/1466436327579044505/538FD12B334E443F3BF9C95FEB1A47B524406893/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true",
      playerName: "Faker",
      playerImgUrl:
        "https://upload.wikimedia.org/wikipedia/commons/1/1a/Faker_2020_interview.jpg",
    } as TeamInfo;
    setData(newData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>Export App</h2>
        {Data ? <Team team={Data} /> : null}
      </header>
    </div>
  );
}

export default App;
