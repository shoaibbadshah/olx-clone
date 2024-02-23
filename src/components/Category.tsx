import Link from "next/link";

const Category = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {/* Mobiles */}
      <Link href="">
        <b className="flex flex-col items-center bg-white border rounded-lg p-4">
          <img
            src="	https://www.olx.com.pk/assets/mobiles.8c768c96bfde33f18fcf5af2a8b9cf71.png"
            className="w-24 h-24 mb-2"
            alt="Mobiles"
          />
          <span className="text-center">Mobiles</span>
        </b>
      </Link>

      {/* Vehicles */}
      <Link href="">
        <b className="flex flex-col items-center bg-white border rounded-lg p-4">
          <img
            src="https://www.olx.com.pk/assets/bikes.4dcd02c49b2b83aa5b4d629d1e2b383e.png"
            className="w-24 h-24 mb-2"
            alt="Vehicles"
          />
          <span className="text-center">Vehicles</span>
        </b>
      </Link>

      {/* Property for Sale */}
      <Link href="">
        <b className="flex flex-col items-center bg-white border rounded-lg p-4">
          <img
            src="	https://www.olx.com.pk/assets/books-sports-hobbies.6fee8d841b332d65a10f050f4a2ee1c8.png"
            className="w-24 h-24 mb-2"
            alt="Property for Sale"
          />
          <span className="text-center">Property for Sale</span>
        </b>
      </Link>

      {/* Property for Rent */}
      <Link href="">
        <b className="flex flex-col items-center bg-white border rounded-lg p-4">
          <img
            src="https://www.olx.com.pk/assets/kids.cd8d8864804f1c35dd6a7df68268a48d.png"
            className="w-24 h-24 mb-2"
            alt="Property for Rent"
          />
          <span className="text-center">Property for Rent</span>
        </b>
      </Link>

      {/* Add more category links following the same structure */}
    </div>
  );
};

export default Category;
