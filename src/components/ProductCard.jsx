import React from "react";
// import thumbnail from "../constants/thumbnail.png"

const ProductCard = ({ image, title, rating, price, reviewLength }) => {
  return (
    <div className="bg-[#F7F7F7] max-w-52 p-1 border border-transparent rounded-lg text-left cursor-pointer hover:bg-white hover:drop-shadow-lg">
      <img
        src={image}
        alt="thumbnail"
        className="max-w-full"
      />
      <div className="text-base font-normal bg-white w-full border-transparent rounded-b-lg">
        <div>{title}</div>
        <span className="text-xs bg-green-600 text-white w-fit rounded p-0.5">{rating}⭐</span>
        <span> ({reviewLength})</span>
        <div className="text-lg font-semibold">${price}</div>
        <button className="bg-amber-300 text-xs p-1.5 border-transparent rounded-2xl m-1 hover:bg-amber-400 cursor-pointer">Add to cart</button>
      </div>

    </div>
  );
};

export default ProductCard;
