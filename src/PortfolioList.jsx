import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioList = ({ portfolios }) => {
  return (
    <div>
      <h2>Portfolios</h2>
      <ul>
        {portfolios.map((portfolio) => (
          <li key={portfolio.id}>
            <Link to={`/portfolio/${portfolio.id}`}>{portfolio.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioList;
