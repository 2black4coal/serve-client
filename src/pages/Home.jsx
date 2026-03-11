import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import "./home.css";

export default function Home() {
  useEffect(() => {
    const audio = new Audio("/sounds/o.mp3");
    audio.loop = true;
    audio.volume = 0.25;
    audio.muted = true;
    audio.play().then(() => {
      setTimeout(() => {
        audio.muted = false;
      }, 500);
    }).catch(() => {});
    return () => audio.pause();
  }, []);

  const featuredImages = [
    "/images/featuredDishes/dish1.jpg",
    "/images/featuredDishes/dish2.jpg",
    "/images/featuredDishes/dish3.jpg"
  ];

  const waterSectionImages = [
    "/images/waterSection/chef1.jpg",           // first fixed
    "/images/waterSection/outdoorEvent.jpg",    // middle slider
    "/images/waterSection/pot.png"             // third fixed
  ];

  // Additional slides for the middle image
  const middleSlides = [
    "/images/waterSection/outdoorEvent.jpg",
    "/images/waterSection/outdoorEvent2.jpg",
    "/images/waterSection/outdoorEvent3.jpg",
 "/images/waterSection/outdoorEvent4.jpg",
    "/images/waterSection/outdoorEvent5.jpg",
    "/images/waterSection/outdoorEvent6.jpg",
    "/images/waterSection/outdoorEvent7.jpg",
    "/images/waterSection/outdoorEvent8.jpg",
    "/images/waterSection/outdoorEvent9.jpg",
    "/images/waterSection/outdoorEvent10.jpg",
    "/images/waterSection/outdoorEvent11.jpg",


    "/images/waterSection/outdoorEvent12.jpg",
  
    "/images/waterSection/outdoorEvent13.jpg",





       


  ]

  const services = [
    {
      title: "Catering Events",
      description: "We bring gourmet experiences to any event, big or small.",
      image: "/images/foodService1.jpg",
    },
    {
      title: "Private Chef Experience",
      description: "Hire a professional chef to create a personalized culinary journey.",
      image: "/images/foodService2.jpg",
    },
    {
      title: "Outdoor / Adventure Events",
      description: "From picnics to wilderness events, we serve delicious meals anywhere.",
      image: "/images/outdoorCatering.jpg",
    },
    {
      title: "Van / Mobile Setup",
      description: "Our fully equipped culinary vans bring the kitchen to you.",
      image: "/images/vanSetup.jpg",
    },
    {
      title: "Desserts & Specialty Tables",
      description: "Beautifully crafted desserts and elegant setups for your guests.",
      image: "/images/privateEvent.jpg",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % middleSlides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="homepage bright-theme">

      {/* FLOATING HOME BUTTON */}
      <Link to="/menushowcase" className="menu-home-btn">🌿</Link>

      {/* HERO */}
      <section className="hero">
        <div className="hero-overlay">
          <motion.h1
            className="hero-animated-text"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 2 }}
          >
            ...SERVE – Culinary Magic in the Wild
            <motion.span
              className="star-icon"
              animate={{ scale: [1,1.2,1], opacity: [0.8,1,0.8] }}
              transition={{ duration: 1.8, repeat: Infinity }}
            >★</motion.span>
          </motion.h1>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="home-section categories">
        <h3 className="categories-subheading">Explore Our Services</h3>
        <div className="category-columns">
          {[{title:"Menu", desc:"Breakfast, lunch, dinner, desserts & more", icon:"🍽️"},
            {title:"Services", desc:"Catering, private chef, corporate & outdoor events", icon:"🧑‍🍳"},
            {title:"Experience", desc:"Cooking classes, demos, team building & special occasions", icon:"🎉"},
          ].map((cat, i) => (
            <motion.div 
              key={i} 
              className="category-card"
              initial={{opacity:0, y:40}}
              whileInView={{opacity:1, y:0}}
              viewport={{once:true}}
              transition={{duration:0.8, delay:i*0.2}}
              whileHover={{ scale:1.03, y:-4 }}
            >
              <div className="category-icon">{cat.icon}</div>
              <h4>{cat.title}</h4>
              <p>{cat.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* SCROLL-SYNCHRONIZED SERVICES */}
      <section className="home-section scroll-services">
        <h2 className="services-subheading">Discover Our Culinary Services</h2>   
        <div className="scroll-services-container">
          {services.map((s,i) => (
            <motion.div
              key={i}
              className={`scroll-service-card ${i%2===0?'left-image':'right-image'}`}
              initial={{ opacity: 0, y: 120, scale: 0.85 }}
              whileInView={{ opacity: 1, y:0, scale:1 }}
              viewport={{ once:true, amount:0.3 }}
              transition={{ duration: 1 }}
            >
              <div className="scroll-service-image">
                <img src={s.image} alt={s.title} />
              </div>
              <div className="scroll-service-text">
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="home-section featured-columns">
        <h3 className="fp-title">Featured Dishes & Experiences</h3> 
        <div className="fp-columns">
          {featuredImages.map((src,i) => (
            <div className="fp-col" key={i}>
              <img src={src} alt={`featured-${i}`} />
            </div>
          ))}
        </div>
      </section>

      {/* WATER BACKGROUND CINEMATIC SECTION */}
      <section className="home-section water-background">
        <h3 className="water-section-heading">
          Chef’s Moments & Culinary Scenes
        </h3>
        <div className="water-section-grid">

          {/* First fixed image */}
          <motion.div
            className="water-section-image"
            initial={{ opacity: 0, y: 120, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          >
            <motion.img
              src={waterSectionImages[0]}
              alt="water-0"
              animate={{ y: [0, -20, 0], rotate: [0,1,-1,0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Middle sliding section */}
          <motion.div
            className="water-section-image middle-slider"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
            style={{ overflow: "hidden", position: "relative" }}
          >
            {middleSlides.map((src, i) => (
              <motion.img
                key={i}
                src={src}
                alt={`middle-slide-${i}`}
                initial={{ x: "100%" }}
                animate={{ x: i === currentSlide ? 0 : "-100%" }}
                transition={{ duration: 1, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  objectFit: "cover"
                }}
              />
            ))}
          </motion.div>

          {/* Third fixed image */}
          <motion.div
            className="water-section-image"
            initial={{ opacity: 0, y: 120, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          >
            <motion.img
              src={waterSectionImages[2]}
              alt="water-2"
              animate={{ y: [0, -20, 0], rotate: [0,1,-1,0] }}
              transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-center">
          <h4>SERVE Culinary Services</h4>
          <p className="footer-tagline">
            Professional chefs • Catering • Private culinary experiences
          </p>
          <p className="footer-contact">+1 240 796 5186</p>
          <p className="footer-wrapup">© 2026 SERVE. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}