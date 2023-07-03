import  { useState } from 'react';
import "./AddBook.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
function AddBook()
{
     const bookData = {
       bookTitle: "",
       bookPrice: "",
       bookAuthor: "",
       bookImage: "",
       bookIsbn: "",
     };
     const [Book, setBook] = useState(bookData);
     const handleChanger =(e) =>
     {
      if (e.target.name === "bookImage")
      {
        setBook({ ...Book, [e.target.name]: e.target.files[0] });
      }
      else{
        setBook({ ...Book, [e.target.name]: e.target.value });
      }
     }


       const handleSubmit = (e) => {
         e.preventDefault();
         const uploadImage = async () => {
           // POST request
          /* const result =*/ await axios.post(`/books/add`, Book, {
             headers: { "Content-Type": "multipart/form-data" },
           });
           
         };
         uploadImage();
       };
      


     return(
        <div className='AddBookForm'>
            <form encType="multipart/form-data">
              <div className='form-group'>
                <label>Book Name</label>
                <input type='text' class="form-control form-control-lg text-input" required value={Book.bookTitle} name="bookTitle" onChange={handleChanger}/>
                <br></br>
                <label>Book Author</label>
                <input type='text' class="form-control form-control-lg text-input" required value={Book.bookAuthor} name="bookAuthor" onChange={handleChanger}/>
                <br></br>
                <label>Book Price</label>
                <input type='text' class="form-control form-control-lg text-input" required value={Book.bookPrice} name="bookPrice" onChange={handleChanger}/>
                <br></br>
                <label>Book Image</label>
                <input type='file' id="file-input" class="form-control" required  name="bookImage" accept="image/*" onInput={handleChanger}/>
                <br></br>
                <label>Book Isbn</label>
                <input type='text' class="form-control form-control-lg text-input" required value={Book.bookIsbn} name="bookIsbn"onChange={handleChanger}/>
                <br></br>
                <input type="submit" class="form-control form-control-lg text-input" onClick={event =>{handleSubmit(event);}}></input>
                 </div>
            </form>
        </div>
    )
}

export default AddBook;