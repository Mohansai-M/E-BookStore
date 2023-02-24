import React, { useState, useEffect } from "react";
import './App.css';
import axios from 'axios';
import { cardBook } from "./bookStyle";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

function App() 
{
   
  const classes = cardBook();
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
        {Books.map((book) => (
          <Card className={classes.card}>
           <CardMedia>
        <div className="imgdiv" ><img className="imgclass" src={book.image} alt={book.name}/></div>
        </CardMedia>
        <CardContent>
        <div className="booktitle"><span className="BookTitle">{book.name} </span></div>
        {/*<div className="bookdetails" ><b>{book.author}</b></div>
        <div className="bookdetails" >&#8377;{book.price}</div>
        <div className="bookdetails" >{book.isbn}</div>*/}
        <CardActions>
        <div className="detailbutton"><button className="CartButton">Add to Cart</button></div>
        </CardActions>
        </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );}

export default App;
