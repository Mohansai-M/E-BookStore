import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Book() {

  var localIsbn = useParams().isbn;
  const [Book, setBook] = useState([]);
  useEffect(() => {
    axios.get(`books/`,{params: {isbn:localIsbn}}).then((response) => 
   setBook(response.data));
    
  }, [localIsbn]);
  return (
    <div className="mainbook-div container-fluid">
      <div className="bookInfo row">
        <div className="ImgBokcl col-5">
          <img className="BookImg" src={Book.image} alt={Book.name} />
        </div>
        <div className="ImgBokdt col-5">
          <h1>{Book.isbn}</h1>
          <h1>{Book.name}</h1>
          <h1>{Book.author}</h1>
          <h1>{Book.price}</h1>
        </div>
      </div>
    </div>
  );
}

export default Book;
