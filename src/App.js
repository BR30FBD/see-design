// import './App.css';
import Login from './login';
// import Signin from './signup';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Signup from './signup';
import Profile from './profile';
import Homepage from './homepage';
import Searchimg from './searchimg';
import Dashboard from './dashbord';
import Forgotpassword from './forgotpassword';
import Header from './header';
import Main from './main';
// import Footer from './footer';
function App() {
  return (
   <>
   <Router>
     <Header/>
     <Routes>
       <Route path='/login' element={<Login/>}/>
       <Route path='/Signup' element={<Signup/>}/>
       <Route path="/profile" element={<Profile/>}/>
       <Route path="/cateogry" element={<Homepage/>}/>
       <Route path='/search' element={<Searchimg/>}/>
       <Route path="/dashbord" element={<Dashboard/>}/>
       <Route path="/forgot" element={<Forgotpassword/>}/>
       <Route path="/" element={<Main/>}/>


     </Routes>
     {/* <Footer/> */}
   </Router>
   {/* <Signin/> */}
   </>
  );
}

export default App;
