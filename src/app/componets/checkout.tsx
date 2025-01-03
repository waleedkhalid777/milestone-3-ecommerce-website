// app/checkout.tsx

"use client";

import { useRouter } from 'next/router';
import React from 'react';

const Checkout = () => {
  const router = useRouter();
  const cart = router.query.cart ? JSON.parse(router.query.cart as string) : [];

  const totalPrice = cart.reduce((total: number, item: any) => total + item.price, 0).toFixed(2);

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {/* Cart items as a bill */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="font-semibold text-xl mb-4">Order Summary:</h3>

        <table className="w-full text-left mb-4">
          <thead>
            <tr>
              <th className="py-2">Product</th>
              <th className="py-2">Price</th>
              <th className="py-2">Quantity</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item: any, index: number) => (
              <tr key={index}>
                <td className="py-2">{item.name}</td>
                <td className="py-2">${item.price.toFixed(2)}</td>
                <td className="py-2">1</td> {/* Assume 1 item per product for simplicity */}
              </tr>
            ))}
          </tbody>
        </table>

        {/* Total Price */}
        <div className="text-right font-bold">
          <h4>Total: ${totalPrice}</h4>
        </div>

        {/* Checkout Confirmation */}
        <div className="mt-6 text-center">
          <button
            className="bg-green-600 w-[150px] h-[40px] rounded-full text-white hover:bg-green-700"
            onClick={() => alert('Proceeding to payment...')}
          >
            Confirm & Pay
          </button>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
