import React from 'react'
import Navbar from '../Section/NavbarSection/Navbar'
import { Routes,Route } from 'react-router-dom'
import Footer from '../Section/Footer/Footer'
import Homefirst from './Home/Homefirst'
import MainCategories from '../Section/MainCategories/MainCategories'
import About from './About/About'
import Blog from '../Pages/Blog/Blog'
import Contact from './Contact/MainContact'
import Account from './Account/Account'
import Signup from '../Section/SignupSection/Signup'
import Shop from './Shop/Shope'
import SubBlog from './SubBlog/SubBlog'
import Shoe from './Shoe/Shoe'
const Router = () => {
  return (
    <div>
      <Navbar />
      <Routes> 
      <Route path='/' element={<Homefirst/>}/>
      <Route path='/categories' element={<MainCategories/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/account' element={<Account/>}/>
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/shop' element={<Shop/>}/>
      <Route path='/subblog' element={<SubBlog/>}/>
      <Route path='/shoe' element={<Shoe/>}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default Router
