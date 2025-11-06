import { useState } from "react";
import "./AddCunny.css";

const AddCunny = (props) => {
  const [name, setName] = useState("");
  const [school, setSchool] = useState("");

  const { data, setData } = props;

  const saveData = (e) => {
    e.preventDefault();
    const newData = {
      id: Math.floor(Math.random() * 1000),
      name: name,
      school: school,
    };
    setData([...data, newData]);
    setName("");
    setSchool("");
  };

  return (
    <form className="AddCunny" onSubmit={saveData}>
      <div>
        <label className="label">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div>
        <label className="label">School</label>
        <input
          type="text"
          value={school}
          onChange={(e) => setSchool(e.target.value)}
        ></input>
      </div>
      <button
        id="submit-btn"
        disabled={name.trim() === "" || school.trim() === ""}
      >
        Submit
      </button>
    </form>
  );
};

export default AddCunny;
