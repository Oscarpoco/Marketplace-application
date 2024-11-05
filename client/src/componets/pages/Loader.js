import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledWrapper>
      <div className="loading">
        <div className="loading-box">
          <div className="grid">
            <div className="color l1" />
            <div className="color l2" />
            <div className="color l3" />
            <div className="color l4" />
            <div className="color l5" />
            <div className="color l6" />
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .loading {
    width: 100vw;  
    height: 100vh; 
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0; 
    z-index: 1000;
    background: #fff;
  }

  .loading-box {
    width: 850px; 
    height: 750px; 
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    position: relative;
  }

  .color {
    background-color: #eee;
    border-radius: 5px;
  }

  .grid {
    width: 100%;
    display: grid;
    grid-template-rows: 200px 200px 200px;
    grid-template-areas:
      "l1 l2 l3"
      "l1 l2 l4"
      "l6 l6 l5";
    gap: 10px;
  }

  .l1 {
    grid-area: l1;
    animation: Loading 6s 0s infinite linear;
  }
  .l2 {
    grid-area: l2;
    animation: Loading 5s 1s infinite linear;
  }
  .l3 {
    grid-area: l3;
    animation: Loading 4s 2s infinite linear;
  }
  .l4 {
    grid-area: l4;
    animation: Loading 3s 3s infinite linear;
  }
  .l5 {
    grid-area: l5;
    animation: Loading 2s 4s infinite linear;
  }
  .l6 {
    grid-area: l6;
    animation: Loading 1s 5s infinite linear;
  }

  @keyframes Loading {
    0% {
      background-color: #eee;
    }
    50% {
      background-color: #333;
    }
    100% {
      background-color: #eee;
    }
  }

  @media (max-width: 500px) {
    .loading-box {
      width: 90%; /* Responsive width for smaller screens */
    }
  }
  
  @media (max-width: 400px) {
    .grid {
      grid-template-rows: 80px 80px 80px; /* Smaller rows for very small screens */
    }
  }
`;

export default Loader;
