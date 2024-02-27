"use client";
import { Fragment, useState, useEffect } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import {
  BsChevronDown,
  BsFilter,
  BsDash,
  BsPlus,
  BsGrid,
  BsListNested,
} from "react-icons/bs";
import Link from "next/link";
import { filters, sortOptions, classNames } from "./page";

export const Product = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isListView, setIsListView] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const productsPerPage = 6;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Simulating delay of 2 seconds before fetching products
        setTimeout(async () => {
          const response = await fetch("http://localhost:8080/products");
          if (!response.ok) {
            throw new Error("Network response was not ok");
          }
          const data = await response.json();
          if (Array.isArray(data)) {
            setProducts(data);
            setIsLoading(false); // Update isLoading after fetching products
          } else {
            console.error(
              "Fetched data does not contain products array:",
              data
            );
          }
        }, 2000);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);

  const toggleView = () => {
    setIsListView(!isListView);
  };

  useEffect(() => {
    let filtered = [...products];

    if (selectedBrand) {
      filtered = filtered.filter((product) => product.brand === selectedBrand);
    }

    if (selectedCategory) {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    setFilteredProducts(filtered);
  }, [selectedBrand, selectedCategory, products]);

  const handleFilter = (filterType, value) => {
    if (filterType === "Brand") {
      setSelectedBrand(value === selectedBrand ? null : value);
      setSelectedCategory(null);
    } else if (filterType === "category") {
      setSelectedCategory(value === selectedCategory ? null : value);
      setSelectedBrand(null);
    }
  };

  const numberOfPages = Math.ceil(filteredProducts.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSort = (sortOption) => {
    let sortedProducts = [...products];

    if (sortOption === "Best Rating") {
      sortedProducts.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === "Price: Low to High") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (sortOption === "Price: High to Low") {
      sortedProducts.sort((a, b) => b.price - a.price);
    }

    setProducts(sortedProducts);
  };

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  useEffect(() => {
    const query = searchQuery.toLowerCase();

    let filtered = [...products];

    filtered = filtered.filter(
      (product) =>
        product.title.toLowerCase().includes(query) ||
        product.brand.toLowerCase().includes(query)
    );

    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  return (
    <>
      <Transition.Root
        show={mobileFiltersOpen}
        as={Fragment}
      >
        <Dialog
          as="div"
          className="relative z-40 lg:hidden"
          onClose={setMobileFiltersOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="translate-x-full"
            >
              <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-lg font-medium text-gray-900">Filters</h2>
                  <button
                    type="button"
                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                    onClick={() => setMobileFiltersOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <FaXmark
                      className="h-6 w-6"
                      aria-hidden="true"
                    />
                  </button>
                </div>

                <form className="mt-4 border-t border-gray-200">
                  {filters.map((filter) => (
                    <Disclosure
                      as="div"
                      key={filter.id}
                      className="border-t border-gray-200 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-mx-2 -my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">
                                {filter.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <BsDash
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <BsPlus
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          {filter.id === "Brand" && (
                            <Disclosure.Panel className="pt-6">
                              <div
                                className="space-y-6"
                                key={filter.id}
                              >
                                {filter.options.map((option) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      type="checkbox"
                                      checked={selectedBrand === option.value}
                                      onChange={() =>
                                        handleFilter(filter.id, option.value)
                                      }
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      className={`ml-2 ${
                                        selectedBrand === option.value
                                          ? "text-blue-500 font-semibold"
                                          : ""
                                      }`}
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          )}
                          {filter.id === "category" && (
                            <Disclosure.Panel className="pt-6">
                              <div
                                className="space-y-6"
                                key={filter.id}
                              >
                                {filter.options.map((option) => (
                                  <div
                                    key={option.value}
                                    className="flex items-center"
                                  >
                                    <input
                                      type="checkbox"
                                      checked={
                                        selectedCategory === option.value
                                      }
                                      onChange={() =>
                                        handleFilter(filter.id, option.value)
                                      }
                                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                    />
                                    <label
                                      className={`ml-2 ${
                                        selectedCategory === option.value
                                          ? "text-blue-500 font-semibold"
                                          : ""
                                      }`}
                                    >
                                      {option.label}
                                    </label>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          )}
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <main className="mx-auto max-w-screen-2xl px-4 sm:px-6 ">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900">
            Product
          </h1>

          <div className="flex items-center">
            <Menu
              as="div"
              className="relative inline-block text-left"
            >
              <div>
                <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                  Sort
                  <BsChevronDown
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    aria-hidden="true"
                  />
                </Menu.Button>
              </div>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {sortOptions.map((option) => (
                      <Menu.Item key={option.name}>
                        {({ active }) => (
                          <a
                            href={option.href}
                            className={classNames(
                              option.current
                                ? "font-medium text-gray-900"
                                : "text-gray-500",
                              active ? "bg-gray-100" : "",
                              "block px-4 py-2 text-sm"
                            )}
                            onClick={() => handleSort(option.name)} // Handle sorting onClick
                          >
                            {option.name}
                          </a>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <button
              type="button"
              className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              onClick={() => toggleView()}
            >
              <span className="sr-only">View list</span>
              <BsListNested
                className={`h-5 w-5 ${
                  isListView ? "text-gray-500" : "text-gray-400"
                }`}
                aria-hidden="true"
              />
            </button>
            <button
              type="button"
              className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
              onClick={() => toggleView()}
            >
              <span className="sr-only">View grid</span>
              <BsGrid
                className={`h-5 w-5 ${
                  !isListView ? "text-gray-500" : "text-gray-400"
                }`}
                aria-hidden="true"
              />
            </button>
            <button
              type="button"
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
              onClick={() => setMobileFiltersOpen(true)}
            >
              <span className="sr-only">Filters</span>
              <BsFilter
                className="h-5 w-5"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>

        <section
          aria-labelledby="products-heading"
          className="pb-24 pt-6"
        >
          <h2
            id="products-heading"
            className="sr-only"
          >
            Products
          </h2>

          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            <form className="mt-4 border-gray-200">
              <a
                href=""
                className="py-3 text-blue-700 text-bold"
              >
                All Product
              </a>
              <form
                className="my-6"
                onSubmit={handleSubmit}
              >
                <label
                  for="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    value={searchQuery}
                    onChange={handleSearch}
                    className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search products by title or brand"
                    required
                  />
                  <button
                    type="submit"
                    className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Search
                  </button>
                </div>
              </form>
              {filters.map((filter) => (
                <Disclosure
                  as="div"
                  key={filter.id}
                  className="border-t border-gray-200 py-6"
                >
                  {({ open }) => (
                    <>
                      <h3 className="-mx-2 -my-3 flow-root">
                        <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                          <span className="font-medium text-gray-900">
                            {filter.name}
                          </span>
                          <span className="ml-6 flex items-center">
                            {open ? (
                              <BsDash
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            ) : (
                              <BsPlus
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </h3>
                      {filter.id === "Brand" && (
                        <Disclosure.Panel className="pt-6">
                          <div
                            className="space-y-6"
                            key={filter.id}
                          >
                            {filter.options.map((option) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  type="checkbox"
                                  checked={selectedBrand === option.value}
                                  onChange={() =>
                                    handleFilter(filter.id, option.value)
                                  }
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  className={`ml-2 ${
                                    selectedBrand === option.value
                                      ? "text-blue-500 font-semibold"
                                      : ""
                                  }`}
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      )}
                      {filter.id === "category" && (
                        <Disclosure.Panel className="pt-6">
                          <div
                            className="space-y-6"
                            key={filter.id}
                          >
                            {filter.options.map((option) => (
                              <div
                                key={option.value}
                                className="flex items-center"
                              >
                                <input
                                  type="checkbox"
                                  checked={selectedCategory === option.value}
                                  onChange={() =>
                                    handleFilter(filter.id, option.value)
                                  }
                                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                />
                                <label
                                  className={`ml-2 ${
                                    selectedCategory === option.value
                                      ? "text-blue-500 font-semibold"
                                      : ""
                                  }`}
                                >
                                  {option.label}
                                </label>
                              </div>
                            ))}
                          </div>
                        </Disclosure.Panel>
                      )}
                    </>
                  )}
                </Disclosure>
              ))}
            </form>

            <div className="lg:col-span-3">
              {isLoading ? (
                <div className="flex my-10 justify-center h-screen">
                  <div className="flex gap-4 flex-wrap justify-center">
                    <img
                      className="w-20 h-20 animate-spin"
                      src="https://www.svgrepo.com/show/474682/loading.svg"
                      alt="Loading icon"
                    />
                  </div>
                </div>
              ) : (
                <div className="bg-white">
                  <div
                    className={
                      isListView
                        ? ""
                        : "grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8"
                    }
                  >
                    {/* Show Products */}
                    {filteredProducts
                      .slice(
                        (currentPage - 1) * productsPerPage,
                        currentPage * productsPerPage
                      )
                      .map((product) => (
                        <Link
                          href={`/product/${product.id}`}
                          key={product.id}
                        >
                          <div
                            className={
                              isListView
                                ? "border rounded-lg mb-4"
                                : "group border-2 pb-4 rounded-xl"
                            }
                          >
                            {isListView && (
                              <Fragment>
                                <div className="flex">
                                  <img
                                    src={product.thumbnail}
                                    alt=""
                                    className="w-96 h-60"
                                  />
                                  <div className="w-full px-6 mb-10 mt-10 lg:w-1/2 lg:mb-0">
                                    <div className="pl-4 mb-6 border-l-4 border-blue-500">
                                      <h1 className="mt-2 text-xl font-black text-gray-700 md:text-2xl dark:text-gray-300">
                                        {product.title}
                                      </h1>
                                    </div>
                                    <p className="mb-6 text-2xl font-bold leading-7 text-blue-700 dark:text-gray-400">
                                      {product.brand}
                                    </p>
                                    <p className="mb-6 text-base leading-7 text-gray-500 dark:text-gray-400">
                                      {product.description}
                                    </p>
                                    <p className="mb-6 text-base font-medium text-gray-900">
                                      Price: ${product.price}
                                    </p>
                                  </div>
                                </div>
                              </Fragment>
                            )}
                            {!isListView && (
                              <Fragment>
                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                  <img
                                    src={product.thumbnail}
                                    alt=""
                                    className="w-full h-48 object-cover object-center group-hover:opacity-75"
                                  />
                                </div>
                                <div className="flex mx-2 flex-wrap justify-between">
                                  <h3 className="mt-4 text-lg font-bold text-blue-700">
                                    {product.title.substring(0, 18)}
                                  </h3>
                                  <p className="mt-4 text-base font-medium text-gray-900">
                                    Price: ${product.price}
                                  </p>
                                  <p className="mt-2 text-base leading-6 text-gray-500">
                                    {product.description.substring(0, 42)}
                                  </p>
                                </div>
                              </Fragment>
                            )}
                          </div>
                        </Link>
                      ))}
                    {/* End of Show Products */}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="flex items-center my-4 justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
              <div className="mb-4 flex">
                <p>
                  Page {currentPage} of {numberOfPages} &nbsp; : &nbsp;
                </p>
                <p>Total products: {filteredProducts.length}</p>
              </div>
              <div>
                <nav
                  className="isolate inline-flex space-x-px rounded-md shadow-md"
                  aria-label="Pagination"
                >
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                      currentPage === 1 ? "hidden" : "block"
                    }`}
                  >
                    <span className="sr-only">Previous</span>
                    <FaChevronLeft
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </button>
                  {Array.from({
                    length: numberOfPages > 99999 ? 99999 : numberOfPages,
                  }).map((_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => paginate(index + 1)}
                      className={`relative ${
                        currentPage === index + 1
                          ? "z-10 bg-indigo-600 text-white"
                          : "text-gray-900"
                      } inline-flex items-center px-4 py-2 text-sm font-semibold border-t border-b border-gray-300 focus:z-20 focus:outline-offset-0 hover:bg-gray-50`}
                    >
                      {index + 1}
                    </button>
                  ))}
                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === numberOfPages}
                    className={`relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                      currentPage === numberOfPages ? "hidden" : "block"
                    }`}
                  >
                    <span className="sr-only">Next</span>
                    <FaChevronRight
                      className="h-5 w-5"
                      aria-hidden="true"
                    />
                  </button>
                </nav>
              </div>
            </div>
            <div className="sm:hidden flex justify-between">
              <button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className={`inline-flex items-center rounded-md px-3 py-1.5 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                  currentPage === 1 ? "hidden" : "block"
                }`}
              >
                <FaChevronLeft
                  className="h-5 w-5"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </button>
              <button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === numberOfPages}
                className={`inline-flex items-center rounded-md px-3 py-1.5 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 ${
                  currentPage === numberOfPages ? "hidden" : "block"
                }`}
              >
                <span className="sr-only">Next</span>
                <FaChevronRight
                  className="h-5 w-5"
                  aria-hidden="true"
                />
              </button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
