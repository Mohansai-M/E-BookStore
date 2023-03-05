import './App.css';
import BookLanding from './BookLanding';
import NavBar from './features/NavBar';
import {  BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Book from './Book';

function App() 
{
   return (
     <>
       <Router>
         <NavBar></NavBar>
         <Routes>
           <Route path="/Books" element={<BookLanding />} />
           <Route path="/Books/:isbn" element={<Book />} />
         </Routes>
       </Router>
     </>
   );
}

export default App;
