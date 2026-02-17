import React from 'react'
import aboutmodule from './About.module.css'

const AboutSection = () => {
  return (
    <div className={aboutmodule.aboutcontainer}>
        <h1>About Us</h1>

        <div className={aboutmodule.videoWrapper}>
      <iframe
        title="vimeo-player"
        src="https://player.vimeo.com/video/1112529026?h=701fc5df78"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
        allowFullScreen
      />
    </div>

    <div className={aboutmodule.aboutcontent}>
        <h3>Our Approach</h3>
        <p>Discover the perfect blend of style, comfort, and durability with our latest shoe collection — designed for everyday wear, but crafted to make a statement. Whether you're navigating city streets, heading to the office, or catching up with friends, these shoes are your go-to companion for every step.</p>
    </div>
    
    </div>
  )
}

export default AboutSection
