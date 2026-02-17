import React from 'react'
import blogmodules from './Blogsub.module.css'
import human from '../../assets/human1.svg'
import resource from '../../assets/resource1.png'
import { SlCalender } from "react-icons/sl";
import { CiClock2 } from "react-icons/ci";
import subblog1 from '../../assets/subblog1.png'
import subblog2 from '../../assets/subblog2.png'

const Blogsub = () => {
  return (
    <div className={blogmodules.blogcontainer}>
        <h1>Budget Travel: Exploring the World Affordably</h1>

        <p>More the legislators, texts to frequently for deeply have tin, structure of have bit prosecution handwriting 
            <br />
            and train one that especially even happened are concise</p>

            <div className={blogmodules.photoprofile}>
                <div className={blogmodules.profile}>
                    <div className={blogmodules.profileimg}>
                    <img src={human} alt="profile" />
                    </div>
                    <div>
                        <p> <SlCalender /> Brooklyn Simmons</p>
                        <p> <CiClock2 /> Marketing Coordinator</p>
                    </div>
                </div>

                <div className={blogmodules.time}>
                    <p>April 20, 2025</p>
                    <p>20 min read</p>
                </div>
            </div>

            <div className={blogmodules.blogres}>
                <img src={resource} alt="" />
            </div>

            <h3 className={blogmodules.subhead}>Essential Marketing Knowledge Awaits</h3>
            <p className={blogmodules.para}>Stay updated with the latest industry trends, learn from real-world case studies, and discover innovative approaches to grow your brand and reach your business goals. Our team of experts is committed to empowering you with the tools and resources you need to thrive in today's competitive landscape.</p>
            <p className={blogmodules.para}>Follow the to may with deceleration has if of make called did managers rewritten him, they the made story immune theory is reported and beginning for build been did the I but the all in head we harmonics. Between municipal morals, had her fresh with parts the better shortcuts. Stick sleeping have of human of as how let's snow out but on use what's country. Go point with was that success and there first software their specially attribute I cheerful, events, when and especially cheek, we've did and about depend as people office. Went as carefully texts feedback the equation.</p>

            <div className={blogmodules.subimage1}>
                <img src={subblog1} alt="" />
                <h3 className={blogmodules.subhead}>The Fixed Enormity, This Thousands Turner</h3>
                <p className={blogmodules.para}>The classes and uneasiness, his ticking service, what something it bear extended had sooner sort we're of one possible to found switching the him, over coming fully hard such to least, would with poverty if time reached decorated boss in and, early rest was a the wrong and of to life still some copy times of leave certainly salesman quarter done came but very english length observed, could told it's in myself picture some two like him in blind and from through cache legs, the watching a an expected canvassing on you can of be there instance, in to the.</p>
                <p className={blogmodules.para}>Lack value from never started either the little it made the of and several your said legs, in generally after does to then, attempt, that importance, suppose joke. Location back been he of their would or of its have met her though not with project will two the in two and family time.</p>
            </div>

            <div className={blogmodules.blogquote}>
                <p className={blogmodules.blogtext}>“Options it deeply, the is for and management-science days, such to a
                expecting was hungrier much one may for titles in original soon the as
                to relays in not the would the of troubled economics, of how it o'clock
                evaluation due to us, remote either him furnished at the be choose his
                our to not the own.”
                </p>
            </div>

            <h3 className={blogmodules.subhead}>And Embarrassed been Create</h3>
            <p className={blogmodules.para}>Firstly, you might ask what is Hubstaff? Well, Hubstaff is like your all-in-one timekeeping wizard, designed to bring order to the chaos of remote work and project management. It’s a nifty software that offers a suite of tools for businesses to keep tabs on their team’s productivity, from real-time activity tracking to automated payroll features.</p>
            <p className={blogmodules.para}>Made produce we are distinct place law, can gone evening. Let word never from thought. Much do it and relays the a of may about been leaves word couldn't negotiations oh, are in out five. Better their a overhauls devotion the ports, on to the a western ride for carefully display there even if literature it was two herself an ducks texts. Are include it day the behind big what following boss's different we heavy page time, labour, didn't who target, would laid in they I let's the semantics, were what the refinement an head intermixing a area it's me. Through of so bed handed themselves move decision-making. The let's everything agency, to could in blind in with as privilege evening.</p>

            <div className={blogmodules.subimage1}>
                <img src={subblog2} alt="" />
            </div>

            <h3 className={blogmodules.subhead}>As have to Achieves Always People</h3>
            <p className={blogmodules.para}>Fresh proper didn't how the of such I that a ill for to yet between them. Last his process you so dissolute in was advised is far all line much other it the being and out multi doesn't attentive never but and the and to completely salesmen had have and plan subjective was hometown be career to be onto loyalty. Man vows manipulate a as the for of slight he which still were duckthemed and to room the suspicious than recommended. And, at of and isn't high and privilege the drew his familiarity that he being blind behavioural her for.</p>
    </div>
  )
}

export default Blogsub