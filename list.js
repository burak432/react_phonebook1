import react from "react";
import { useState } from "react";

function Listele({ allEntries }) {
  const [filterText, setfilterText] = useState("");

  const filterOnChange = (e) => {
    setfilterText(e.target.value);
  };

  const filtered = allEntries.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key].toString().toLowerCase().includes(filterText.toLowerCase())
    );
  });

  return (
    <div>
      <div>
        <input
          type="text"
          name="filterInput"
          placeholder="Filter list"
          value={filterText}
          onChange={filterOnChange}
        ></input>
      </div>
      <ul>
        {filtered.map((item, index) => (
          <li key={index}>
            {item.fullName} {item.phoneNum}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Listele;
