import React, { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';

const AnimatedResume = ({ title, items }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <div ref={containerRef} className="py-12 relative">
            <h2 className="text-2xl font-bold text-forest-text-primary mb-12 border-b-2 border-forest-bg-elevated pb-2 inline-block">
                {title}
            </h2>

            <div className="relative">
                {/* The Vertical Line Background (Gray) */}
                <div className="absolute left-[9px] top-2 bottom-0 w-[2px] bg-forest-bg-elevated/50" />

                {/* The Vertical Line Foreground (Green - Draws on Scroll) */}
                <motion.div
                    className="absolute left-[9px] top-2 w-[2px] bg-forest-accent-main origin-top"
                    style={{ scaleY: scrollYProgress, bottom: 0 }}
                />

                <div className="space-y-16">
                    {items.map((item, index) => (
                        <ResumeItem key={item.id || index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

const ResumeItem = ({ item, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative pl-12"
        >
            {/* The Dot */}
            <motion.div
                initial={{ scale: 0, backgroundColor: "#1e293b" }}
                whileInView={{ scale: 1, backgroundColor: "#2F8F6B" }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.4, delay: 0.2 }}
                className="absolute left-[2px] top-2 w-4 h-4 rounded-full border-2 border-forest-bg-primary z-10 box-content"
            ></motion.div>

            {/* Content Card */}
            <div className="bg-forest-bg-secondary/50 p-6 rounded-xl border border-forest-bg-elevated hover:bg-forest-bg-secondary hover:border-forest-accent-main/30 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <div>
                        <h3 className="text-xl font-bold text-forest-text-primary leading-tight">
                            {item.role}
                        </h3>
                        <h4 className="text-lg font-medium text-forest-accent-soft mt-1">
                            {item.company || item.organization}
                        </h4>
                    </div>

                    <div className="flex flex-col sm:items-end mt-2 sm:mt-0 min-w-max ml-0 sm:ml-4">
                        <span className="text-sm font-medium text-forest-accent-main px-2 py-1 bg-forest-bg-elevated/50 rounded mb-1 whitespace-nowrap">
                            {item.startDate} – {item.endDate}
                        </span>
                        {item.location && (
                            <span className="text-xs text-forest-text-muted font-medium flex items-center">
                                {item.location}
                            </span>
                        )}
                    </div>
                </div>

                <div className="text-forest-text-secondary leading-relaxed mt-4 text-base">
                    {item.bullets ? (
                        <ul className="list-disc list-outside ml-4 space-y-2">
                            {item.bullets.map((bullet, idx) => (
                                <li key={idx} className="pl-1 marker:text-forest-text-muted/70">{bullet}</li>
                            ))}
                        </ul>
                    ) : (
                        <p>{item.description}</p>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default AnimatedResume;
