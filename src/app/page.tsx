"use client"
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [products,setProducts]=useState([]);
  useEffect(()=>{
        async function fetchProducts(){
        const response = await fetch(`https://dummyjson.com/products?limit=15&skip=0`,{
          method:'GET'
        });
        const data=await response.json();
        console.log(data.products);
        setProducts(data.products);
      }
      fetchProducts();
    },[])

  return (
    <div>
      <h1>Hello</h1>
      <div className="flex flex-col gap-4 p-4">
        {products && products.map((p:any,ind:number)=>{
          return <div className="border" key={ind}>
            <p className="text-white">{p.title}</p>
            <p className="text-yellow-500">{p.description}</p>
            <p>{p.category}</p>
            <img src={p.images[0]} className="w-48 h-40"/>
          </div>
        })}
      </div>
    </div>
  );
}
