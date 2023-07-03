import React, { useState, useEffect } from "react";
import axios from 'axios';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { Card } from "@mui/material";
import { Link } from "react-router-dom";
function BookLanding()
{
  const [Books, setBooks] = useState([]);
  const [Genres,setGenres] = useState([])
  const [SelectedGenres, setSelectedGenres] = useState([]);
  useEffect(() => {
      axios.get(`books/`).then(
        (response) => {
          setBooks(response.data);
          const Values = [];
           for (const Book of response.data) {
             Values.push(Book.bookGenre.split(","));
           }
      const uniqueValues = [];
      for (const innerArray of Values) {
        for (const value of innerArray) {
          if (!uniqueValues.includes(value)) {
            uniqueValues.push(value);
          }
        }
      }
    setGenres(uniqueValues);
        }
      );

    }, []);

    const encodeImage = (mimetype, arrayBuffer) => {
          const b64encoded = btoa([].reduce.call(new Uint8Array(arrayBuffer),function(p,c){return p+String.fromCharCode(c)},''))
          return "data:" + mimetype + ";base64," + b64encoded;
       }

    function handleCheck(event)
    {
      if(event.target.checked)
      {
        let val = event.target.value;
       setSelectedGenres((prevState) => {
         return [...prevState, val];
       });
      }
      else if (!event.target.checked) {
      const index = SelectedGenres.indexOf(event.target.value);
       SelectedGenres.splice(index, 1);
      setSelectedGenres(SelectedGenres);
        }
      }
  

    console.log(SelectedGenres)
  return (
    <div className="mainbook-div container-fluid row">
      <div className="col-3">
        {Genres.map((genre) => (
          <span key={genre}>
            <input type="checkbox" id="Genre_ID" value={genre} onChange={event =>handleCheck(event)}/>
            <label htmlFor="Genre_ID">{genre}</label>
            <br></br>
          </span>
        ))}
      </div>
      <div className="bookcard col-9">
        {Books.map((book) => (
          <Card
            sx={{
              backgroundColor: "#FFFFFF",
              borderRadius: "0.4rem",
              width: "18.5rem",
              height: "93%",
              boxShadow:
                "rgba(9, 30, 66, 0.25) 0px 1px 1px, rgba(9, 30, 66, 0.13) 0px 0px 1px 1px",
            }}
            key={book.isbn}
          >
            <CardMedia>
              <div className="imgdiv">
                <img
                  className="imgclass"
                  src={encodeImage(
                    book.bookImage.mimetype,
                    book.bookImage.buffer.data
                  )}
                  alt={book.name}
                />
              </div>
            </CardMedia>
            <CardContent>
              <div className="cardContent">
                <div className="booktitle row">
                  <Link
                    className="BookTitleLink"
                    to={`/Books/${book.bookIsbn}`}
                  >
                    <span className="BookTitle">{book.bookTitle} </span>
                  </Link>
                </div>
                <div className="bookdetails row">
                  <span>
                    <small>by</small> <b>{book.bookAuthor}</b>
                  </span>
                </div>
                <div className="bookdetails row BookPrice">
                  &nbsp;&nbsp;&#8377;{book.bookPrice}
                </div>
              </div>
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