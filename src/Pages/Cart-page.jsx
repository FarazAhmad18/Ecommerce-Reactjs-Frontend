import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { 
  decreaseQuantity, 
  increaseQuantity, 
  calculateTotals 
} from '../redux/cartSlice';
import Button from '../Components/Button';

const CartPage = () => {
  const dispatch = useDispatch();
  const { cartItems, totalAmount } = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems, dispatch]);

  return (
    <div className="w-full max-w-6xl px-4 mx-auto mt-12">
      <table className="w-full text-sm border-separate border-spacing-y-4 sm:text-base">
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
            <tr key={item.id} className="bg-white rounded shadow-sm">
              <td className="flex items-center gap-3 px-4 py-2">
                <img src={item.img} alt={item.title} className="object-contain w-12 h-12" />
                <span>{item.title}</span>
              </td>
              <td className="px-4 py-2">Rs: {item.price}</td>
              <td className="px-4 py-2">
                <div className="flex items-center justify-center gap-3">
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

      <div className="flex flex-col items-start justify-between gap-5 mt-10 md:flex-row">
        <div className="flex gap-2">
          <input 
            type="text" 
            placeholder="Coupon Code" 
            className="py-3 pl-3 text-xl border" 
          />
          <Button>Apply Coupon</Button>
        </div>

        <div className="w-full p-4 space-y-2 border border-black md:max-w-sm">
          <p className="text-lg font-semibold">Cart Total</p>
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