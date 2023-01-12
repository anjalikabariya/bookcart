import React, { useState, useEffect } from 'react';
import data from './components/backend/Data/data';
import Header from './components/frontend/Header/Header'
import {BrowserRouter as Router} from "react-router-dom";
import Paths from "./components/frontend/Paths/Paths";

const App = () => {
  const { bookItems } = data;
  const [cartItems, setCartItems] = useState([]);
  const [images, setImages] = useState([]);
  const [books, setBooks] = useState([])
  useEffect(() => {
    const url = 'https://picsum.photos/v2/list';
    const fetchData = async() => {
      try{
        const response = await fetch(url);
        const json = await response.json();
        const images = json.map(a => a.download_url);
        const books = bookItems.map(item => {
          const book = {};
          book["id"] = item.id;
          book["name"] = item.name;
          book["price"] = item.price;
          book["image"] = images[item.id];
          return book;
        })
      setBooks(books);      }
      catch(error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  const addBook = (bookItem) => {
    const bookExist = cartItems.find((item) => item.id === bookItem.id);
    if(bookExist) {
      setCartItems(cartItems.map((item) => 
        item.id === bookItem.id ? {...bookExist, quantity: bookExist.quantity + 1} : item
      ));
    }
    else {
      setCartItems([...cartItems, {...bookItem, quantity: 1}])
    }
  }

  const removeBook = (bookItem) => {
    const bookExist = cartItems.find((item) => item.id === bookItem.id);
    if(bookExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== bookItem.id));
    }
    else {
      setCartItems(cartItems.map((item) => item.id === bookItem.id ? {...bookExist, quantity: bookExist.quantity - 1} : item))
    }
  }

  const clearCart = () => {
    setCartItems([]);
  }

  return (
    <div>
    <Router>
      <Header />
      <Paths bookItems={books} cartItems={cartItems} addBook={addBook} removeBook={removeBook} clearCart={clearCart} />
    </Router>
    </div>
  );
};

export default App;
