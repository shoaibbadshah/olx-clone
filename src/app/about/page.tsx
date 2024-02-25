"use client"
import Cards from '@/components/Cards';
import Cta from '@/components/Cta';
import AboutSection from '@/components/HeroSection';
import CustomTimeline from '@/components/Timeline';

import React from 'react';

type Props = {
  images: string; 
};

const Page = (props: Props) => {
  return (
    <>
      <AboutSection images="https://tailwindui.com/img/ecommerce-images/home-page-02-edition-02.jpg" />
      <Cards/>
      <Cta/>
      <CustomTimeline/>
    </>
  );
};

export default Page;
