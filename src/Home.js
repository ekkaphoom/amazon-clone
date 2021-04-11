
import React from 'react'
import './Home.css';
import Product from './Product';

const Home = props => {
  return (
    <div className="home">
      <div className="home__container" >
        <img src="/background.jpg" className="home__image" alt='' />
      </div>
      <div className="home__row">
        <Product
          id="1"
          title="The Lean Startup: How Today's Entrepreneurs Use Continuous Innovation to Create Radically Successful Businesses"
          price={29.99}
          image={'/images/lean_startup.jpg'}
          rating={5}
        />

        <Product
          id="2"
          title="Stasher Platinum Silicone Food Grade Reusable Storage Bag, Aqua (1/2 Gallon) | Reduce Single-Use Plastic | Cook, Store, Sous Vide, or Freeze | Leakproof, Dishwasher-Safe, Eco-friendly, Non-Toxic"
          price={15.99}
          image={'/images/Stasher.jpg'}
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id="3"
          title="iDesign Clarity BPA-Free Plastic Divided Makeup Palette Organizer"
          price={17.44}
          image={'/images/iDesign.jpg'}
          rating={5}
        />
        <Product
          id="4"
          title="The Home Edit Workbook: Prompts, Activities, and Gold Stars to Help You Contain the Chaos Paperback"
          price={11.87}
          image={'/images/The-Home.jpg'}
          rating={4}
        />
        <Product
          id="5"
          title="TCL 50-inch Class 4-Series 4K UHD Smart Roku LED TV - 50S435, 2021 Model"
          price={269.99}
          image={'/images/TCL.jpg'}
          rating={4}
        />
      </div>
      <div className="home__row">
        <Product
          id="6"
          title="Apple AirPods with Charging Case (Wired)"
          price={199.99}
          image={'/images/Apple.jpg'}
          rating={3}
        />
        <Product
          id="7"
          title="Nintendo Switch with Neon Blue and Neon Red Joy‑Con - HAC-001(-01)"
          price={299.99}
          image={'/images/Nintendo.jpg'}
          rating={4}
        />
      </div>
    </div>
  )
}

Home.propTypes = {

}

export default Home
