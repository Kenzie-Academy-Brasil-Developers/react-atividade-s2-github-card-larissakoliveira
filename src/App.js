import { useEffect, useState } from "react";
import InputSearch from "./components/Input";
import ShowResult from "./components/ShowResult";
import "./App.css";

function App() {
  const [apiPage, setApiPage] = useState("");
  const [information, setInformation] = useState("");

  useEffect(() => {
      setInformation(apiPage)
  },[apiPage])

  const handleInput = () => {};

  return (
    <div className="App">
      <InputSearch setApiPage={setApiPage}/>
      <ShowResult information={information}/>
    </div>
  );
}

export default App;

// fetch()
//       .then((response) => response.json())
//       .then((response) => {
//         setInformation(response);
//       })
//       .catch((err) => console.log(err));