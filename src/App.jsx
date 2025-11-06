import { useEffect, useState } from "react";
import Header from "./components/Header";
import AddCunny from "./components/AddCunny";
import PersonList from "./components/PersonList";
import "./App.css";

export default function App() {
  const [data, setData] = useState([
    { id: 1, name: "Hina", school: "Gehenna" },
    { id: 2, name: "Neru", school: "Millenium" },
    { id: 3, name: "Hoshino", school: "Abydos" },
  ]);

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const deleteCunny = (id) => {
    const result = data.filter((user) => user.id !== id);
    setData(result);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <div className={theme}>
      <div className="App">
        <Header theme={theme} setTheme={setTheme} />
        <AddCunny data={data} setData={setData} />
        <PersonList data={data} deleteCunny={deleteCunny} />
      </div>
    </div>
  );
}
