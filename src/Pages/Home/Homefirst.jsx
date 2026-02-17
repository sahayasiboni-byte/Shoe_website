import React from 'react'
import HomeSecondSection from '../../Section/HomeSection/Herosection/HomeSecondSection'
import Feature from '../../Section/HomeSection/FeatureSection/Feature'
import Explore from '../../Section/HomeSection/ExploreSection/Explore'
import Seller from '../../Section/HomeSection/SellerSection/Seller'
import Categories from '../../Section/HomeSection/CategoriesSection/Categories'
import Offer from '../../Section/HomeSection/Offers/Offer'
import NewArrival from '../../Section/HomeSection/NewArrivals/NewArrival'
import Comment from '../../Section/HomeSection/Comment/Comment'
import Resource from '../../Section/HomeSection/Resources/Resource'


const Homefirst = () => {
  return (
    <>
      <HomeSecondSection/>
      <Feature />
      <Explore />
      <Seller/>
      <Categories />
      <Offer />
      <NewArrival />
      <Comment />
      <Resource />
    </>
  )
}

export default Homefirst
