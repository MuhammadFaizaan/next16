"use client";

import Lenis from "lenis";
import { useState, useEffect, createContext, useContext } from "react";
import { usePathname } from "next/navigation";

const SmoothScrollerContext = createContext();

export const useSmoothScroller = () => useContext(SmoothScrollerContext);

export default function ScrollContext({ children }) {
    const [lenisInstance, setLenisInstance] = useState(null);
    const [rafId, setRafId] = useState(null);
    const pathname = usePathname();

    useEffect(() => {
        // Create Lenis instance with options to exclude specific elements
        const scroller = new Lenis({
            // This will make Lenis ignore elements with this class
            wheelEventsTarget: document.documentElement,
            smoothWheel: true,
            touchMultiplier: 2,
            infinite: false,
            // This is crucial - tell Lenis to ignore these elements
            wrapper: document.documentElement,
            content: document.documentElement,
            gestureOrientation: "vertical",
            // The key addition - elements to exclude from Lenis scrolling
            autoResize: true,
            lerp: 0.1,  // Lower value for smoother scrolling
            excludeElements: [
                // Add selectors for your modals/popups here
                '.modal-content',
                '.popup-scrollable',
                '[data-lenis-prevent]' // Generic attribute you can add to any element
            ]
        });
        
        let frameId;
        
        function raf(time) {
            scroller.raf(time);
            frameId = requestAnimationFrame(raf);
        }
        
        frameId = requestAnimationFrame(raf);
        setRafId(frameId);
        setLenisInstance(scroller);
        
        return () => {
            if (frameId) {
                cancelAnimationFrame(frameId);
            }
            if (scroller) {
                scroller.destroy();
            }
        };
    }, []);
    
    // Scroll to top on route change
    useEffect(() => {
        if (lenisInstance) {
            // Small delay to ensure the new page content is rendered
            setTimeout(() => {
                lenisInstance.scrollTo(0, { 
                    immediate: true, // Set to false for smooth scroll
                    duration: 0 
                });
            }, 0);
        }
    }, [pathname, lenisInstance]);
    
    const scrollContext = {
        lenis: lenisInstance,
        // Add functions to stop/start Lenis when modals open/close
        stop: () => {
            if (lenisInstance) lenisInstance.stop();
        },
        start: () => {
            if (lenisInstance) lenisInstance.start();
        },
        scrollToTop: (smooth = false) => {
            if (lenisInstance) {
                lenisInstance.scrollTo(0, { 
                    immediate: !smooth,
                    duration: smooth ? 1 : 0 
                });
            }
        }
    };
    
    return (
        <SmoothScrollerContext.Provider value={scrollContext}>
            {children}
        </SmoothScrollerContext.Provider>
    );
}