import React from 'react'
import aboutmodule from '../AboutSection/About.module.css'
import mission from '../../assets/mission.png'
import vision from '../../assets/vision.png'

const Mission = () => {
  return (
    <>
    <div className={aboutmodule.mission}>
          <div className={aboutmodule.missionimg}>
            <img src={mission} alt="mission" />
          </div>
    
          <div className={aboutmodule.missiontext}>
            <h3>Our Mission</h3>
            <p style={{marginBottom:'20px'}}>First the follow encourage in commas, got delicacy implemented note our wasn't go went concept. Peacefully, flatter friends links suspicion.</p>
            <p>Has if of make called did managers rewritten him, they the made story immune theory is reported and beginning for build been did the I but the all in head. The template offered a modern and clean design that perfectly complemented the content I create.</p>
          </div>
    </div>

    <div className={`${aboutmodule.mission} ${aboutmodule.mobileImageFirst}`}>

        <div className={aboutmodule.missiontext}>
            <h3>Our Vission</h3>
            <p style={{marginBottom:'20px'}}>First the follow encourage in commas, got delicacy implemented note our wasn't go went concept. Peacefully, flatter friends links suspicion.</p>
            <p>Has if of make called did managers rewritten him, they the made story immune theory is reported and beginning for build been did the I but the all in head. The template offered a modern and clean design that perfectly complemented the content I create.</p>
          </div>

          <div className={aboutmodule.missionimg}>
            <img src={vision} alt="mission" />
          </div>
    </div>

  </>  
  )
}

export default Mission