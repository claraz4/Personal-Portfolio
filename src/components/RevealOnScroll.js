import { useState, useEffect, useRef } from "react";

export default function RevealOnScroll({ children }) {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);
 
    useEffect(() => {
        const element = ref.current;

        const scrollObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                scrollObserver.unobserve(entry.target);
            }
        });
 
        scrollObserver.observe(element);
 
        return () => {
            if (element) {
                scrollObserver.unobserve(element);
            }
        };
    }, []);
 
    const classes = `transition-opacity duration-1000 
        ${isVisible ? "opacity-100" : "opacity-0"
        }`;
 
    return (
        <div ref={ref} className={classes}>
            {children}
        </div>
    );
};