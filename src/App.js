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
import Footer from './footer';
import Metal from './metal';
import Stone from './stone';
import Wood from './wood';
import Library from './library';
import Passwordset from './passwordset';
import Firstscreen from './firstscreen';
import Customize from './customize';
import Error from './error';
import Edit from './edit';
// import Googlelogin from './googlelogin';
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
       <Route path="/passwordset" element={<Passwordset/>}/>

       <Route path="/main" element={<Main/>}/>
       <Route path="*" element={<Error/>}/>

       <Route path="/metal" element={<Metal/>}/>
       <Route path="/stone" element={<Stone/>}/>
       <Route path="/wood" element={<Wood/>}/>
       <Route path='/library' element={<Library/>}/>
       <Route path='/' element={<Firstscreen/>}/>
       <Route path='/customize' element={<Customize/>}/>
       <Route path='/edit' element={<Edit/>}/>
       




       
       {/* <Googlelogin/> */}


     </Routes>
     <Footer/>
   </Router>
   {/* <Signin/> */}
   </>
  );
}

export default App;
