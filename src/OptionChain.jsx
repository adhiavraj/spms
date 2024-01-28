import React, { useEffect, useState } from 'react';
import axios from 'axios';

const OptionChain = () => {
  const [optionChainData, setOptionChainData] = useState([]);

  useEffect(() => {
    const fetchOptionChainData = async () => {
      try {
        const response = await axios.get(
          'https://www.nseindia.com/api/option-chain-indices',
          {
            headers: {
              'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3',
              'Authorization': 'c9891282e9mshe911fef34b88eddp187bcfjsnca59666e0c17',
            },
          }
        );

        // Assuming the data is structured based on the API response
        const optionChain = response.data.records.data;
        setOptionChainData(optionChain);

        // Log the data to the console
        console.log('Option Chain Data:', optionChain);
      } catch (error) {
        console.error('Error fetching Option Chain data:', error);
      }
    };

    fetchOptionChainData();
  }, []);

  return (
    <div>
      <h2>Live Option Chain Data</h2>
      {/* Display the data as needed */}
      <ul>
        {optionChainData.map((option, index) => (
          <li key={index}>
            {/* Display individual option data here */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptionChain;
