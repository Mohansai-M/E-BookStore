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
      <div className="bookcard">
        <h1>{Book.isbn}</h1>
      </div>
    </div>
  );
}

export default Book;
