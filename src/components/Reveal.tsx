import React, { useRef, useEffect } from 'react';
import { motion, useInView, useAnimation, Variant } from 'framer-motion';

interface RevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    duration?: number;
    className?: string;
}

const Reveal: React.FC<RevealProps> = ({ children, width = "fit-content", delay = 0.25, duration = 0.5, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-75px" });
    const mainControls = useAnimation();

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible");
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }} className={className}>
            <motion.div
                variants={{
                    hidden: { opacity: 0, y: 40, scale: 0.98 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ type: "spring", stiffness: 40, damping: 15, mass: 1, delay }}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Reveal;
