import React, { useContext } from "react";
import { MdBookmarkAdd, MdOutlineAddShoppingCart } from "react-icons/md";
import { useLoaderData, useParams } from "react-router";
import { addFavourite } from "../utils";
import { CartContext } from "../providers/Context";

const PhoneDetails = () => {
  const { setCart } = useContext(CartContext);
  const data = useLoaderData();
  const { id } = useParams();
  const phone = data.find((p) => p.id == id);
  const {
    name,
    image,
    brand,
    model,
    price,
    description,
    storage,
    camera_info,
  } = phone;

  const handleFavourite = () => {
    addFavourite(phone);
  };

  return (
    <>
      <div className="flex flex-col gap-5 m-auto py-10">
        <img src={image} className="w-[60%] mx-auto rounded-md" />
        <div className="flex flex-col justify-start gap-5">
          <div className="flex justify-between">
            <h3 className="text-6xl font-light">{name}</h3>
            <div className="space-x-2">
              <button onClick={() => setCart(prv=>[...prv,phone])} className="relative inline-block text-lg group cursor-pointer">
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative">
                    <MdOutlineAddShoppingCart></MdOutlineAddShoppingCart>
                  </span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-0.5 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </button>
              <button
                onClick={handleFavourite}
                className="relative inline-block text-lg group cursor-pointer"
              >
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="relative">
                    <MdBookmarkAdd></MdBookmarkAdd>
                  </span>
                </span>
                <span
                  className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-0.5 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                  data-rounded="rounded-lg"
                ></span>
              </button>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="text-4xl font-light">Details:</h4>
            <p className="font-bold text-base">
              Brand: <span className="font-normal">{brand}</span>
            </p>
            <p className="font-bold text-base">
              Model: <span className="font-normal">{model}</span>
            </p>
            <p className="font-bold text-base">
              Storage: <span className="font-normal">{storage}</span>
            </p>
            <p className="flex gap-1 font-bold text-base">
              Price:{" "}
              <span className="font-normal flex gap-3">
                {Object.entries(price).map(([storage, price]) => (
                  <div key={storage}>
                    {storage}: {price},
                  </div>
                ))}
              </span>
            </p>
            <p className="font-bold text-base">
              Camera Info: <span className="font-normal">{camera_info}</span>
            </p>
            <p className="font-bold text-base">
              Description: <span className="font-normal">{description}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PhoneDetails;
