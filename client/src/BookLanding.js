import React, { useState, useEffect } from "react";
import axios from 'axios';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Card } from "@mui/material";

function BookLanding()
{
  const [Books, setBooks] = useState([]);

  useEffect(() => {
      axios
        .get(`books/`)
        .then((response) => setBooks(response.data));
    }, []);
  return (
    <div className="mainbook-div container-fluid">
      <div className="bookcard">
        {Books.map((book) => (
          <Card
            sx={{
              backgroundColor: "#F9F7F7",
              borderRadius: "0.4rem",
              width: "12rem",
              height: "95%",
              boxShadow: "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
            }}
          >
            <CardMedia>
              <div className="imgdiv">
                <img className="imgclass" src={book.image} alt={book.name} />
              </div>
            </CardMedia>
            <CardContent>
              <div className="booktitle">
                <span className="BookTitle">{book.name} </span>
              </div>
              <div className="bookdetails">
                <b>{book.author}</b>
              </div>
              <div className="bookdetails">&#8377;{book.price}</div>
              <CardActions>
                <div className="detailbutton">
                  <button className="CartButton">Add to Cart</button>
                </div>
              </CardActions>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );}

  export default BookLanding;