import React from "react";
import { AiFillHeart } from "react-icons/ai";
import Button from "./Button";

export const ProductExclusiveItem = ({
  id,
  imageUrl,
  alt,
  name,
  discountPrice,
  price,
  discount,
}) => {
  return (
    <div key={id} className="relative w-full duration-200 hover:scale-95">
      <AiFillHeart className="absolute right-3 top-3 text-gray-300 text-2xl hover:text-[#D21143]" />
      <div className="w-full overflow-hidden rounded-t-xl">
        <img
          src={`${process.env.PUBLIC_URL}/images/products/${imageUrl}`}
          alt={alt}
          className="w-full h-[15.5rem]"
        />
      </div>
      <div className="rounded-b-xl px-5 pb-5 pt-3 shadow-md shadow-blue-500/10">
        <p className="pt-4 font-medium text-slate-900">{name}</p>
        <div className="flex mt-2 justify-between items-center">
          <div className="flex">
            {discountPrice > 0 && (
              <p className="font-semibold text-[#D21143] line-through mr-3">
                € {discountPrice}
              </p>
            )}
            <p className="font-semibold text-slate-700">€ {price}</p>
          </div>
          {discount > 0 && (
            <div>
              <p className="font-semibold text-green-600">{discount}% Off</p>
            </div>
          )}
        </div>
        <div className="flex mb-3 mt-5">
          <Button btnText="Add To Cart" />
        </div>
      </div>
    </div>
  );
};
