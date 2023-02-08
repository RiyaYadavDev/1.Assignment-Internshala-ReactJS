import React from "react";

const Banner = () => {
  const productBrands = [
    {
      id: 1,
      imgUrl: "product-image-2.png",
      alt: "product brands",
    },
    {
      id: 2,
      imgUrl: "product-image-3.png",
      alt: "product brands",
    },
    {
      id: 3,
      imgUrl: "product-image-5.png",
      alt: "product brands",
    },
    {
      id: 4,
      imgUrl: "product-image-9.png",
      alt: "product brands",
    },
  ];

  return (
    <section className="relative bg-white pb-16 lg:pt-[100px]">
      <div className="mx-auto max-w-5xl px-8 md:px-6">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-5/12">
            <h1 className="text-slate-800 mb-3 text-4xl font-bold leading-snug sm:text-[42px] lg:text-[40px] xl:text-[42px]">
              Sustainable products at affordable
              <span className="text-[#D21143]">prices</span>
            </h1>
            <p className="text-slate-500 mb-8 max-w-[480px] text-base">
              Removing dead skin cells not only improves the look of your skin,
              it also sweeps away places where bacteria and soil could collect.
            </p>

            <button className="w-full rounded-md bg-[#D21143] px-8 py-2.5 font-semibold text-white shadow-md shadow-blue-500/20 transition-all hover:bg-opacity-90 duration-200 sm:w-auto">
              Buy Now
            </button>

            {/* product brands */}
            <div className="mt-6 flex flex-wrap gap-4">
              {productBrands.map((item) => (
                <img
                  key={item.id}
                  src={`${process.env.PUBLIC_URL}/images/products/${item.imgUrl}`}
                  alt={item.alt}
                  className="w-32 cursor-pointer rounded-lg border border-blue-300/20 bg-white shadow-md shadow-blue-500/5 duration-200 hover:scale-95 sm:w-36"
                />
              ))}
            </div>
          </div>

          <div className="hidden px-4 lg:block lg:w-1/12"></div>

          <div className="w-full px-4 lg:w-6/12">
            <div className="lg:ml-auto lg:text-right">
              <div className="relative z-10 inline-block pt-11 lg:pt-0">
                <img
                  src={process.env.PUBLIC_URL + "images/banner-1.png"}
                  alt="banner section img"
                  className="max-w-full lg:ml-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
