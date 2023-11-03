import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import ProductList from "./Components/ProductList";

const AppContainer = styled.div`
  text-align: center;
`;

const PaginationContainer = styled.div`
  margin-top: 20px;
`;

const Button = styled.button`

  background-color: #3498db;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin: 0 5px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
  margin-bottom: 20px;

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const H1 = styled.text`
  color: white;
  font-size: 70px;
  font-family: Impact, Haettenschweiler, "Arial Narrow Bold", sans-serif;
  padding: 40px;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const ResponsiveContainer = styled.div`
  @media (max-width: 768px) {
  }
`;

const App = () => {
  const products = [
    {
      id: "1",
      name: "Fridge",
      price: 80000,
      image: "Fridge (2).jpg",
      summary: "A Lg Fridge That Comes With The Latest Cooling Technology ",
    },
    {
      id: "2",
      name: "Fuji Camera",
      price: 240000,
      image: "Fuji-camera.jpg",
      summary: "A New Fuji Camera With Latest One Click Technology ",
    },
    {
      id: "3",
      name: "Headphones",
      price: 15000,
      image: "Headphones.jpg",
      summary: "A High Quality Headphones That Provide Rich Sound Experience ",
    },
    {
      id: "4",
      name: "Home Speakers",
      price: 22000,
      image: "Home-speakers.jpg",
      summary:
        "A Great Product To Enjoy Late Night Movies With Your Family Or Loved Ones",
    },
    {
      id: "5",
      name: "Fridge",
      price: 15000,
      image: "Oven.jpg",
      summary: "For Rich And Enhancing Cooking Experience ",
    },
    {
      id: "6",
      name: "Iphone 15",
      price: 65000,
      image: "iphone.jpg",
      summary: "Still Apple Great IOS Technology And A World Class Camera ",
    },
    {
      id: "8",
      name: "Oled TV",
      price: 120000,
      image: "Smart-Oled.jpg",
      summary: "Every Pixel Comes To Reality With This Full Hd Oled Screen ",
    },
    {
      id: "9",
      name: "Hi Top Shoes",
      price: 20000,
      image: "Hi-top-shoes.jpg",
      summary: "Stylish Pair Of Shoes For Young Ones ",
    },
    {
      id: "10",
      name: "I-Watch",
      price: 28000,
      image: "i-watch.jpg",
      summary:
        "Gives You Heat Rating , Steps That You Walk And Shows Time As Well ",
    },
    {
      id: "11",
      name: "Condensor Mic",
      price: 35000,
      image: "condensor-mic.jpg",
      summary: "A High Quality Audio Recording Mic ",
    },
    {
      id: "12",
      name: "Vitamin C",
      price: 1000,
      image: "Vitamin-c.jpg",
      summary: "For Glowing And Radiating Skin ",
    },
    {
      id: "13",
      name: "Keyboard",
      price: 24000,
      image: "Midi-keyboard.jpg",
      summary:
        "Thousand Plus Sounds Amazing For Producing As Well As Live Playing ",
    },
    {
      id: "14",
      name: "Memory Card",
      price: 2000,
      image: "Memory-card.jpg",
      summary: "Small 128Gb Fast Transfer Card ",
    },
    {
      id: "15",
      name: "Analog Watch",
      price: 15000,
      image: "analog-watch.jpg",
      summary: "A Qaulity Watch That Comes With Three Years Of Garuntee ",
    },
    {
      id: "16",
      name: "Trainers",
      price: 22000,
      image: "Trainers.jpg",
      summary: "Amazing For Work Outs Or To Wear As Casuals ",
    },
    {
      id: "17",
      name: "Mac Book",
      price: 180000,
      image: "Mac.jpg",
      summary: "Mac Book At Lowest Price ",
    },
    {
      id: "18",
      name: "Earphones",
      price: 5000,
      image: "bluetooth-earphone.jpg",
      summary: "High Quality Bluetooth Earphones",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [sortOption, setSortOption] = useState("default");

  const productsPerPage = 6;
  const totalPages = Math.ceil(products.length / productsPerPage);
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleSort = (option) => {
    setSortOption(option);
  };

  const sortedProducts = () => {
    let sorted = [...currentProducts];
    switch (sortOption) {
      case "price-low":
        sorted.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        sorted.sort((a, b) => b.price - a.price);
        break;
      case "name-ascending":
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "name-descending":
        sorted.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        break;
    }
    return sorted;
  };

  const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: linear-gradient(135deg, #838b8b, #6c7a89);
 
  }
  `;

  return (
    <AppContainer>
      <GlobalStyle />
      <H1>Product's Hub</H1>
      <div>
        <Button onClick={() => handleSort("default")}>Default</Button>
        <Button onClick={() => handleSort("price-low")}>
          Price: Low to High
        </Button>
        <Button onClick={() => handleSort("price-high")}>
          Price: High to Low
        </Button>
        <Button onClick={() => handleSort("name-ascending")}>Name: A-Z</Button>
        <Button onClick={() => handleSort("name-descending")}>Name: Z-A</Button>
      </div>
      <ResponsiveContainer>
        <ProductList products={sortedProducts()} />
        <PaginationContainer>
          <Button onClick={prevPage} disabled={currentPage === 1}>
            Previous
          </Button>
          <span>
            {currentPage} of {totalPages}
          </span>
          <Button onClick={nextPage} disabled={currentPage === totalPages}>
            Next
          </Button>
        </PaginationContainer>
      </ResponsiveContainer>
    </AppContainer>
  );
};

export default App;
