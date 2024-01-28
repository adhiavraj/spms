import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PortfolioForm = ({ addPortfolio }) => {
  const navigate = useNavigate();
  const [portfolioName, setPortfolioName] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newPortfolio = {
      id: Date.now().toString(),
      name: portfolioName,
    };

    addPortfolio(newPortfolio);

    navigate('/portfolios');
  };

  return (
    <div>
      <h2>Create a New Portfolio</h2>
      <form onSubmit={handleFormSubmit}>
        <label>
          Portfolio Name:
          <input
            type="text"
            value={portfolioName}
            onChange={(e) => setPortfolioName(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Create Portfolio</button>
      </form>
    </div>
  );
};

export default PortfolioForm;
