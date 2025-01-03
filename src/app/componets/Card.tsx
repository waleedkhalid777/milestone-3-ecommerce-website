"use client";

import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";

const Card = ({ product }: any) => {
  const [cart, setCart] = useState<any[]>([]);
  const [cartMessage, setCartMessage] = useState<string>("");
  const [showReceipt, setShowReceipt] = useState<boolean>(false);
  const [shippingCost, setShippingCost] = useState<number>(0);
  const [trackingInfo, setTrackingInfo] = useState<any>(null);

  const addToCart = (product: any) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const calculateShipping = async (cart: any[]) => {
    try {
      const response = await axios.post("/api/shippingCost", { items: cart });
      setShippingCost(response.data.cost);
    } catch (error) {
      console.error("Error calculating shipping cost:", error);
    }
  };

  const handleCheckout = async () => {
    setShowReceipt(true);
    calculateShipping(cart);
    try {
      const shipmentData = {
        items: cart,
        address: { /* Add user-provided address here */ },
      };
      const shipment = await createShipment(shipmentData);
 
    } catch (error) {
      console.error("Error handling checkout:", error);
    }
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2);

  return (
    <div>
      <div className="bg-white p-5 drop-shadow-md rounded-lg">
        {product.images && product.images[0] ? (
          <Image
            src={urlFor(product.images[0]).url()}
            alt={product.name || "Product Image"}
            width={220}
            height={220}
            className="object-cover h-40 mx-auto"
          />
        ) : (
          <div className="h-40 bg-gray-200 mx-auto flex justify-center items-center">
            No Image
          </div>
        )}
        <div className="text-center py-5">
          <h1 className="text-xl font-bold">{product.name || "Untitled Product"}</h1>
          <h2 className="text-lg text-gray-600">${product.price || "N/A"}</h2>
          <button
            className="bg-red-600 w-[120px] h-[50px] rounded-full text-white hover:bg-blue-500"
            onClick={() => addToCart(product)}
          >
            ADD TO CART
          </button>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="font-semibold text-lg">Cart Items:</h3>
        {cart.length === 0 ? <p>Your cart is empty.</p> : <p>{cart.length} items added to the cart</p>}
      </div>

      {cart.length > 0 && !showReceipt && (
        <button
          className="bg-green-600 w-[150px] h-[50px] rounded-full text-white"
          onClick={handleCheckout}
        >
          Show Cart Receipt
        </button>
      )}

      {showReceipt && (
        <div className="mt-5 p-5 border bg-gray-100 rounded-lg">
          <h2 className="text-xl font-bold">Cart Receipt</h2>
          <h3>Total Price: ${totalPrice}</h3>
          <h3>Shipping Cost: ${shippingCost.toFixed(2)}</h3>
          {trackingInfo && (
            <div>
              <h4>Tracking Status: {trackingInfo.status}</h4>
              <p>Expected Delivery: {trackingInfo.eta}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Card;
function createShipment(shipmentData: { items: any[]; address: {}; }) {
  throw new Error("Function not implemented.");
}

function trackShipment(trackingId: any) {
  throw new Error("Function not implemented.");
}

