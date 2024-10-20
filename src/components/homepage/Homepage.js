import Hero from "./Hero"
import React, { useEffect, useRef, useState } from 'react';
import MenCollection from "./MenCollection"
const Homepage = () => {
    const [isInView, setIsInView] = useState(false);
    const triggerRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
        ([entry]) => setIsInView(entry.isIntersecting),
        { threshold: 0.5 }
        );

    if (triggerRef.current) observer.observe(triggerRef.current);

    return () => observer.disconnect(); 
  }, []);
  return (
    <div className={`homepage ${isInView ? 'scrolled' : ''}`}>
        <Hero />
        <MenCollection triggerRef={triggerRef} />
    </div>
  )
}

export default Homepage