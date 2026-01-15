import React from 'react';

const AuroraBackground = ({ children }) => {
    return (
        <div className="relative w-full min-h-screen overflow-hidden bg-forest-bg-primary">
            {/* Aurora Orbs - Smoother, wandering movement, no pulse */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                {/* Orb 1: Forest Green - Top Left - Moving */}
                <div className="absolute top-[-20%] left-[-20%] w-[70%] h-[70%] bg-forest-accent-main/15 rounded-full blur-[120px] animate-blob-1 opacity-60 mix-blend-screen"></div>

                {/* Orb 2: Soft Sage - Bottom Right - Moving */}
                <div className="absolute bottom-[-20%] right-[-20%] w-[70%] h-[70%] bg-forest-accent-soft/10 rounded-full blur-[120px] animate-blob-2 opacity-50 mix-blend-screen"></div>

                {/* Orb 3: Gold/Yellow - Center - Moving */}
                <div className="absolute top-[30%] left-[30%] w-[40%] h-[40%] bg-forest-accent-gold/5 rounded-full blur-[100px] animate-blob-3 opacity-40 mix-blend-overlay"></div>
            </div>

            {/* Content Layer */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

export default AuroraBackground;
