import React from "react";
import Logo from "./Logo";

const Button = ({ logo, setLogo, state }) => {
  const onSubmit = (e) => {
    if (state) setLogo({ val2: true });
  };

  return (
    <>
      <button className="button button1" onClick={onSubmit}>
        Result
      </button>
      {logo.val2 && <Logo />}
    </>
  );
};

export default Button;
