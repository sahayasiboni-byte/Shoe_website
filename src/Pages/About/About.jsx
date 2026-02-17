import React from 'react'
import AboutSection from '../../Section/AboutSection/AboutSection'
import Feature from '../../Section/HomeSection/FeatureSection/Feature'
import Comment from '../../Section/HomeSection/Comment/Comment'
import Mission from '../../Section/AboutSection/mission'

const About = () => {
  return (
    <div>
      <AboutSection />

      <div >
        <h3 style={{fontSize:'40px', textAlign:'center'}} data-aos="fade-up">Why Choose Us?</h3>
        <Feature />
      </div>
      
      <Mission />
      <Comment />
    </div>
  )
}

export default About
