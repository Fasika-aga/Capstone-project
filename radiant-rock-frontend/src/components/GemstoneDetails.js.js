// GemstoneDetail.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GemstoneDetail = ({ match }) => {
  const [gemstone, setGemstone] = useState(null);
  const gemstoneId = match.params.id;

  useEffect(() => {
    const fetchGemstone = async () => {
      try {
        const response = await axios.get(`/api/gemstones/${gemstoneId}`);
        setGemstone(response.data);
      } catch (error) {
        console.error('Error fetching gemstone:', error);
      }
    };

    fetchGemstone();
  }, [gemstoneId]);

  if (!gemstone) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>{gemstone.name}</h2>
      <p>Origin: {gemstone.origin}</p>
      <p>Price per Carat: ${gemstone.pricePerCarat}</p>
    </div>
  );
};

export default GemstoneDetail;
