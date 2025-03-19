// import React from 'react';
// import Button from '../Components/Button';

// const CartPage = () => {
//   const cartItems = [
//     {
//       id: 1,
//       name: 'LCD Monitor',
//       price: 650,
//       quantity: 1,
//       image: 'https://i.imgur.com/abcd123.png',
//     },
//     {
//       id: 2,
//       name: 'H1 Gamepad',
//       price: 550,
//       quantity: 2,
//       image: 'https://i.imgur.com/efgh456.png',
//     },
//   ];

//   const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

//   return (
//     <div className="px-4 sm:px-8 lg:px-24 py-10 space-y-10">
//       {/* Breadcrumb */}
//       <div className="text-sm text-gray-500">Home / <span className="text-black font-semibold">Cart</span></div>

//       {/* Cart Table */}
//       <div className="overflow-x-auto">
//         <table className="w-full border-collapse border border-gray-200">
//           <thead>
//             <tr className="bg-gray-100 text-left text-sm text-gray-600">
//               <th className="p-3">Product</th>
//               <th className="p-3">Price</th>
//               <th className="p-3">Quantity</th>
//               <th className="p-3">Subtotal</th>
//             </tr>
//           </thead>
//           <tbody>
//             {cartItems.map((item) => (
//               <tr key={item.id} className="border-t border-gray-200">
//                 <td className="p-3 flex items-center space-x-3">
//                   <img src={item.image} alt={item.name} className="w-16 h-16 object-cover" />
//                   <span>{item.name}</span>
//                 </td>
//                 <td className="p-3">${item.price}</td>
//                 <td className="p-3">
//                   <select className="border rounded px-2 py-1" defaultValue={item.quantity}>
//                     {[...Array(5)].map((_, i) => (
//                       <option key={i} value={i + 1}>{i + 1}</option>
//                     ))}
//                   </select>
//                 </td>
//                 <td className="p-3">${item.price * item.quantity}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>

//       {/* Buttons */}
//       <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
//         <Button variant="outline">Return To Shop</Button>
//         <Button variant="primary">Update Cart</Button>
//       </div>

//       {/* Coupon and Cart Total */}
//       <div className="flex flex-col lg:flex-row gap-8">
//         {/* Coupon */}
//         <div className="flex flex-col sm:flex-row items-center gap-4 w-full lg:w-1/2">
//           <input
//             type="text"
//             placeholder="Coupon Code"
//             className="border px-4 py-2 w-full sm:w-auto flex-1 rounded"
//           />
//           <Button variant="danger">Apply Coupon</Button>
//         </div>

//         {/* Cart Total */}
//         <div className="border p-6 rounded-lg w-full lg:w-1/2 space-y-4 bg-gray-50">
//           <h3 className="text-lg font-semibold">Cart Total</h3>
//           <div className="flex justify-between text-sm">
//             <span>Subtotal:</span>
//             <span>${subtotal}</span>
//           </div>
//           <div className="flex justify-between text-sm">
//             <span>Shipping:</span>
//             <span>Free</span>
//           </div>
//           <div className="flex justify-between text-base font-bold">
//             <span>Total:</span>
//             <span>${subtotal}</span>
//           </div>
//           <Button className="w-full" variant="danger">Process to Checkout</Button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CartPage;



import React from 'react'

const CartPage = () => {
  return (
    <div>
      cart
    </div>
  )
}

export default CartPage
