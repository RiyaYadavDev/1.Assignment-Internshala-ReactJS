import React from "react";
import ProductHeading from "../components/ProductHeading";

const About = () => {
  return (
    <>
      <div className="h-[43vh]">
        <div className="mt-20">
          <ProductHeading
            title="About Us"
            subTitle="About Us"
            desc="Removing dead skin cells not only improves the look of your skin,
          it also sweeps away places where bacteria and soil could collect."
          />
        </div>
      </div>
    </>
  );
};

export default About;
