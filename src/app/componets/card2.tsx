"use client"

import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Card2 = ({ product }: { product: any }) => {
  const [cart, setCart] = useState<any[]>([]); // Local cart state
  const [cartMessage, setCartMessage] = useState<string>(''); // Cart completion message
  const [showReceipt, setShowReceipt] = useState<boolean>(false); // Receipt visibility

  // Add to Cart functionality
  const addToCart = (product: any) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      if (updatedCart.length === 5) {
        setCartMessage('you cart has been added');
      }
      return updatedCart;
    });
  };

  
  const totalPrice = cart.reduce((total, item) => total + (item.price || 0), 0).toFixed(2);

  
  const handleCheckout = () => {
    setShowReceipt(true);
  };

  
  if (!product || !product.slug || !product.slug.current) {
    return <div>Product details are missing</div>;
  }

  const imageUrl = product.images && product.images[0] ? urlFor(product.images[0])?.url() : null;

  return (
    <div>
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

      
      <div className="mt-5">
        <h3 className="font-semibold text-lg">Cart Items:</h3>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <p>{cart.length} item(s) in the cart</p>
        )}
        {cartMessage && <p className="text-green-600 font-bold">{cartMessage}</p>}
      </div>

      
      {cart.length > 0 && !showReceipt && (
        <div className="mt-4">
          <button
            className="bg-green-600 w-[150px] h-[40px] rounded-full text-white"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      )}

      {/* Total Price */}
      {cart.length > 0 && !showReceipt && (
        <div className="mt-4">
          <h4 className="font-bold">Total Price: ${totalPrice}</h4>
        </div>
      )}

      {/* Receipt Display */}
      {showReceipt && (
        <div className="mt-5 p-5 border bg-gray-100 rounded-lg">
          <h2 className="text-xl font-bold">Cart Receipt</h2>
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ${item.price.toFixed(2)}
              </li>
            ))}
          </ul>
          <div className="mt-4">
            <h3>Total Price: ${totalPrice}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card2;
