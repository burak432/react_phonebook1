import react from "react";

function Listele({ allEntries }) {
  return (
    <div>
      <ul>
        {allEntries.map((item, index) => (
          <li key={index}>{item.fullName} {item.phoneNum}</li>
        ))}
      </ul>
    </div>
  );
}

export default Listele;
