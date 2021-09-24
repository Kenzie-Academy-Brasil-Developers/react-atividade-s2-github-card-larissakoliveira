import { useEffect, useState } from "react";
import InputSearch from "./components/Input";
import "./App.css";

function App() {
  const [apiPage, setApiPage] = useState("");

  useEffect(() => {
    setApiPage(apiPage);
  }, [apiPage]);

  return (
    <div className="App">
      <InputSearch setApiPage={setApiPage} />
    </div>
  );
}

export default App;