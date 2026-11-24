import React, { useState } from "react";
import { motion } from "framer-motion";
import logo from "./assets/logo.png"
import heroImage from "./assets/Front Pic.jpeg";
import {
  Menu as MenuIcon,
  X,
  ArrowUpRight,
  MapPin,
  Phone,
  Clock,
  
  
} from "lucide-react";

const reveal = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8 }
  }
};

const menuItems = [
  {
    name: "Golden Truffle Pasta",
    category: "SIGNATURE DISH",
    foodType: "VEG",
    isVeg: true,
    price: "₹24",
    description:
      "Creamy handmade pasta with black truffle, parmesan and fresh herbs.",
    image:
      "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=900"
  },
  {
    name: "Royal Grilled Steak",
    category: "CHEF SPECIAL",
    foodType: "NON-VEG",
    isVeg: false,
    price: "₹32",
    description:
      "Premium grilled steak served with roasted vegetables and signature sauce.",
    image:
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=900"
  },
  {
    name: "Golden Seafood",
    category: "FRESH SELECTION",
    foodType: "NON-VEG",
    isVeg: false,
    price: "₹28",
   
    description:
      "Fresh seafood prepared with aromatic spices and seasonal ingredients.",
    image:
      "https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=900"
  },
  {
    name: "Chocolate Indulgence",
    category: "DESSERT",
    foodType: "VEG",
    isVeg: true,
    price: "₹16",
    description:
      "Rich chocolate dessert with vanilla cream and fresh berries.",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=900"
  }
];

const events = [
  {
    date: "28 NOV",
    title: "Golden Friday Night",
    description:
      "An elegant evening of fine dining, live music and signature cocktails.",
    image:
      "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=900"
  },
  {
    date: "05 DEC",
    title: "Chef's Special Dinner",
    description:
      "Experience an exclusive five-course dining experience.",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900"
  },
  {
    date: "12 DEC",
    title: "The Luxury Weekend",
    description:
      "Celebrate the weekend with exceptional food and atmosphere.",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=900"
  }
];
function App() {
  const [open, setOpen] = useState(false);

const links = ["Home", "About", "Menu", "Events", "Contact"];
const [showAll, setShowAll] = useState(false);

const [showVegOnly, setShowVegOnly] = useState(false);

const displayedItems = showVegOnly
  ? menuItems.filter((item) => item.isVeg)
  : menuItems;

  return (
    <div className="min-h-screen bg-slate-50">

      {/* Navbar */}
   
      <nav className="fixed top-0 z-50 w-full bg-[#151515]/95 backdrop-blur-md border-b border-yellow-500/20">
    <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">

      {/* Logo */}
  
<a
  href="#home"
  onClick={() => setOpen(false)}
  className="flex items-center gap-2"
>
  <img
    src={logo}
    alt="Zayika Restaurant Logo"
    className="h-14 w-auto object-contain"
  />
  <span className="text-yellow-400 text-2xl font-serif tracking-widest font-bold ">
    ZAYIKA<span className="text-white">.</span>
  </span>
</a>
      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-9 items-center">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className="text-white/80 hover:text-yellow-400 transition uppercase text-xs tracking-widest"
          >
            {link}
          </a>
        ))}

        <a
          href="#contact"
          className="bg-yellow-400 text-black px-6 py-3 text-xs font-bold tracking-widest hover:bg-white transition"
        >
          RESERVE NOW
        </a>
      </div>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setOpen(!open)}
        className="md:hidden text-yellow-400"
        aria-label="Toggle navigation"
        aria-expanded={open}
      >
        {open ? <X size={26} /> : <MenuIcon size={26} />}
      </button>
    </div>

    {/* Mobile Navigation */}
    {open && (
      <div className="md:hidden bg-[#151515] px-6 pb-6 flex flex-col gap-5">
        {links.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            onClick={() => setOpen(false)}
            className="text-white uppercase tracking-widest text-sm hover:text-yellow-400"
          >
            {link}
          </a>
        ))}
      </div>
    )}
     </nav>

      {/* Hero Section */}
   
<section
  id="home"
  className="min-h-screen relative flex items-center bg-cover bg-center"
  style={{
    backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.9), rgba(0,0,0,0.3)), url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1800')`
  }}
>
  <div className="max-w-7xl mx-auto px-6 w-full pt-24">

    <motion.div
      initial={{ opacity: 0, x: -80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1 }}
      className="max-w-3xl"
    >

      <p className="text-yellow-400 tracking-[.4em] text-sm mb-6">
        AN EXPERIENCE BEYOND DINING
      </p>

      <h1 className="text-6xl md:text-8xl text-white font-serif leading-tight">
        Taste the
        <span className="block text-yellow-400 italic">
          Extraordinary.
        </span>
      </h1>

      <p className="text-gray-300 mt-8 max-w-lg leading-8">
        Discover a world of exceptional flavours,
        crafted with passion and served with elegance.
      </p>

      <div className="flex flex-wrap gap-5 mt-10">

        {/* Explore Menu Button */}
        <a
          href="#menu"
          className="bg-yellow-400 text-black px-8 py-4 font-bold hover:bg-white transition duration-300"
        >
          EXPLORE MENU
          <ArrowUpRight
            className="inline ml-2"
            size={17}
          />
        </a>

        {/* Our Story Button */}
        <a
          href="#about"
          className="border border-white text-white px-8 py-4 hover:bg-white hover:text-black transition duration-300"
        >
          OUR STORY
        </a>

      </div>

    </motion.div>
  </div>

  {/* Scroll Indicator */}
  <div className="absolute bottom-8 right-10 text-yellow-400 tracking-widest text-xs hidden md:block">
    SCROLL TO DISCOVER ↓
  </div>

</section>


      {/* About Section */}
  
{/* About Section */}

<section
  id="about"
  className="bg-[#111111] text-white py-24 px-6 overflow-hidden"
>
  <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

    {/* LEFT SIDE - RESTAURANT STORY */}

    <motion.div
      initial={{ opacity: 0, x: -80 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
    >

      <p className="text-[#D4AF37] tracking-[.35em] text-sm font-semibold mb-5">
        WELCOME TO ZAYIKA
      </p>

      <h2 className="text-4xl md:text-6xl font-serif text-white leading-tight">
        Where Every Flavour
        <span className="block text-[#D4AF37] italic">
          Tells a Story.
        </span>
      </h2>

      <p className="text-gray-300 mt-8 leading-8">
        Welcome to Zayika Multicuisine Restaurant, where
        good food brings people together and every meal
        becomes a beautiful memory. Our passion for food,
        commitment to quality and warm hospitality create
        a dining experience worth remembering.
      </p>

      <p className="text-gray-300 mt-5 leading-8">
        The word Zayika represents taste, and that is
        exactly what we promise – delicious food,
        memorable experiences and a wonderful variety
        of flavours, all under one roof.
      </p>

      <div className="mt-9">
        <a
          href="#menu"
          className="inline-flex items-center bg-[#D4AF37] text-black px-9 py-4 tracking-widest text-sm font-bold hover:bg-[#F5D98A] transition duration-300"
        >
          EXPLORE OUR MENU
          <ArrowUpRight className="ml-3" size={18} />
        </a>
      </div>

      {/* HIGHLIGHTS */}

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12 border-t border-[#3A3020] pt-7">

        <div>
          <h3 className="text-3xl font-serif text-[#D4AF37]">
            06+
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            Food Categories
          </p>
        </div>

        <div>
          <h3 className="text-xl font-serif text-[#D4AF37]">
            Veg & Non-Veg
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            Something for Everyone
          </p>
        </div>

        <div>
          <h3 className="text-xl font-serif text-[#D4AF37]">
            All in One
          </h3>
          <p className="text-gray-400 text-sm mt-2">
            Dining Destination
          </p>
        </div>

      </div>

    </motion.div>


    {/* RIGHT SIDE - RESTAURANT IMAGE */}

    <motion.div
      initial={{ opacity: 0, x: 80, scale: 0.95 }}
      whileInView={{ opacity: 1, x: 0, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative"
    >

      <motion.img
        src={heroImage}
        alt="Zayika Multicuisine Restaurant dining experience"
        className="w-full h-[450px] md:h-[600px] object-cover shadow-2xl"
        whileHover={{ scale: 1.03 }}
        transition={{ duration: 0.5 }}
      />

      {/* GOLD DECORATIVE FRAME */}

      <div className="absolute -bottom-5 -left-5 w-40 h-40 border-l-4 border-b-4 border-[#D4AF37] -z-10">
      </div>

      {/* IMAGE BADGE */}

      <div className="absolute bottom-6 right-6 bg-[#111111]/95 border border-[#D4AF37]/50 text-white p-6 shadow-xl">
        <p className="text-[#D4AF37] font-serif text-2xl italic">
          ZAYIKA
        </p>
        <p className="text-gray-300 text-xs tracking-widest mt-2">
          COME HUNGRY. LEAVE HAPPY.
        </p>
      </div>

    </motion.div>

  </div>


  {/* CUISINE SHOWCASE */}

  <div className="max-w-7xl mx-auto mt-28">

    <div className="text-center mb-14">

      <p className="text-[#D4AF37] tracking-[.35em] text-sm font-semibold mb-4">
        EXPLORE OUR WORLD OF FLAVOURS
      </p>

      <h2 className="text-3xl md:text-5xl font-serif text-white">
        A Delicious Journey Across
        <span className="block text-[#D4AF37] italic mt-2">
          Multiple Cuisines
        </span>
      </h2>

      <p className="text-gray-400 mt-5 max-w-2xl mx-auto leading-7">
        From traditional Indian favourites to exciting
        international flavours, discover something
        delicious for every mood and every appetite.
      </p>

    </div>


    {/* CUISINE CARDS */}

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

      {[
        {
          icon: "🍛",
          title: "North Indian Cuisine",
          desc: "Authentic curries, aromatic biryanis, delicious gravies, Indian breads and traditional specialities."
        },
        {
          icon: "🥢",
          title: "Chinese Cuisine",
          desc: "Delicious noodles, fried rice, tempting starters and flavourful Chinese preparations."
        },
        {
          icon: "🔥",
          title: "Tandoor Specialities",
          desc: "Smoky aromas, rich marinades and perfectly grilled tandoori delicacies."
        },
        {
          icon: "🥐",
          title: "Bakery & Fresh Bakes",
          desc: "Freshly baked treats, sweet indulgences and delicious baked snacks."
        },
        {
          icon: "🍟",
          title: "Snacks & Quick Bites",
          desc: "Tempting snacks for evening cravings, casual outings and friendly conversations."
        },
        {
          icon: "🍳",
          title: "Breakfast",
          desc: "Start your day with a satisfying breakfast and delicious morning favourites."
        }
      ].map((item, index) => (

        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          viewport={{ once: true }}
          className="bg-[#1C1C1C] p-8 shadow-xl border border-[#3A3020] hover:border-[#D4AF37] hover:shadow-[0_10px_40px_rgba(212,175,55,0.12)] transition duration-500 group"
        >

          <div className="text-4xl mb-5">
            {item.icon}
          </div>

          <h3 className="text-xl font-serif text-white mb-4 group-hover:text-[#D4AF37] transition">
            {item.title}
          </h3>

          <p className="text-gray-400 leading-7 text-sm">
            {item.desc}
          </p>

          <div className="w-12 h-[2px] bg-[#D4AF37] mt-6 group-hover:w-20 transition-all duration-500">
          </div>

        </motion.div>

      ))}

    </div>

  </div>


  {/* VEG & NON-VEG SECTION */}

  <div className="max-w-7xl mx-auto mt-24 grid md:grid-cols-2 gap-10 items-center">

    <div>
      <p className="text-[#D4AF37] tracking-[.35em] text-sm font-semibold mb-4">
        SOMETHING FOR EVERYONE
      </p>

      <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
        A Taste for Every
        <span className="block text-[#D4AF37] italic">
          Appetite.
        </span>
      </h2>
    </div>

    <p className="text-gray-300 leading-8">
      Whether you enjoy flavourful vegetarian preparations
      or delicious chicken, mutton and other non-vegetarian
      specialities, Zayika brings variety and choice to your
      table. Our diverse menu makes dining enjoyable for
      families and groups with different tastes.
    </p>

  </div>


  {/* QUALITY & HOSPITALITY */}

  <div className="max-w-5xl mx-auto mt-28 text-center border-t border-[#3A3020] pt-20">

    <p className="text-[#D4AF37] tracking-[.35em] text-sm font-semibold mb-5">
      OUR PROMISE
    </p>

    <h2 className="text-3xl md:text-5xl font-serif text-white leading-tight">
      Great Food. Genuine Hospitality.
      <span className="block text-[#D4AF37] italic mt-3">
        Unforgettable Moments.
      </span>
    </h2>

    <p className="text-gray-400 leading-8 mt-8 max-w-3xl mx-auto">
      At Zayika, we focus on carefully selected ingredients,
      maintaining food quality and preparing every dish
      with attention to taste and presentation. We believe
      that great food creates memories that last.
      From everyday dining to special celebrations,
      we welcome you to enjoy good food and good company.
    </p>

    <p className="text-[#D4AF37] font-serif text-2xl italic tracking-wide mt-10">
      Come Hungry. Leave Happy. Come Back for More!
    </p>

    <p className="text-white font-semibold tracking-[.3em] text-sm mt-5">
      ZAYIKA MULTICUISINE RESTAURANT
    </p>

    <div className="w-24 h-[2px] bg-[#D4AF37] mx-auto mt-8">
    </div>

  </div>

</section>



      {/* menu Section */}
     <section id="menu" className="bg-[#151515] py-28 px-6">
          <div className="max-w-7xl mx-auto">
    
            <motion.div
              variants={reveal}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <p className="text-yellow-400 tracking-[.3em] text-sm">
                TASTE THE DIFFERENCE
              </p>
    
              <h2 className="text-5xl md:text-6xl font-serif text-white mt-5">
                Our Signature <span className="text-yellow-400 italic">Menu</span>
              </h2>
    
              <p className="text-gray-400 mt-5">
                Carefully curated dishes for unforgettable moments.
              </p>
            </motion.div>
    
{/* VEG FILTER */}

<div className="flex justify-center md:justify-end mb-10">

  <label className="flex items-center gap-3 cursor-pointer bg-[#1C1C1C] border border-[#D4AF37]/40 px-6 py-4 rounded-sm hover:border-[#D4AF37] transition">

    <input
      type="checkbox"
      checked={showVegOnly}
      onChange={(e) => setShowVegOnly(e.target.checked)}
      className="w-5 h-5 accent-green-500 cursor-pointer"
    />

    <span className="text-white text-sm tracking-widest">
      SHOW VEG ONLY
    </span>

    <span className="w-3 h-3 rounded-full bg-green-500"></span>

  </label>

</div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-7">
              {displayedItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  whileHover={{ y: -12 }}
                  className="group bg-[#222] overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="h-64 w-full object-cover group-hover:scale-110 transition duration-700"
                    />
    
                    <span className="absolute top-4 right-4 bg-yellow-400 text-black px-4 py-2 font-bold">
                      {item.price}
                    </span>
                  </div>
    
                  <div className="p-6">
                    <p className="text-yellow-400 text-xs tracking-widest">
                      {item.category}
                    </p>
    
                    <h3 className="text-white text-xl font-serif mt-3">
                      {item.name}
                    </h3>
    
                    <p className="text-gray-400 text-sm leading-6 pt-4">
                      {item.description}
                    </p>
    
                    <div className="mt-6 text-yellow-400 flex justify-between items-center border-t border-gray-700 pt-4">
                      <span className="text-xs tracking-widest">DISCOVER</span>
                      <ArrowUpRight size={18} />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
    
            {/* <div className="text-center mt-14">
              <button
                onClick={() => setShowAll(!showAll)}
                className="border border-yellow-400 text-yellow-400 px-10 py-4 hover:bg-yellow-400 hover:text-black transition tracking-widest text-sm"
              >
                {showAll ? "SHOW LESS" : "VIEW FULL MENU"}
              </button>
            </div> */}
          </div>
        </section>

      {/* upcoming Events Section */}
    <section id="events" className="bg-[#F5C542] py-28 px-6">
          <div className="max-w-7xl mx-auto">
    
            <div className="flex flex-wrap justify-between items-end gap-6 mb-14">
              <div>
                <p className="text-black/70 tracking-[.3em] text-sm font-bold">
                  WHAT'S HAPPENING
                </p>
    
                <h2 className="text-5xl md:text-6xl font-serif mt-4">
                  Upcoming Events
                </h2>
              </div>
    
              <p className="max-w-sm text-black/70 leading-7">
                Join us for extraordinary evenings, unforgettable
                flavours and beautiful memories.
              </p>
            </div>
    
            <div className="grid md:grid-cols-3 gap-8">
              {events.map((event, index) => (
                <motion.div
                  key={event.title}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-[#151515] text-white group overflow-hidden"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      loading="lazy"
                      className="h-64 w-full object-cover group-hover:scale-110 transition duration-700"
                    />
    
                    <div className="absolute top-5 left-5 bg-yellow-400 text-black p-4 text-center font-bold">
                      {event.date}
                    </div>
                  </div>
    
                  <div className="p-7">
                    <h3 className="font-serif text-2xl text-yellow-400">
                      {event.title}
                    </h3>
    
                    <p className="text-gray-400 mt-4 leading-7">
                      {event.description}
                    </p>
    
                    <a
                      href="#contact"
                      className="inline-block mt-7 text-sm tracking-widest border-b border-yellow-400 pb-2"
                    >
                      RESERVE YOUR PLACE →
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      {/* Footer */}
  <footer id="contact" className="bg-[#111] text-white pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">

        <div>
          <h2 className="text-yellow-400 text-3xl font-serif font-bold">
            ZAYIKA .
          </h2>

          <p className="text-gray-400 mt-5 leading-7">
            Exceptional flavours. Beautiful moments.
            A dining experience beyond expectations.
          </p>
        </div>

        <div>
          <h3 className="text-yellow-400 tracking-widest mb-6">
            QUICK LINKS
          </h3>

          {["Home", "About", "Menu", "Events"].map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-gray-400 mb-4 hover:text-yellow-400 transition"
            >
              {link}
            </a>
          ))}
        </div>

        <div>
          <h3 className="text-yellow-400 tracking-widest mb-6">
            CONTACT
          </h3>

          <p className="text-gray-400 mb-4">
            <MapPin className="inline mr-2 text-yellow-400" />
            Your Restaurant Address
          </p>

          <p className="text-gray-400 mb-4">
            <Phone className="inline mr-2 text-yellow-400" />
            +91 98765 43210
          </p>

          <p className="text-gray-400">
            <Clock className="inline mr-2 text-yellow-400" />
            12 PM – 11 PM
          </p>
        </div>

        <div>
          <h3 className="text-yellow-400 tracking-widest mb-6">
            FOLLOW US
          </h3>

          <div className="flex gap-5">
            {/* <a href="https://instagram.com" aria-label="Instagram">
              <Instagram className="hover:text-yellow-400 transition" />
            </a>

            <a href="https://facebook.com" aria-label="Facebook">
              <Facebook className="hover:text-yellow-400 transition" />
            </a> */}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto border-t border-gray-800 mt-16 pt-8 text-center text-gray-500 text-sm">
        © 2026  ZAYIKA. ALL RIGHTS RESERVED.
      </div>
    </footer>

    </div>
  )
}

export default App
