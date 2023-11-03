// ProductList.js
import React from "react";
import styled from "styled-components";
import ProductCard from "./ProductCard";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const ProductList = ({ products }) => (
  <Container>
    {products.map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </Container>
);

export default ProductList;
