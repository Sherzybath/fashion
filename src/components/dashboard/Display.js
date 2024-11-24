import Nav from "./Nav";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import DragDisplay from "./DragDisplay";
import Store from "./Store";
const filterSamples = [
  {
    id: 1,
    name: "Men's Summer T-Shirt",
    gender: "men",
    availability: "in-stock",
    sizes: ["S", "M", "L"],
    collection: "summer",
    clothing: "t-shirts",
    price: 40,
    display: "/images/menCollection/dailyImg1.jpg",
    vendor: "Fashion Hub",
    description: "A comfortable and stylish summer T-shirt made from breathable cotton, perfect for warm weather.",
    count: 50,
  },
  {
    id: 2,
    name: "Women's Spring Dress",
    gender: "women",
    availability: "out-of-stock",
    sizes: ["S", "M"],
    collection: "spring",
    clothing: "dresses",
    price: 80,
    display: "/images/menCollection/dailyImg2.jpg",
    vendor: "Elegant Apparel",
    description: "A beautiful floral spring dress, featuring lightweight fabric and a flattering fit for casual outings.",
    count: 0,
  },
  {
    id: 3,
    name: "Unisex Fall Hoodie",
    gender: "unisex",
    availability: "in-stock",
    sizes: ["M", "L", "XL"],
    collection: "fall",
    clothing: "hoodies",
    price: 150,
    display: "/images/menCollection/dailyMen.jpg",
    vendor: "Cozy Wear",
    description: "A cozy, oversized hoodie with a soft fleece lining, perfect for chilly fall evenings.",
    count: 30,
  },
  {
    id: 4,
    name: "Men's Winter Jacket",
    gender: "men",
    availability: "in-stock",
    sizes: ["M", "L", "XL"],
    collection: "winter",
    clothing: "jackets",
    price: 220,
    display: "/images/Femalecollection/Daily5.jpg",
    vendor: "Winter Wonders",
    description: "A durable winter jacket with a water-resistant exterior and warm insulation for extreme cold.",
    count: 25,
  },
  {
    id: 5,
    name: "Men's Winter Jacket (Alternate)",
    gender: "men",
    availability: "in-stock",
    sizes: ["L", "XL"],
    collection: "winter",
    clothing: "jackets",
    price: 220,
    display: "/images/Femalecollection/Daily2.jpg",
    vendor: "Winter Wonders",
    description: "An alternate style of the men's winter jacket with a sleek design and added hood for extra protection.",
    count: 15,
  },
  {
    id: 6,
    name: "Women's Summer Skirt",
    gender: "women",
    availability: "in-stock",
    sizes: ["S", "M", "L"],
    collection: "summer",
    clothing: "skirts",
    price: 70,
    display: "/images/Femalecollection/Daily1.jpg",
    vendor: "Sunny Styles",
    description: "A lightweight, flowy summer skirt with vibrant patterns, ideal for beach days and casual wear.",
    count: 40,
  },
  {
    id: 7,
    name: "Women's Fall Sweater",
    gender: "women",
    availability: "out-of-stock",
    sizes: ["M", "L"],
    collection: "fall",
    clothing: "sweaters",
    price: 130,
    display: "/images/Femalecollection/Daily4.jpg",
    vendor: "Autumn Essentials",
    description: "A cozy knitted sweater with a relaxed fit, perfect for layering during the fall season.",
    count: 0,
  },
  {
    id: 8,
    name: "Women's Winter Coat",
    gender: "women",
    availability: "in-stock",
    sizes: ["S", "M"],
    collection: "winter",
    clothing: "coats",
    price: 250,
    display: "/images/Femalecollection/Daily6.jpg",
    vendor: "Winter Wonders",
    description: "A premium winter coat designed for warmth and style, featuring a faux fur collar and deep pockets.",
    count: 20,
  },
  {
    id: 9,
    name: "Women's Spring Blouse",
    gender: "women",
    availability: "in-stock",
    sizes: ["S", "M"],
    collection: "spring",
    clothing: "blouses",
    price: 55,
    display: "/images/Femalecollection/Daily9.jpg",
    vendor: "Elegant Apparel",
    description: "A chic spring blouse with delicate embroidery and a light, airy fabric for maximum comfort.",
    count: 35,
  },
  {
    id: 10,
    name: "Women's Summer Shorts",
    gender: "women",
    availability: "out-of-stock",
    sizes: ["M", "L"],
    collection: "summer",
    clothing: "shorts",
    price: 65,
    display: "/images/Femalecollection/Daily8.jpg",
    vendor: "Sunny Styles",
    description: "Casual summer shorts with a relaxed fit and breathable material, perfect for hot days.",
    count: 0,
  },
  {
    id: 11,
    name: "Women's Summer Shorts (Alternate)",
    gender: "women",
    availability: "out-of-stock",
    sizes: ["S", "M", "L"],
    collection: "summer",
    clothing: "shorts",
    price: 65,
    display: "/images/Femalecollection/Daily10.jpg",
    vendor: "Sunny Styles",
    description: "Another variant of the summer shorts with a different pattern, offering style and comfort.",
    count: 0,
  },
  {
    id: 12,
    name: "Women's Winter Coat",
    gender: "women",
    availability: "in-stock",
    sizes: ["S", "M"],
    collection: "winter",
    clothing: "coats",
    price: 250,
    display: "/images/Femalecollection/Daily11.jpg",
    vendor: "Winter Wonders",
    description: "A stylish winter coat with a tailored fit, designed to keep you warm and fashionable in cold weather.",
    count: 18,
  },
  {
    id: 13,
    name: "Women's Spring Dress",
    gender: "women",
    availability: "out-of-stock",
    sizes: ["S", "M", "L"],
    collection: "spring",
    clothing: "dresses",
    price: 90,
    display: "/images/menCollection/dailyImg3.jpg",
    vendor: "Elegant Apparel",
    description: "A lovely spring dress with a floral print, featuring a fitted waist and a flowing skirt.",
    count: 0,
  },
  {
    id: 14,
    name: "Women's Winter Coat",
    gender: "women",
    availability: "in-stock",
    sizes: ["S", "M", "L"],
    collection: "winter",
    clothing: "coats",
    price: 250,
    display: "/images/Femalecollection/Daily12.jpg",
    vendor: "Winter Wonders",
    description: "An elegant winter coat with a double-breasted design, made for both style and warmth.",
    count: 22,
  },
];




const Display = () => {
  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: ".DisplayCont", 
      start: "top top", // Start when the top of the List hits the top of the viewport
      end: "bottom bottom", 
      pin: ".DeetsContainer", 
      pinSpacing: false, 
    });

    // Cleanup on component unmount
    return () => {
      trigger.kill();
    };
  }, []);
const { id } = useParams();
  const item = filterSamples.find((item) => item.id === parseInt(id));
  return (
    <div >
        <Nav />
        <div className="DisplayCont">
            <div className="Details">
                <div className="DeetsContainer">
                    <div className="titleDetails">
                        <span>{item.name}</span>
                        <span>{item.price}</span>
                    </div>
                    <div className="descDetails">
                        <p>{item.description}</p>
                        <span><span>Clothing: </span>{item.clothing}</span>
                        <span><span>Collection: </span>{item.collection}</span>
                        <span><span>Gender: </span>{item.gender}</span>
                        <p>Sizes: {item.sizes.map((size, index) => (
                          <span key={index} className="size-span">
                            {size}
                            {index < item.sizes.length - 1 && ", "}
                          </span>
                        ))}</p>
                    </div>
                    <div className="footDetails">
                      
                        
                        <span>Owned by {item.vendor}</span>
                    </div>
                    
                </div>
            </div>
            <div className="Items">
                <img src={item.display} alt="oops there should have been an image here -_-" />
            </div>
            
        </div>
        <div className="scrollDisplay">
          <span>Similar Styles</span>
          <DragDisplay List={filterSamples} />
        </div>
        <Store />
        
    </div>
  )
}

export default Display