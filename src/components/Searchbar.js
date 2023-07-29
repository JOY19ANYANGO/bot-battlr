import React, { useState } from "react";

function Searchbar({ onSearch }) {
  const [bot_class, setBot_class] = useState("");

  function handleSearch(event) {
    setBot_class(event.target.value);
    // Pass the entered description back to the parent component
    onSearch(event.target.value);
    console.log(event.target.value)
  }

  return (
    <form>
    <input
      type="text"
      placeholder="search bot class"
      value={bot_class}
      onChange={handleSearch}
    />
    <i className="fa fa-search"></i>
    </form>
  );
}

export default Searchbar;
