import React from "react";
import "./App.css";
import zustandLogo from "./assets/zustand.logo.png";
import easyPeasyLogo from "./assets/easy-peasy.logo.png";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <img
            src={zustandLogo}
            alt="zustand"
            style={{ height: 200 }}
          />
          <h1>Zustand Store</h1>
        </div>

        <div style={{ marginTop: 50 }}>
          <img
            src={easyPeasyLogo}
            alt="easy-peasy"
            style={{ height: 200 }}
          />
          <h1>Easy Peasy Store</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
