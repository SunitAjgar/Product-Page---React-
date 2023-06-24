import React from 'react'

 const HeroSection = () => {
  return (
    <main className="hero container">
    <div className="hero-content">
      <h1>YOUR FEET DESERVE THE BEST</h1>
      <p>
      Go faster, go stronger, never stop. Bring power to your steps.
      Craft your own footprints.
      </p>

      <div className="hero-btn">
        <button>Shop Now </button>
        <button className="secondary-btn">Category</button>
      </div>

      <div className="shopping">
        <p>Also Available On</p>

        <div className="brand-icons">
          <img src="/images/amazon.png" alt="amazon-logo" />
          <img src="/images/flipkart.png" alt="flipkart-logo" />
        </div>
      </div>
    </div>
    <div className="hero-image">
      <img src="/images/hero-image.png" alt="hero-image" />
    </div>
  </main>

  );
};

export default HeroSection;
