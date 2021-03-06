import { Route, Routes } from 'react-router-dom';
import './App.css';
import AboutMe from './Pages/AboutMe/AboutMe';
import Blogs from './Pages/Home/Blogs/Blogs';
import Checkout from './Pages/Home/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Home/Home/Login/Login';
import SignUp from './Pages/Home/Home/Login/SignUp/SignUp';
import NotFound from './Pages/Home/NotFound/NotFound';
import RequireAuth from './Pages/RequireAuth/RequireAuth';
import ServicesPage from './Pages/ServicesPage/ServicesPage';
import Footer from './Pages/Shared/Footer/Footer';
import Navbar from './Pages/Shared/Navbar/Navbar';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>

        <Route path='/checkout' element={
          <RequireAuth>
            <Checkout></Checkout>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/sign-up' element={<SignUp></SignUp>}></Route>
        <Route path='service-page' element={<ServicesPage></ServicesPage>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='about-me' element={<AboutMe></AboutMe>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
