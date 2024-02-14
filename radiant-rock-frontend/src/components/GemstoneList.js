import React, { useState, useEffect } from 'react';
import axios from 'axios';

const GemstoneList = () => {git config core.autocrlf true
  const [gemstones, setGemstones] = useState([]);

  useEffect(() => {
    const fetchGemstones = async () => {
      try {
        const response = await axios.get('/api/gemstones');
        setGemstones(response.data);
      } catch (error) {
        console.error('Error fetching gemstones:', error);
      }
    };

    fetchGemstones();
  }, []);

  return (
    <div>
      <h1>Gemstones</h1>
      <ul>
        {gemstones.map(gemstone => (
          <li key={gemstone._id}>
            {gemstone.name} - {gemstone.color}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GemstoneList;