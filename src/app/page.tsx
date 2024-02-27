<<<<<<< Updated upstream
import React from 'react';
import Testimonial from '@/components/Card';
import Carousel from '@/components/Carousel';
import Category from '@/components/Category';
=======
//@ts-ignore
import React from "react";
import Testimonial from "@/components/Card";
import Carousel from "@/components/Carousel";
import Category from "@/components/Category";
import styles from "./globals.css";
>>>>>>> Stashed changes

type Props = {};

const Page = (props: Props) => {
  return (
<<<<<<< Updated upstream
    <div>
      <Carousel/>
      <Category/>
=======
    <div className="mb-4">
      <Carousel />
      <Category />
>>>>>>> Stashed changes
      <Testimonial />
      
  
    </div>
  );
};

export default Page;