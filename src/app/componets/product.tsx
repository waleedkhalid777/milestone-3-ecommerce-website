import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import React from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import Card from './Card';

// Define Product type
type Product = {
  slug: { current: string };
  images: any[];
  name: string;
  price: number;
};

const Products = async () => {
  try {
    const products: Product[] = await client.fetch(groq`*[_type == "product"]`);
    console.log(products); // Debugging log

    if (!products.length) {
      return <div>No products found.</div>;
    }

    return (
      <div className="bg-slate-200 w-full py-12 mt-[125px]">
        <div className="container mx-auto px-4">
          <div>
            <h1 className="text-3xl font-medium mx-5">Best Selling Products</h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-6 mt-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all hover:scale-105 hover:shadow-2xl hover:bg-green-400"
              >
                <Card
                  product={product}
                  className="p-6 transition-all group-hover:bg-blue-700"
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

export default Products;
