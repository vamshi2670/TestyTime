import React, { useEffect, useRef, useState } from 'react'

function Contact() {
  const contactRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <div  ref={contactRef} id="contact" className={`contact-container ${isVisible ? 'drop-in' : ''}`}>
      <h2 id='contact-text' className='text-primary' >Contact</h2>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" required rows="5" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};


export default Contact