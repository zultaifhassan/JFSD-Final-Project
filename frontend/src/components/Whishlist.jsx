import React from "react";


const Whishlist = ({ cart }) => {
  return (
    <>
      <div>
        {cart && cart.length > 0 ? (
          cart.map((productId) => <li key={productId}>{productId}</li>)
        ) : (
          <li>No items in the wishlist</li>
        )}
      </div>
    </>
  );
};

export default Whishlist;
