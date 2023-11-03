// ProductCard.js
import React from "react";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Card = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  margin: 16px;
  margin-left: 130px;
  margin-right: 140px;
  box-shadow: 7px 7px 12px 2px;
  background-color: white;
  color: black;
  margin-top: 60px;
  width: 200px;

  animation: ${fadeIn} 0.5s ease-in-out;

  &:hover {
    border: 2px solid #3498db;
    box-shadow: 7px 7px 22px 2px #3498db;
  }
`;

const ProductImage = styled.img`
  width: 200px;
  height: 200px;
`;

const Span = styled.text`
  font-size: 10px;
  font-family: sans-serif;
  color: grey;
`;
const ProductCard = ({ product }) => (
  <Card>
    <ProductImage src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>
      Price: {product.price}
      <b>₹</b>
    </p>
    <Span>{product.summary}</Span>
  </Card>
);

export default ProductCard;
