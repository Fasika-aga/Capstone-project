import React, { useState, useEffect } from "react";
import axios from "axios";
import images from "../assets/istockphoto-465357582-612x612.jpg"
import Navbar from "./Navbar"
const GemstoneList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchGemstones = async () => {
      try {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
        console.log(data);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching gemstones:", error);
      }
    };

    fetchGemstones();
  }, []);

  return (
    <div>
    <Navbar/>
      <h1>Gemstones</h1>
      <ul>
        {products.map((pro, index) => (
          <div key={index}>
            <h2>{pro.name}</h2>
            <p>Price: {pro.price}</p>
            <p>Description: {pro.description}</p>
            <img src={images}/>
            
          </div>
        ))}
      </ul>
    </div>
  );
};

export default GemstoneList;