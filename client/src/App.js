import './App.css';
import BookLanding from './BookLanding';
import NavBar from './features/NavBar';
import {  BrowserRouter as Router,Route,Routes } from 'react-router-dom';

function App() 
{
   return (
     <>
       <Router>
         <NavBar></NavBar>
         <BookLanding></BookLanding>
         {/*<Routes>
           <Route path="/Books" component={BookLanding} />
         </Routes>*/}
       </Router>
     </>
   );
}

export default App;
