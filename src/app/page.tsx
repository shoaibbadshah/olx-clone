// import React from "react";
// import Testimonial from "@/components/Card";
// import Carousel from "@/components/Carousel";
// import Category from "@/components/Category";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { auth } from "@clerk/nextjs";
// import Link from "next/link";

// type Props = {};

// const Page = async (props: Props) => {
//   const { userId } = await auth();
//   const isAuth = !!userId;
//   return (
//     <div>
//       <div className="flex  mt-2 ">
//         {isAuth ? (
//           <>
//             <Navbar />
//             <Carousel />
//             <Category />
//             <Testimonial />
//             <Footer />
//           </>
//         ) : (
//           <Link href="/sign-in"></Link>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Page;
"use client";
import React from "react";
import Testimonial from "@/components/Card";
import Carousel from "@/components/Carousel";
import Category from "@/components/Category";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useUser } from "@clerk/nextjs";
import { SignIn } from "@clerk/clerk-react";
import Link from "next/link";

type Props = {};

const Page = (props: Props) => {
  const { user } = useUser();

  return (
    <div>
      {user ? (
        <>
          <div>
            <Carousel />
            <Category />
            <Testimonial />
          </div>
        </>
      ) : (
        <div className="singin flex items-center justify-center h-screen">
          <SignIn />
        </div>
      )}
    </div>
  );
};

export default Page;
