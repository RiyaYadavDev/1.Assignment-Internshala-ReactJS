import React from "react";
import { AiFillHeart } from "react-icons/ai";
import { IoCartSharp } from "react-icons/io5";

const ProductLatestItem = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-4">
        <div className="group relative h-40 overflow-hidden rounded-lg lg:h-52">
          <img
            src="images/products/product-image-1.jpg"
            alt="products img"
            className="absolute h-full w-full object-cover duration-200 group-hover:scale-125"
          />
          <div className="absolute invisible cursor-pointer group-hover:top-[0.625rem] group-hover:right-[0.625rem] group-hover:visible">
            <IoCartSharp className="rounded-full bg-white p-1.5 text-3xl text-[#D21143]" />
          </div>
          <div className="absolute -bottom-60 flex w-full cursor-pointer items-center justify-between bg-gradient-to-t from-slate-800 px-3 pb-4 pt-10 duration-200 group-hover:-bottom-0">
            <p className="text-sm font-semibold text-white">
              Natural Bamboo Loofah
              <span className="text-xs text-slate-300 block">€ 3.99</span>
            </p>
            <AiFillHeart className="rounded-full bg-white p-1.5 text-3xl text-[#D21143]" />
          </div>
        </div>

        <div className="group relative h-40 overflow-hidden rounded-lg lg:h-52">
          <img
            src="images/products/product-image-5.png"
            alt="products img"
            className="absolute h-full w-full object-cover duration-200 group-hover:scale-125"
          />
          <div className="absolute invisible cursor-pointer group-hover:top-[0.625rem] group-hover:right-[0.625rem] group-hover:visible">
            <IoCartSharp className="rounded-full bg-white p-1.5 text-3xl text-[#D21143]" />
          </div>
          <div className="absolute -bottom-60 flex w-full cursor-pointer items-center justify-between bg-gradient-to-t from-slate-800 px-3 pb-4 pt-10 duration-200 group-hover:-bottom-0">
            <p className="text-sm font-semibold text-white">
              Sustainability Starter Kit
              <span className="text-xs text-slate-300 block">€ 10.99</span>
            </p>
            <AiFillHeart className="rounded-full bg-white p-1.5 text-3xl text-[#D21143]" />
          </div>
        </div>

        <div className="group relative h-40 overflow-hidden rounded-lg lg:h-52 sm:col-span-2">
          <img
            src="images/products/product-image-3.png"
            alt="products img"
            className="absolute h-full w-full object-cover duration-200 group-hover:scale-125"
          />
          <div className="absolute invisible cursor-pointer group-hover:top-[0.625rem] group-hover:right-[0.625rem] group-hover:visible">
            <IoCartSharp className="rounded-full bg-white p-1.5 text-3xl text-[#D21143]" />
          </div>
          <div className="absolute -bottom-60 flex w-full cursor-pointer items-center justify-between bg-gradient-to-t from-slate-800 px-3 pb-4 pt-10 duration-200 group-hover:-bottom-0">
            <p className="text-sm font-semibold text-white">
              Plant Based Reusable Containers
              <span className="text-xs text-slate-300 block">€ 2.99</span>
            </p>
            <AiFillHeart className="rounded-full bg-white p-1.5 text-3xl text-[#D21143]" />
          </div>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        <div className="group relative h-40 overflow-hidden rounded-lg lg:h-52 md:col-span-2">
          <img
            src="images/products/product-image-4.png"
            alt="products img"
            className="absolute h-full w-full object-cover duration-200 group-hover:scale-125"
          />
          <div className="absolute invisible cursor-pointer group-hover:top-[0.625rem] group-hover:right-[0.625rem] group-hover:visible">
            <IoCartSharp className="rounded-full bg-white p-1.5 text-3xl text-[#D21143]" />
          </div>
          <div className="absolute -bottom-60 flex w-full cursor-pointer items-center justify-between bg-gradient-to-t from-slate-800 px-3 pb-4 pt-10 duration-200 group-hover:-bottom-0">
            <p className="text-sm font-semibold text-white">
              Plant Based Reusable Containers
              <span className="text-xs text-slate-300 block">€ 6.99</span>
            </p>
            <AiFillHeart className="rounded-full bg-white p-1.5 text-3xl text-[#D21143]" />
          </div>
        </div>
        <div className="group relative h-40 overflow-hidden rounded-lg lg:h-52">
          <img
            src="images/products/product-image-5.png"
            alt="products img"
            className="absolute h-full w-full object-cover duration-200 group-hover:scale-125"
          />
          <div className="absolute invisible cursor-pointer group-hover:top-[0.625rem] group-hover:right-[0.625rem] group-hover:visible">
            <IoCartSharp className="rounded-full bg-white p-1.5 text-3xl text-[#D21143]" />
          </div>
          <div className="absolute -bottom-60 flex w-full cursor-pointer items-center justify-between bg-gradient-to-t from-slate-800 px-3 pb-4 pt-10 duration-200 group-hover:-bottom-0">
            <p className="text-sm font-semibold text-white">
              Reusable Bamboo Straws
              <span className="text-xs text-slate-300 block">€ 5.99</span>
            </p>
            <AiFillHeart className="rounded-full bg-white p-1.5 text-3xl text-[#D21143]" />
          </div>
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3">
        <div className="group relative h-40 overflow-hidden rounded-lg lg:h-52">
          <img
            src="images/products/product-image-6.png"
            alt="products img"
            className="absolute h-full w-full object-cover duration-200 group-hover:scale-125"
          />
          <div className="absolute invisible cursor-pointer group-hover:top-[0.625rem] group-hover:right-[0.625rem] group-hover:visible">
            <IoCartSharp className="rounded-full bg-white p-1.5 text-3xl text-[#D21143]" />
          </div>
          <div className="absolute -bottom-60 flex w-full cursor-pointer items-center justify-between bg-gradient-to-t from-slate-800 px-3 pb-4 pt-10 duration-200 group-hover:-bottom-0">
            <p className="text-sm font-semibold text-white">
              Plant Based Reusable Containers
              <span className="text-xs text-slate-300 block">€ 2.99</span>
            </p>
            <AiFillHeart className="rounded-full bg-white p-1.5 text-3xl text-[#D21143]" />
          </div>
        </div>

        <div className="group relative h-40 overflow-hidden rounded-lg lg:h-52">
          <img
            src="images/products/product-image-7.png"
            alt="products img"
            className="absolute h-full w-full object-cover duration-200 group-hover:scale-125"
          />
          <div className="absolute invisible cursor-pointer group-hover:top-[0.625rem] group-hover:right-[0.625rem] group-hover:visible">
            <IoCartSharp className="rounded-full bg-white p-1.5 text-3xl text-[#D21143]" />
          </div>
          <div className="absolute -bottom-60 flex w-full cursor-pointer items-center justify-between bg-gradient-to-t from-slate-800 px-3 pb-4 pt-10 duration-200 group-hover:-bottom-0">
            <p className="text-sm font-semibold text-white">
              Natural Bamboo Loofah
              <span className="text-xs text-slate-300 block">€ 2.99</span>
            </p>
            <AiFillHeart className="rounded-full bg-white p-1.5 text-3xl text-[#D21143]" />
          </div>
        </div>

        <div className="group relative h-40 overflow-hidden rounded-lg lg:h-52">
          <img
            src="images/products/product-image-9.png"
            alt="products img"
            className="absolute h-full w-full object-cover duration-200 group-hover:scale-125"
          />
          <div className="absolute invisible cursor-pointer group-hover:top-[0.625rem] group-hover:right-[0.625rem] group-hover:visible">
            <IoCartSharp className="rounded-full bg-white p-1.5 text-3xl text-[#D21143]" />
          </div>
          <div className="absolute -bottom-60 flex w-full cursor-pointer items-center justify-between bg-gradient-to-t from-slate-800 px-3 pb-4 pt-10 duration-200 group-hover:-bottom-0">
            <p className="text-sm font-semibold text-white">
              Bamboo ToothBrush (set of 2)
              <span className="text-xs text-slate-300 block">€ 2.69</span>
            </p>
            <AiFillHeart className="rounded-full bg-white p-1.5 text-3xl text-[#D21143]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLatestItem;
