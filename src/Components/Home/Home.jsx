import React from 'react'
import Slider from '../Slides/TopSlider'
import NavBar from '../NavBar/NavBar'
import Awd from '../Awd/Awd';
import ProductSection from '../ProductSection/ProductSection'
import Awards from '../Awards/Awards';
import Blog from '../Awards/Blog';
import Footer from '../Footer/Footer';
import Counter from '../Counter/Counter';

const Home = () => {
  return (
    <>
    <NavBar/>
    <div className='Home'>

        <Slider />
        <Counter />
        <ProductSection/>
        <Awd/>
        <Awards/>
        <Blog/>
       

    </div>
    <Footer />
    </>
  )
}

export default Home
