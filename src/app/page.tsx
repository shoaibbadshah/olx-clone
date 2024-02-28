import React from "react";
import Testimonial from "@/components/Card";
import Carousel from "@/components/Carousel";
import Category from "@/components/Category";

type Props = {};

const Page = (props: Props) => {
  return (
    <div>
      <Carousel />
      <Category />
      <Testimonial />
    </div>
  );
};

export default Page;
