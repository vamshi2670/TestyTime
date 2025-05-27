import React from 'react'

function Womencollections(props) {
    const {image1,image2,image3,image4,image5,image6}=props.womensfashion
  return (
    <div className='womenssection'>
      
        <h1>Womens Fashion</h1>
        <div className="womenbanner">
          <img src="assets\LadiesBanner.gif" alt="not found" />
        </div>
        <div className="womensimg">
            <img src={image1} alt="title" />
            <img src={image2} alt="title" />
            <img src={image3} alt="title" />
            <img src={image4} alt="title" />
            <img src={image5} alt="title" />
            <img src={image6} alt="title" />
        </div>
    </div>
  )
}

export default Womencollections