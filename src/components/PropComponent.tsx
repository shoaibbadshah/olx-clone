import Category from "./Category";

const categories: CategoryProps[] = [
  {
    id: 1,
    name: "Mobiles",
    link: "/mobiles",
    image:
      "https://www.olx.com.pk/assets/mobiles.8c768c96bfde33f18fcf5af2a8b9cf71.png",
  },
  {
    id: 2,
    name: "Vehicles",
    link: "/vehicles",
    image:
      "https://www.olx.com.pk/assets/bikes.4dcd02c49b2b83aa5b4d629d1e2b383e.png",
  },
  // Add more categories as needed
];

const PropComponent: React.FC = () => {
  return (
    <div>
      {/* Other content */}
      <Category categories={categories} />
      {/* More content */}
    </div>
  );
};

export default PropComponent;
