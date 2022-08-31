import Header from '../components/Header/Header'
import Slider from '../components/Slider/Slider'
import FeaturedProducts from '../components/FeaturedProducts/FeaturedProducts'
import Categories from '../components/Categories/Categories'
import Footer from '../components/Footer/Footer'

import './HomePage.scss';

export default function HomePage() {
   return (
      <>
         <div className='homePage'>
            <Header />
            <Slider />
            <FeaturedProducts />
            <Categories />
            <Footer />
         </div>
      </>
   )
}