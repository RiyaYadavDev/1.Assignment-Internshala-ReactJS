import React from "react";
import ProductHeading from "../components/ProductHeading";
import ProductLatestItem from "../components/ProductLatestItem";

const Shop = () => {
  return (
    <>
      <section className="pb-16">
        <div className="mx-auto max-w-5xl px-8 md:px-6">
          <ProductHeading
            title="HOT DEALS"
            subTitle="Latest Products"
            desc="Sustainable products are those products that provide environmental,
        social and economic benefits while protecting public health and
        environment"
          />
          <ProductLatestItem />
        </div>
      </section>
    </>
  );
};

export default Shop;
