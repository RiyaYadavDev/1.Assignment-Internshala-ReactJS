import React from "react";

const ProductHeading = ({ title, subTitle, desc }) => {
  return (
    <div className="mb-10 text-center">
      <span className="font-medium text-[#D21143]">{title}</span>
      <h1 className="text-2xl font-bold text-slate-500 sm:text-3xl">
        {subTitle}
      </h1>
      <p className="mx-auto max-w-2 mt-2 text-slate-500">{desc}</p>
    </div>
  );
};

export default ProductHeading;
