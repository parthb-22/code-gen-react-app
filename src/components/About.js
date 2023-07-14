import React from 'react'
import bgimg from '../images/about.jpg'
function About() {
  return (
    <div className="about-div">
      <h1>About Us</h1>
      <div class="row">
            <div className="about">
                <h1>We are Largest IT Institute In Satara</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint voluptatem eaque accusantium blanditiis illo dolorem unde nihil dolore numquam nesciunt, quod consectetur corporis? Ad qui voluptas, ipsum voluptate consectetur odio!</p>
                <a href="" class="text-btn">EXPLORE NOW</a>
            </div>
            <div className='abt-img'>
              <img src={bgimg} alt="" srcset="" />
            </div>
        </div>
        </div>
  )
}

export default About
