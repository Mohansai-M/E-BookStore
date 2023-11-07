import './App.css';
import "./queries.css";
import BookLanding from './BookLanding';
import NavBar from './features/NavBar';
import {  BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Book from './Book';
import AddBook from './features/AddBook';
import Login from './Auth/Login';
import Register from './Auth/Register';

function App() 
{
   return (
     <div className="App">
       <Router>
         <NavBar></NavBar>
         <Routes>
           <Route path="/Books" element={<BookLanding />} />
           <Route path="/Books/:isbn" element={<Book />} />
           <Route path="/AddBook" element={<AddBook />} />
           <Route path="/Login" element={<Login />} />
           <Route path="/Register" element={<Register />} />
         </Routes>
       </Router>
     </div>
   );
}

export default App;
