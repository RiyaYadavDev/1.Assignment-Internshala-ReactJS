import React from "react";
import Banner from "../components/Banner";
import { ProductExclusiveItem } from "../components/ProductExclusiveItem";
import ProductHeading from "../components/ProductHeading";
import ProductLatestItem from "../components/ProductLatestItem";
import Contact from "./Contact";
import exclusiveProducts from "../dummydata/exclusiveProducts.json";

const Home = () => {
  return (
    <>
      {/* ====== START Banner ====== */}
      <Banner />
      {/* ====== END Banner ====== */}

      {/* ====== START Latest Products ====== */}
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
      {/* ====== END Latest Products  ====== */}

      {/* ====== START Exclusive Products ====== */}
      <section className="py-16">
        <div className="mx-auto max-w-5xl px-8 md:px-6">
          <ProductHeading
            title="Our Exclusive Products"
            subTitle="Sustainable products at affordable prices"
            desc=""
          />

          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-10">
            {exclusiveProducts.map((item) => (
              <ProductExclusiveItem
                key={item.id}
                id={item.id}
                imageUrl={item.imageUrl}
                alt={item.alt}
                name={item.name}
                discountPrice={item.discountPrice}
                price={item.price}
                discount={item.discount}
              />
            ))}
          </div>
        </div>
      </section>
      {/* ====== END Exclusive Products  ====== */}

      {/* ====== START Contact ====== */}
      <Contact />
      {/* ====== END Contact ====== */}
    </>
  );
};

export default Home;
