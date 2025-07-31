import React from 'react'
import chacolatecake from './testyimages/chocolate_lava_cake.jpeg'
import tiramisu from './testyimages/tiramisu.jpeg'
import fruit_tart from './testyimages/fruit_tart.jpeg'
import chickenburger from './testyimages/chickenburger.jpeg'
import vegedelight from './testyimages/veggie_delight.jpeg'
import Cheesy from './testyimages/cheesy_double_decker.jpeg'
import brocheeta from './testyimages/brocheeta.jpeg'
import spring from './testyimages/spring_rolls.jpeg'
import chickenwings from './testyimages/chicken_wings.jpeg'
import butterchicken from './testyimages/butter_chicken.jpeg'
import panner from './testyimages/paneer_tikka_masala.jpeg'
import vegbiryani from './testyimages/veg_biryani.jpeg'
import alfredo from './testyimages/spaghetti_alfredo.jpeg'
import chilli from './testyimages/chilli_garlic_noodles.jpeg'
import mac from './testyimages/mac_cheese.jpeg'
function Menu() {
  const  PastaNoodles=[
    {
      image:alfredo,
      name:'Spaghetti Alfredo',
      price:'9.00',
      description:'Creamy white sauce pasta topped with herbs and parmesan.',
      rating:4.5
    },
    {
      image:chilli,
      name:'Chilli Garlic Noodles',
      price:'7.78',
      description:'Spicy stir-fried noodles with veggies and garlic flavor.',
      rating:4.2
    }
    ,{
      image:mac,
      name:'Mac & Cheese',
      price:'6.35',
      description:'Classic macaroni in creamy cheese sauce, baked to perfection.',
      rating:3.8
    }
  ]
   const desserts = [
    {
      image: chacolatecake, // Replace with your food image URL
      name: 'Chocolate Lava Cake',
      price: '6.99',
      description: 'Warm chocolate cake with a gooey molten center, served with vanilla ice cream.',
      rating: 4.5
    },
    {
      image: tiramisu,
      name: 'Tiramisu',
      price: '7.49',
      description: 'Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cheese.',
      rating: 4.5
    },
    {
      image: fruit_tart,
      name: 'Fruit Tart',
      price: '5.99',
      description: 'Buttery tart shell filled with custard and topped with fresh seasonal fruits.',
      rating: 4.5
    }
  ];
  const Burgers=[
    { image:chickenburger,
      name:'Chicken Burger',
      price:'7.99',
      description:'Juicy grilled chicken patty with lettuce & mayo.',
      rating:3.5
    },
    {
      image :vegedelight,
      name:'Veggie Delight',
      price : '10.91',
      description :'Crispy patty with fresh veggies and cheese.',
      rating : 4.5
    },
    {
      image : Cheesy,
      name:'Cheesy Double Decker',
      price:'8.33',
      description:'	Two patties with loaded cheese and special sauce.',
      rating :4.0
    }
  ]

  const  Starters=[
    {
      image:brocheeta,
      name:'Bruschetta',
      price : '6.55',
      description:'Toasted bread topped with tomatoes, basil, and olive oil.',
      rating:4.5
    },
    {
      image:spring,
      name:'Spring Rolls',
      price :'7.25',
      description:'Crispy rolls filled with mixed veggies and served with sauce.',
      rating:3.5
    },
    {
      image:chickenwings,
      name:'Chicken Wings',
      price:'8.55',
      description:'Juicy wings tossed in spicy BBQ sauce.',
      rating:4.0
    }
  ]

  const MainCourse=[
    {
      image:butterchicken,
      name:'Butter Chicken',
      price:'9.00',
      description:'Creamy tomato-based curry with tender chicken pieces.',
      rating:4.2
    },
    {
      image:panner,
      name:'Paneer Tikka Masala',
      price:'7.90',
      description:'Grilled paneer in rich spicy gravy.',
      rating:3.5
    },
    {
      image:vegbiryani,
      name:'Veg Biryani',
      price:'5.50',
      description:'	Fragrant rice cooked with vegetables and Indian spices.',
      rating:4.5
    }
  ]
  // Simple star generator
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    return (
      <>
        {'★'.repeat(fullStars)}
        {halfStar && '☆'}
      </>
    );
  };
  return (
    <>
    <div>
         <section className="container py-5">
      <h2 className="text-center mb-4">
        <span className="text-primary fw-bold fs-4">Menu</span><br />
        <span className="fw-bold fs-2">Discover Our Flavorful Symphony!</span>
      </h2>

      <h4 className="mb-4">Desserts</h4>

      <div className="row">
        {desserts.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-sm rounded-4 position-relative h-100">
              <div className="price-badge position-absolute top-0 end-0 bg-primary text-white px-3 py-1 rounded-bottom-start fw-semibold">
                ${item.price}
              </div>
              <img
                src={item.image}
                className="card-img-top rounded-circle p-4"
                alt={item.name}
                style={{ width: '200px', height: '200px', objectFit: 'cover', margin: 'auto' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{item.name}</h5>
                <div className="text-warning mb-2" style={{ fontSize: '18px' }}>
                  {renderStars(item.rating)}
                </div>
                <p className="card-text text-muted">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
    </div>

    <h4 className="mb-4">Burgers</h4>

      <div className="row">
        {Burgers.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-sm rounded-4 position-relative h-100">
              <div className="price-badge position-absolute top-0 end-0 bg-primary text-white px-3 py-1 rounded-bottom-start fw-semibold">
                ${item.price}
              </div>
              <img
                src={item.image}
                className="card-img-top rounded-circle p-4"
                alt={item.name}
                style={{ width: '200px', height: '200px', objectFit: 'cover', margin: 'auto' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{item.name}</h5>
                <div className="text-warning mb-2" style={{ fontSize: '18px' }}>
                  {renderStars(item.rating)}
                </div>
                <p className="card-text text-muted">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h4 className="mb-4">Starters</h4>

      <div className="row">
        {Starters.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-sm rounded-4 position-relative h-100">
              <div className="price-badge position-absolute top-0 end-0 bg-primary text-white px-3 py-1 rounded-bottom-start fw-semibold">
                ${item.price}
              </div>
              <img
                src={item.image}
                className="card-img-top rounded-circle p-4"
                alt={item.name}
                style={{ width: '200px', height: '200px', objectFit: 'cover', margin: 'auto' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{item.name}</h5>
                <div className="text-warning mb-2" style={{ fontSize: '18px' }}>
                  {renderStars(item.rating)}
                </div>
                <p className="card-text text-muted">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h4 className="mb-4">MainCourse</h4>

      <div className="row">
        {MainCourse.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-sm rounded-4 position-relative h-100">
              <div className="price-badge position-absolute top-0 end-0 bg-primary text-white px-3 py-1 rounded-bottom-start fw-semibold">
                ${item.price}
              </div>
              <img
                src={item.image}
                className="card-img-top rounded-circle p-4"
                alt={item.name}
                style={{ width: '200px', height: '200px', objectFit: 'cover', margin: 'auto' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{item.name}</h5>
                <div className="text-warning mb-2" style={{ fontSize: '18px' }}>
                  {renderStars(item.rating)}
                </div>
                <p className="card-text text-muted">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h4 className="mb-4">PastaNoodles</h4>

      <div className="row">
        {PastaNoodles.map((item, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card shadow-sm rounded-4 position-relative h-100">
              <div className="price-badge position-absolute top-0 end-0 bg-primary text-white px-3 py-1 rounded-bottom-start fw-semibold">
                ${item.price}
              </div>
              <img
                src={item.image}
                className="card-img-top rounded-circle p-4"
                alt={item.name}
                style={{ width: '200px', height: '200px', objectFit: 'cover', margin: 'auto' }}
              />
              <div className="card-body text-center">
                <h5 className="card-title fw-bold">{item.name}</h5>
                <div className="text-warning mb-2" style={{ fontSize: '18px' }}>
                  {renderStars(item.rating)}
                </div>
                <p className="card-text text-muted">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>

    
  )
}

export default Menu