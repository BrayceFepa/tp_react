import React from "react";

function ProductCard({ img, details, price }) {
  return (
    <div className="col-md-4">
      <div className="card bg-light text-center d-flex justify-content-center align-items-center flex-column">
        <img src={`./images/${img}`} className="img-top" width={200}></img>
        <div className="card-body">
          <div className="card-text text-black fw-bold">{details}</div>
          <div className="card-title fw-bold">{price}</div>
          <a href="#" className="btn btn-danger w-75 text-white">
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
