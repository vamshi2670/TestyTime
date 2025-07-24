import React from 'react'
import { Link } from 'react-router-dom';
import chef from './testyimages/chef.jpg'
import pancake from './testyimages/pancakes.jpeg'
import eggsbendict from './testyimages/eggs_benedict.jpeg'
import french from './testyimages/french_toast.jpeg'
import streak from './testyimages/steak_frites.jpeg'
import vegetable from './testyimages/vegetable_risotto.jpeg'
import salmon from './testyimages/salmon_salad.jpeg'
import pasta from './testyimages/pasta_primavera.jpeg'
import lobster from './testyimages/lobster_tail.jpeg'
import filet from './testyimages/filet_mignon.jpeg'

function Home() {
  const menuData = {
  breakfast: [
    {
      name: 'Pancakes',
      desc: 'Fluffy pancakes served with maple syrup and butter.',
      image: pancake, // Replace with actual image
    },
    {
      name: 'Eggs Benedict',
      desc: 'Poached eggs on an English muffin with Canadian bacon and hollandaise sauce.',
      image: eggsbendict,
    },
    {
      name: 'French Toast',
      desc: 'Thick slices of French toast topped with powdered sugar and fresh berries.',
      image: french,
    },
  ],
  lunch: [
    {
      name: 'Steak Frites',
      desc: 'Grilled sirloin steak served with shoestring fries and garlic aioli.',
      image: streak
    },
    {
      name: 'Salmon Salad',
      desc: 'Grilled salmon filet on a bed of mixed greens with citrus vinaigrette.',
      image: salmon,
    },
    {
      name: 'Pasta Primavera',
      desc: 'Mixed vegetables and pasta in a light cream sauce.',
      image: pasta,
    },
  ],
  dinner: [
    {
      name: 'Filet Mignon',
      desc: 'Tender filet mignon cooked to perfection, served with mashed potatoes and asparagus.',
      image: filet,
    },
    {
      name: 'Lobster Tail',
      desc: 'Grilled lobster tail served with drawn butter and lemon.',
      image: lobster,
    },
    {
      name: 'Vegetable Risotto',
      desc: 'Creamy risotto with fresh seasonal vegetables.',
      image: vegetable,
    },
  ],
};
  return (
   <>
      <div className='hero'>
      <div class="overlay"></div>
    <div class="text">
      <h4 style={{}} className='text-info'>Explore a World of Flavors</h4>
      <h1 style={{fontSize:"larger",fontFamily:"serif",fontWeight:"bold"}} className='text-white display-5'>From savory dishes to sweet delights, we serve happiness.</h1>
      <h5 style={{fontFamily:'cursive'}}>Where Every Bite Tells a Story !</h5>
      <pre></pre>
       <Link to="/booktable" className='btn btn-primary' id='booktable'>Book table now</Link>

    </div>
    
      </div>

      <div style={{display:"flex"}}>
        <div className='mt-5' style={{marginLeft:'90px'}}>
          <h1 className='text-primary about' style={{fontFamily:'cursive',font:'caption',fontWeight:'bold'}}>About</h1>
          <h2 className='heading' style={{fontFamily:"serif" ,color:'black' }}>Welcome to TestyTime</h2>
          <p style={{width:'350px'}}>Welcome to <strong className='text-success'>TastyTime</strong>, your ultimate destination for delicious and freshly prepared food! We bring together a variety of cuisines and mouth-watering dishes, all crafted with love and the freshest ingredients. Whether you're craving spicy snacks, healthy meals, or rich desserts, TastyTime has something for every foodie. <br /><br />
      Our platform lets you explore different types of food items, place orders easily, and even reserve a table at your favorite restaurant—all in one place. We believe in delivering not just food, but a tasty experience that satisfies your hunger and your heart.
    </p>  
          </div>
        <div><img src={chef} alt="not found" style={{height:"550px", width:"400px ", marginLeft:"300px",marginTop:"-20px"}} /></div>
      </div>

      <div className="hero-section text-white text-center d-flex align-items-center justify-content-center">
      <div className="overlay"></div>
      <div className="z-1 position-relative">
        <p className="text-uppercase small mb-2">Now Booking</p>
        <h1 className="display-5 fw-bold">Private Dinners & Happy Hours</h1>
      </div>
    </div>

    
      <h1 style={{fontFamily:'cursive'}} className='text-primary menue mt-5'>Specialities </h1> 
      <h1 className='menue'>our menue</h1>

     <div className="container py-5">
      
      <div className="row">
        {Object.entries(menuData).map(([mealType, items]) => (
          <div key={mealType} className="col-md-4 mb-1">
            <div className="p-5 border rounded-4 menu-box shadow-sm h-100 " style={{ minHeight: '450px' }}>
              <h4 className="text-center text-uppercase">{mealType}</h4>
              {items.map((item, idx) => (
                <div key={idx} className="d-flex align-items-start gap-3 my-4 menu-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="rounded-circle shadow-sm menu-img"
                    style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                  />
                  <div>
                    <h6 className="fw-bold mb-1">{item.name}</h6>
                    <p className="mb-0 text-muted small">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
   <Link to="/menu" id='viewmenuebtn'>view menue</Link>

</>
  )
}

export default Home