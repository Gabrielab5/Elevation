import { useState } from "react";

const Ex1 = () => {
  const [person, setPerson] = useState({ name: "", age: "" });
 
  const handleChange = (event, property) => {
    setPerson({ ...person, [property]: event.target.value });
  };

  const handleButtonPress = () => {
    const { name, age } = person;
    alert(`Come in ${name}, you're ${age} - that's good enough`)
  }

  return (
    <div>
      <input
        id="name-input"
        onChange={(e) => handleChange(e, "name")}
        value={person.name}
      />
      <input
        id="age-input"
        onChange={(e) => handleChange(e, "age")}
        value={person.age}
      />
      <button onClick={handleButtonPress}>Go to Bar </button>
    </div>
  );
};
export default Ex1;
