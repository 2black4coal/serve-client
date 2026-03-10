import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./menuShowcase.css";
import { Link } from "react-router-dom";

export default function MenuShowcase() {
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
    

const foods = [
{
image: "/images/menu/dish1.jpg",
title: "Flame-Grilled Canyon Steak",
desc: "Tender premium steak grilled over open flame and served with seasonal vegetables.",
},
{
image: "/images/menu/dish2.jpg",
title: "Garden Harvest Bowl",
desc: "Fresh farm vegetables tossed with citrus dressing and artisan grains.",
},
{
image: "/images/menu/dish3.jpg",
title: "Golden Desert Chicken",
desc: "Slow roasted chicken infused with herbs and finished with a golden glaze.",
},
{
image: "/images/menu/dish4.jpg",
title: "Wildfire Shrimp Plate",
desc: "Charred shrimp with smoky spices served with roasted peppers.",
},
{
image: "/images/menu/dish5.jpg",
title: "Sunset Dessert Platter",
desc: "A colorful mix of pastries, fruits and sweet artisan desserts.",
},
];

return (

<div className="menu-page">

<header className="menu-header">
<motion.h1
className="menu-title"
animate={{ scale:[1,1.04,1] }}
transition={{ duration:6, repeat:Infinity, ease:"easeInOut" }}
>
Our Culinary Creations
</motion.h1>

<p>Crafted by chefs. Inspired by nature. Served with passion.</p>
</header>

{/* FLOATING HOME BUTTON */}
<Link to="/" className="menu-home-btn">
  🌿🌿
</Link>

{foods.map((food,i)=>{

const reverse = i % 2 === 1;

return (

<section
className={`food-section ${reverse ? "reverse":""}`}
key={i}
>

<motion.div
className="food-image"
initial={{opacity:0, y:80}}
whileInView={{opacity:1, y:0}}
viewport={{once:true}}
transition={{duration:1}}
>

<motion.img
src={food.image}
alt={food.title}
animate={{y:[0,-12,0]}}
transition={{duration:7, repeat:Infinity, ease:"easeInOut"}}
/>

</motion.div>

<motion.div
className="food-text"
initial={{opacity:0, x:60}}
whileInView={{opacity:1, x:0}}
viewport={{once:true}}
transition={{duration:1}}
>

<h2>{food.title}</h2>
<p>{food.desc}</p>

</motion.div>

</section>

)

})}

{/* BREATHING FOOTER */}

<footer className="menu-footer">

  <motion.div
    className="menu-footer-text"
    animate={{ scale:[1,1.06,1] }}
    transition={{ duration:4, repeat:Infinity, ease:"easeInOut" }}
  >
    <p>Let’s serve you</p>

    <p className="menu-footer-phone">
      +1 240 796 5186
    </p>
  </motion.div>

</footer>

</div>

)

}