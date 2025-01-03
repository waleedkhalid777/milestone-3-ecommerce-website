import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import React from 'react';
import { urlFor } from '@/sanity/lib/image'; 


import Card2 from '../componets/card2';
import Image from 'next/image';

// Define List type
type List = {
  slug: { current: string };
  images?: string[]; 
  name: string;
  price: number;
};

const Lists = async () => {
  try {
    // Fetch products using GROQ
    const products: List[] = await client.fetch(groq`
      *[_type == "List"] {
        slug,
        name,
        price,
        images
      }
    `);

    console.log('Fetched products:', products);

  
    if (!products.length) {
      return <div>No products found.</div>;
    }

    return (
      <div className=" w-full py-12 mt-[125px]">
        <div className="container mx-auto px-4">
          <div>
            <h1 className="text-3xl font-medium mx-5 underline">All AirPods Product </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="group relative  rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-amber-200"
              >
                <Card2
                  product={product}
                  
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching products:', error);
    return <div>Failed to load products.</div>;
  }
};

export default Lists;
