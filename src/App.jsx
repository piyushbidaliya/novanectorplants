import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'
import Category from './pages/Category'
import Product from './pages/Product'
import Subscription from './pages/Subscription'
import AboutUs from './pages/AboutUs'
import Checkout from './pages/Checkout'
import ScrollToTop from './components/ScrollToTop'


function App() {
  return (
    <>
    <BrowserRouter>
      <ScrollToTop/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/category' element={<Category/>}/>
        <Route path='/product' element={<Product/>}>
          <Route path=':productId' element={<Product/>}/>
        </Route>
        <Route path='/subscription' element={<Subscription/>}/>
        <Route path='/about' element={<AboutUs/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App
