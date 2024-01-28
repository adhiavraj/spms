import React from 'react';
import { useParams } from 'react-router-dom';
import OptionChain from './OptionChain';

const PortfolioDetails = ({ portfolios }) => {
  const { id } = useParams();
  const portfolio = portfolios.find((p) => p.id === id);

  if (!portfolio) {
    return <div>Portfolio not found</div>;
  }

  return (
    <div>
      <h2>{portfolio.name}</h2>
      <p>Description: {portfolio.description}</p>
      <OptionChain />
    </div>
  );
};

export default PortfolioDetails;
