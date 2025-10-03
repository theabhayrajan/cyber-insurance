"use client";;
import { cn } from "@/lib/utils";
import { motion, useAnimation, useReducedMotion } from "motion/react";
import { forwardRef, useCallback, useImperativeHandle, useRef } from "react";

const BlendIcon = forwardRef(({ onMouseEnter, onMouseLeave, className, size = 28, ...props }, ref) => {
    const controls = useAnimation();
    const reduced = useReducedMotion();
    const isControlled = useRef(false);

    useImperativeHandle(ref, () => {
        isControlled.current = true;
        return {
            startAnimation: () =>
                reduced ? controls.start("normal") : controls.start("animate"),
            stopAnimation: () => controls.start("normal"),
        };
    });

    const handleEnter = useCallback((e) => {
        if (reduced) return;
        if (!isControlled.current) controls.start("animate");
        else onMouseEnter?.(e);
    }, [controls, reduced, onMouseEnter]);

    const handleLeave = useCallback((e) => {
        if (!isControlled.current) controls.start("normal");
        else onMouseLeave?.(e);
    }, [controls, onMouseLeave]);

    const groupVariants = {
        normal: { rotate: 0, scale: 1 },
        animate: {
            rotate: [0, -1.5, 1.5, 0],
            scale: [1, 1.02, 1],
            transition: { duration: 0.7, ease: "easeInOut" },
        },
    };

    const leftCircle = {
        normal: { strokeDashoffset: 0, opacity: 1, x: 0 },
        animate: {
            strokeDashoffset: [48, 0],
            opacity: [0.45, 1],
            transition: { duration: 0.6, ease: "easeInOut" },
        },
    };

    const rightCircle = {
        normal: { strokeDashoffset: 0, opacity: 1, x: 0 },
        animate: {
            strokeDashoffset: [48, 0],
            opacity: [0.45, 1],
            transition: { duration: 0.6, ease: "easeInOut", delay: 0.09 },
        },
    };

    const overlapPulse = {
        normal: { scale: 1, opacity: 1 },
        animate: {
            scale: [1, 1.06, 1],
            opacity: [0.9, 1, 1],
            transition: { duration: 0.5, ease: "easeInOut", delay: 0.25 },
        },
    };

    return (
        <motion.div
            className={cn("inline-flex items-center justify-center", className)}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            {...props}>
            <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width={size}
                height={size}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-blend-icon lucide-blend">
                <motion.g variants={groupVariants} initial="normal" animate={controls}>
                    <motion.circle
                        cx="9"
                        cy="9"
                        r="7"
                        strokeDasharray="48"
                        strokeDashoffset="48"
                        variants={leftCircle}
                        initial="normal"
                        animate={controls} />
                    <motion.g variants={overlapPulse} initial="normal" animate={controls}>
                        <motion.circle
                            cx="15"
                            cy="15"
                            r="7"
                            strokeDasharray="48"
                            strokeDashoffset="48"
                            variants={rightCircle}
                            initial="normal"
                            animate={controls} />
                    </motion.g>
                </motion.g>
            </motion.svg>
        </motion.div>
    );
});

BlendIcon.displayName = "BlendIcon";
export { BlendIcon };
