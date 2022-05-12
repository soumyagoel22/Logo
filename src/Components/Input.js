import React from "react";
import Logo from "./Logo";

const Input = ({ logo, setLogo, state, setState }) => {
  const handleChange = (e) => {
    setState(e.target.value);
  };

  const search = (e) => {
    if (e.key === "Enter") {
      setState("");
      setLogo({ val1: true });
    }
  };

  return (
    <>
      <input
        type="text"
        className="search"
        value={state}
        placeholder="Search..."
        onChange={handleChange}
        onKeyPress={search}
      />
      {logo.val1 && <Logo />}
    </>
  );
};

export default Input;
