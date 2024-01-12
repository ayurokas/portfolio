import React from 'react';
import './pyramide.css';

const PyramidComponent = () => {
  const createDotRow = (dotsCount) => {
    return (
      <div className="dot-row" key={dotsCount}>
        {Array.from({ length: dotsCount }).map((_, dotIndex) => (
          <div className="dot" key={dotIndex}></div>
        ))}
      </div>
    );
  };

  const createPyramid = (rowsCount) => {
    const pyramidRows = [];
    for (let i = rowsCount; i >= 1; i--) {
      pyramidRows.push(createDotRow(i));
    }
    return pyramidRows;
  };

  const createPyramids = (numberOfPyramids, rowsPerPyramid) => {
    return Array.from({ length: numberOfPyramids }).map((_, index) => (
      <div className="pyramid" key={index}>
        {createPyramid(rowsPerPyramid)}
      </div>
    ));
  };

  return (
    <div className="pyramids-container">
      <div className="indicator">
      </div>
      {createPyramids(23, 2)}
    </div>
  );
};

export default PyramidComponent;
