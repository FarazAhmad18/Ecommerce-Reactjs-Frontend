import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseQuantity, increaseQuantity, calculateTotals } from '../redux/cartSlice';
import Button from '../Components/Button';

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems, totalAmount } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <div className="mt-12 w-full max-w-6xl mx-auto px-4">
      <table className="w-full border-separate border-spacing-y-4 text-sm sm:text-base">
        <thead>
          <tr className="bg-gray-100">
            <th className="px-4 py-2 text-left">Product</th>
            <th className="px-4 py-2 text-left">Price</th>
            <th className="px-4 py-2 text-center">Quantity</th>
            <th className="px-4 py-2 text-left">Subtotal</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => (
            <tr key={item.id} className="bg-white shadow-sm rounded">
              <td className="px-4 py-2 flex items-center gap-3">
                <img src={item.image} alt={item.name} className="h-12 w-12 object-contain" />
                <span>{item.name}</span>
              </td>
              <td className="px-4 py-2">Rs: {item.price}</td>
              <td className="px-4 py-2">
                <div className="flex justify-center items-center gap-3">
                  <span>{item.quantity}</span>
                  <div className="flex gap-1">
                    <Button onClick={() => dispatch(increaseQuantity(item.id))}>+</Button>
                    <Button onClick={() => dispatch(decreaseQuantity(item.id))}>-</Button>
                  </div>
                </div>
              </td>
              <td className="px-4 py-2">Rs: {item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-10 flex flex-col md:flex-row justify-between items-start gap-5">
        <div className="flex gap-2">
          <input type="text" placeholder="Coupon Code" className="border pl-3 text-xl py-3" />
          <Button>Apply Coupon</Button>
        </div>

        <div className="p-4 border border-black space-y-2 w-full md:max-w-sm">
          <p className="font-semibold text-lg">Cart Total</p>
          <div className="flex justify-between">
            <p>Sub Total</p>
            <p>Rs: {totalAmount}</p>
          </div>
          <div className="flex justify-between">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="flex justify-between">
            <p>Total</p>
            <p>Rs: {totalAmount}</p>
          </div>
          <Button>Proceed to Checkout</Button>
        </div>
      </div>
    </div>
  );
};

export default CartPage;