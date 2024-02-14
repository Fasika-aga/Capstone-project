import React, { useState, useEffect } from "react";
import axios from "axios";

const GemstoneList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchGemstones = async () => {
      try {
        const { data } = await axios.get("http://localhost:8080/product/get");
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
      <h1>Gemstones</h1>
      <ul>
        {products.map((pro, index) => (
          <div key={index}>
            <h2>{pro.name}</h2>
            <p>Price: {pro.price}</p>
            <p>Description: {pro.description}</p>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default GemstoneList;