import React from "react";
import { useState } from "react";

function MyForm({ allEntries, setAllEntries }) {
  const [userEntry, setuserEntry] = useState({
    fullName: "",
    phoneNum: "",
  });

  const formSubmit = (e) => {
    e.preventDefault();
    if (userEntry.fullName === "" || userEntry.phoneNum === "") {
      return false;
    }
    setAllEntries([...allEntries, userEntry]);
    console.log(allEntries);
  };

  const inputChange = (e) => {
    setuserEntry({ ...userEntry, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={formSubmit}>
      <div>
        <label htmlFor="fullName">Enter your name</label>
        <input
          type="text"
          name="fullName"
          onChange={inputChange}
          value={userEntry.fullName}
        />
      </div>

      <div>
        <label htmlFor="phoneNum">Enter your number </label>
        <input
          type="text"
          name="phoneNum"
          onChange={inputChange}
          value={userEntry.phoneNum}
        />
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default MyForm;
