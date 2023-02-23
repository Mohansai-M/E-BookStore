import React, { useState, useEffect } from "react";
import './App.css';
import axios from 'axios';

function App() 
{

  const [Books, setBooks] = useState([]);

  useEffect(() => {
      axios
        .get(`books/`)
        .then((response) => setBooks(response.data));
    }, []);
  console.log(Books);
  return (
     <div className="mainbook-div container">
         <div className="bookcard">
    {   Books.map(book =>  (
        <div className="bookdetailscard">
        <div className="imgdiv" ><img className="imgclass" src={book.image} alt={book.name}/></div>
        <div className="booktitle"><span className="BookTitle">{book.name} </span></div>
        {/*<div className="bookdetails" ><b>{book.author}</b></div>
        <div className="bookdetails" >&#8377;{book.price}</div>
        <div className="bookdetails" >{book.isbn}</div>*/}
        <div className="detailbutton"><button className="CartButton">Add to Cart</button></div>
        </div>
        ))
    }</div>
    </div>
  
)

}

export default App;
