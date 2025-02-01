import React from 'react'
import '../static/css/tufpluscard.css'
import temp from "../static/images/removed.png"

function Tufpluscard() {
  return (
    <div className='outer-container1'>
        <artical className='img-para'>
            <img src={temp} alt='pic'/>
            <div className='artical-content'>
            <h3 className='h3-para-head'>Elevate Your Learning Journey with TUF+ Course</h3>
            <p className='paragraph'>Curated learning, approach-wise solutions, personalized
                <br/>roadmaps, expert doubt assistance, and more!
            </p>
            </div>
        </artical>

        <button className='explore-button'>Explore Plus</button>
        
    </div>
  )
}

export default Tufpluscard