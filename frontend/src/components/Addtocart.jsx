import React from "react";
import Counter from "./Counter";
import { Link } from "react-router-dom";
import { AiOutlineDelete } from "react-icons/ai";
import { BsCartX } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import "../styling/addcart.css";
import cartSlice from "../data/cartSlice";
import productList from "../data/productList.json";

const Addtocart = () => {
  const { cartProductIds } = useSelector((state) => state.cart);
  const cartProductData = productList.products.filter((product) =>
    cartProductIds.includes(product.id)
  );

  const { removeFromCart } = cartSlice.actions;
  const dispatch = useDispatch();

  return (
    <>
      {cartProductData.length > 0 && (
        <div className="container tabledata">
          <table className="carttable">
            <tr>
              <td>Product</td>
              <td>Price</td>
              <td>Quantity</td>
              <td>Subtotal</td>
              <td>Action</td>
            </tr>
            {cartProductData.map((item) => {
              return (
                <tr>
                  <td className="pimage">
                    <img src={item.imageUrl} alt="" />
                    <p>{item.name}</p>
                  </td>
                  <td>{item.price}</td>
                  <td>
                    <Counter />
                  </td>
                  <td>{item.price}</td>
                  <td>
                    <AiOutlineDelete
                      onClick={() => dispatch(removeFromCart(item.id))}
                      className="cartdelete"
                    />
                  </td>
                </tr>
              );
            })}
          </table>

          <div className="cartbuttons">
            <Link to="/">
              <button>return to shop</button>
            </Link>
            <button>update cart</button>
          </div>

          <div className="cartdetail">
            <div className="coupon">
              <div className="coupon-code">
                <input type="text" placeholder="Coupon Code" />
                <button>Apply Coupon</button>
              </div>
            </div>
            <div className="carttotal">
              <div className="cart-checkout">
                <h2>cart detail</h2>
                <div className="subtotal">
                  <h2>subtotal</h2>
                  <h2>$650</h2>
                </div>
                <button>check out</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {cartProductData.length < 1 && (
        <div className="emptycart">
          <h2>
            Your <BsCartX /> is Empty
          </h2>
        </div>
      )}
    </>
  );
};

export default Addtocart;
