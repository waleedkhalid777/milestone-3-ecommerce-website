"use client";

import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Card2 = ({ product }: { product: any }) => {
  const [cart, setCart] = useState<any[]>([]); // Global cart state
  const [cartMessage, setCartMessage] = useState<string>(''); // Cart completion message

  const addToCart = (product: any) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      setCartMessage(updatedCart.length === 1 ? 'Item added to cart' : 'Items added to cart');
      return updatedCart;
    });
  };

  // Remove from Cart functionality
  const removeFromCart = (index: number) => {
    setCart((prevCart) => prevCart.filter((_, i) => i !== index));
  };

  const totalPrice = cart.reduce((total, item) => total + (item.price || 0), 0).toFixed(2);

  const handleCheckout = () => {
    // Checkout logic can be added here
    alert("Proceeding to checkout...");
  };

  if (!product || !product.slug || !product.slug.current) {
    return <div>Product details are missing</div>;
  }

  const imageUrl = product.images && product.images[0] ? urlFor(product.images[0])?.url() : null;

  return (
    <div>
      {/* Product Section */}
      <Link href={`/products/${product.slug.current}`}>
        <div className="bg-white p-5 drop-shadow-md rounded-lg">
          {/* Product Image */}
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={product.name || 'Product Image'}
              width={220}
              height={220}
              className="object-cover h-40 mx-auto transition-transform group-hover:scale-110"
            />
          ) : (
            <div className="h-40 bg-gray-200 mx-auto flex justify-center items-center">
              No Image
            </div>
          )}

          <div className="text-center py-5">
            <h1 className="text-xl font-bold">{product.name || 'Untitled Product'}</h1>
            <h2 className="text-lg text-gray-600">
              ${product.price !== undefined ? product.price : 'N/A'}
            </h2>
          </div>
        </div>
      </Link>

      <div className="mt-4 text-center">
        <button
          className="bg-blue-600 w-[120px] h-[40px] rounded-full text-white hover:bg-blue-700"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>

      {/* Cart Items Section */}
      <div className="mt-10 bg-white p-5 rounded-lg shadow-md">
        <h3 className="font-semibold text-lg">Cart Items:</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index} className="flex justify-between items-center mb-2">
                <span>
                  {item.name} - ${item.price.toFixed(2)}
                </span>
                <button
                  className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
                  onClick={() => removeFromCart(index)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
        {cartMessage && <p className="text-green-600 font-bold mt-2">{cartMessage}</p>}

        {/* Total Price */}
        <div className="mt-4">
          <h4 className="font-bold">Total Price: ${totalPrice}</h4>
        </div>

        {/* Checkout Button */}
        {cart.length > 0 && (
          <div className="mt-4">
            <button
              className="bg-green-600 w-[150px] h-[40px] rounded-full text-white"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card2;
