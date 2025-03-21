import React from "react";
import Button from "../Components/Button";
import p1 from '../assets/1p.png'
import p2 from '../assets/2p.png'
import p3 from '../assets/3p.png'
const CartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      quantity: 1,
      image: p1,
    },
    {
      id: 2,
      name: "H1 Gamepad",
      price: 550,
      quantity: 2,
      image: p2,
    },
    {
      id: 3,
      name: "H1 Gamepad",
      price: 550,
      quantity: 2,
      image: p3,
    },
  ];

  return (
    <div>
    <div className="mt-12 h-3/4 w-full md:max-w-6xl mx-auto overflow-x-auto">
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
          {cartItems.map((i) => (
            <tr key={i.id} className="bg-white shadow-sm rounded">
              <td className="px-4 py-2">
                <img src={i.image} alt="" className="h-12 w-12 object-contain"/>
                <span>{i.name}</span></td>
              <td className="px-4 py-2">Rs: {i.price}</td>
              <td className="px-4 py-2">
                <div className="flex justify-center items-center gap-3">
                  <span>{i.quantity}</span>
                  <div className="flex flex-col gap-1">
                    <Button className="bg-green-500 border h-7 w-7 flex items-center justify-center text-white text-sm">
                      +
                    </Button>
                    <Button className="bg-red-500 border h-7 w-7 flex items-center justify-center text-white text-sm">
                      -
                    </Button>
                  </div>
                </div>
              </td>
              <td className="px-4 py-2">Rs: {i.price * i.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className="flex-col gap-y-4 md:flex-row mt-10 flex  items-start gap-x-5 max-w-6xl h-1/3 px-4 justify-between">
        <div className="flex gap-2 md:pl-14 w-full md:w-auto">
          <input type="text" placeholder="Coupon Code"
          className="border pl-3 text-xl py-3 w-full md:w-auto"
           />
           <Button>Apply Coupon</Button>
        </div>
        <div className="p-4 border border-black space-y-2 w-full md:max-w-sm text-sm sm:text-base">
          <p className="font-semibold text-lg">Cart Total</p>
          <div className="flex justify-between">
            <p>Sub Total</p>
            <p>1750</p>
          </div>
          <div className="border-b mx-auto border-b-slate-600 w-3/4 h-1 "></div>
          <div className="flex justify-between">
            <p>Shipping</p>
            <p>Free</p>
          </div>
          <div className="border-b mx-auto border-b-slate-600 w-3/4 h-1 "></div>
          <div className="flex justify-between">
            <p>Total</p>
            <p>1750</p>
          </div>
          <div className="flex justify-center items-center">
          <Button>Process to Checkout</Button>
          </div>
        </div>
        
        
      </div>
    </div>
    
  );
};

export default CartPage;
