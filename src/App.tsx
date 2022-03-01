import React from "react";
import { RecoilRoot } from "recoil";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </div>
  );
}

export default App;
