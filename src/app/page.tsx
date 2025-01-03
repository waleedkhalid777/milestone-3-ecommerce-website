import Image from "next/image";
import {groq} from 'next-sanity'
import { client } from "@/sanity/lib/client";
import { Hero } from "./componets";
import Product from "./componets/product";
import Features from "./componets/features";


export default async function Home() {

  const product = await client.fetch(groq `*[type=="product"]`)
  console.log(product)
  return (
   <div>
    <Hero/>
    <Product/>
    <Features/>
   </div>
  );
}
