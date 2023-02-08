import React from "react";

const Button = ({ btnText }) => {
  return (
    <button className="w-full rounded-xl border border-blue-300 bg-[#D21143] p-3 text-white transition-all hover:bg-opacity-90">
      {btnText}
    </button>
  );
};

export default Button;
