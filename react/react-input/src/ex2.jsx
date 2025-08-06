import   { useState } from "react";

const Ex2 = () => {
  const [name, setName] = useState("");
  const [fruit, setFruit] = useState("");

   const handleFruitChange = (e) => {
    const newFruit = e.target.value; 
    setFruit(newFruit); 

    if (name && newFruit) { 
      alert(`${name} selected ${newFruit}`);
    }
  };
    
  return (
    <div>
      <input
        id="name-input"
        placeholder="Enter name"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <select
        id="select-input"
        onChange={handleFruitChange}
        value={fruit}
      >
        <option value="" disabled>Select a fruit</option>
        <option value="peach">peach</option>
        <option value="apple">apple</option>
        <option value="mango">mango</option>
        <option value="banana">banana</option>
      </select>
    </div>
  );
};
export default Ex2;
