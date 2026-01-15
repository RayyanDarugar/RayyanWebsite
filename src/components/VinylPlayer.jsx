import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Disc, Play, Pause, SkipForward, SkipBack, X, Music, Volume2, Volume1, VolumeX } from 'lucide-react';
import { tracks } from '../data/music';

// Helper for GitHub Pages path resolution
const resolvePath = (path) => {
    if (!path) return '';
    if (path.startsWith('http')) return path;
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${import.meta.env.BASE_URL}${cleanPath}`;
};

const VinylPlayer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
    const [volume, setVolume] = useState(0.5);
    // Initialize with resolved path
    const audioRef = useRef(new Audio(resolvePath(tracks[0].url)));

    const currentTrack = tracks[currentTrackIndex];

    // Handle Audio Events
    useEffect(() => {
        const audio = audioRef.current;
        audio.volume = volume;

        const handleEnded = () => {
            handleNext();
        };

        audio.addEventListener('ended', handleEnded);
        return () => {
            audio.removeEventListener('ended', handleEnded);
            audio.pause();
        };
    }, []);

    // Update source when track changes
    useEffect(() => {
        const audio = audioRef.current;
        const resolvedUrl = resolvePath(currentTrack.url);

        // Only change source if it's different to prevent reloading on first render if handled elsewhere
        if (audio.src !== new URL(resolvedUrl, window.location.href).href &&
            audio.src !== resolvedUrl) {

            const wasPlaying = !audio.paused;
            audio.src = resolvedUrl;
            if (isPlaying) {
                audio.play().catch(e => console.log("Playback error:", e));
            }
        }
    }, [currentTrackIndex]);

    // Handle Play/Pause
    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play().catch(e => {
                console.warn("Autoplay blocked or error:", e);
                setIsPlaying(false);
            });
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    // Handle Volume
    useEffect(() => {
        audioRef.current.volume = volume;
    }, [volume]);


    const handleNext = () => {
        setCurrentTrackIndex((prev) => (prev + 1) % tracks.length);
    };

    const handlePrev = () => {
        setCurrentTrackIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
    };

    // Tooltip Dismissal State
    const [hasInteracted, setHasInteracted] = useState(() => {
        return typeof window !== 'undefined' ? localStorage.getItem('vinylInteracted') === 'true' : false
    });

    // Footer Collision Logic
    const [bottomOffset, setBottomOffset] = useState(24);

    useEffect(() => {
        const handleScroll = () => {
            const footer = document.getElementById('site-footer');
            if (!footer) return;

            const footerRect = footer.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // If footer is visible (top is less than window height)
            if (footerRect.top < windowHeight) {
                const newBottom = 24 + (windowHeight - footerRect.top);
                setBottomOffset(newBottom);
            } else {
                setBottomOffset(24);
            }
        };

        window.addEventListener('scroll', handleScroll);
        window.addEventListener('resize', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, []);


    const toggleOpen = () => {
        if (!isOpen && !hasInteracted) {
            setHasInteracted(true);
            localStorage.setItem('vinylInteracted', 'true');
        }
        setIsOpen(!isOpen);
    };

    const togglePlay = () => setIsPlaying(!isPlaying);

    return (
        <div
            className="fixed right-6 z-50 flex flex-col items-end transition-all duration-100 ease-out"
            style={{ bottom: `${bottomOffset}px` }}
        >
            {/* The Player Card (Expanded) */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="bg-forest-bg-secondary/90 backdrop-blur-md border border-forest-bg-elevated p-4 rounded-2xl shadow-2xl mb-4 w-72"
                    >
                        {/* Header / Close */}
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-xs font-bold text-forest-text-muted uppercase tracking-wider flex items-center">
                                <Music size={12} className="mr-1" /> Now Playing
                            </span>
                            <button onClick={toggleOpen} className="text-forest-text-muted hover:text-forest-text-primary transition-colors">
                                <X size={16} />
                            </button>
                        </div>

                        {/* Album Art & Vinyl Animation */}
                        <div className="relative w-full aspect-square bg-forest-bg-primary rounded-xl mb-4 overflow-hidden flex items-center justify-center shadow-inner border border-forest-bg-elevated/50">
                            {/* The Vinyl Record */}
                            <motion.div
                                animate={{ rotate: isPlaying ? 360 : 0 }}
                                transition={{ repeat: Infinity, duration: 3, ease: "linear", repeatType: "loop" }}
                                style={{ originX: 0.5, originY: 0.5 }} // Ensure center rotation
                                className="w-48 h-48 rounded-full bg-black relative shadow-xl flex items-center justify-center"
                            >
                                {/* Grooves */}
                                <div className="absolute inset-2 rounded-full border border-neutral-800/50" />
                                <div className="absolute inset-6 rounded-full border border-neutral-800/50" />
                                <div className="absolute inset-10 rounded-full border border-neutral-800/50" />

                                {/* Label / Cover */}
                                <div className="w-20 h-20 rounded-full overflow-hidden relative z-10 border-2 border-neutral-900">
                                    <img src={currentTrack.cover} alt="Cover" className="w-full h-full object-cover opacity-80" />
                                </div>
                            </motion.div>

                            {/* Center Spindle */}
                            <div className="absolute w-2 h-2 bg-neutral-300 rounded-full z-20 shadow-sm" />
                        </div>

                        {/* Track Info */}
                        <div className="mb-4 text-center">
                            <h3 className="font-bold text-forest-text-primary truncate">{currentTrack.title}</h3>
                            <p className="text-xs text-forest-text-secondary">{currentTrack.artist}</p>
                        </div>

                        {/* Controls */}
                        <div className="flex justify-center items-center gap-4 mb-4">
                            <button onClick={handlePrev} className="text-forest-text-secondary hover:text-forest-accent-main transition-colors">
                                <SkipBack size={20} />
                            </button>
                            <button
                                onClick={togglePlay}
                                className="w-10 h-10 rounded-full bg-forest-accent-main text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                            >
                                {isPlaying ? <Pause size={20} fill="currentColor" /> : <Play size={20} fill="currentColor" className="ml-1" />}
                            </button>
                            <button onClick={handleNext} className="text-forest-text-secondary hover:text-forest-accent-main transition-colors">
                                <SkipForward size={20} />
                            </button>
                        </div>

                        {/* Volume Slider */}
                        <div className="flex items-center gap-2 px-2">
                            <button onClick={() => setVolume(volume === 0 ? 0.5 : 0)} className="text-forest-text-muted hover:text-forest-text-primary">
                                {volume === 0 ? <VolumeX size={14} /> : volume < 0.5 ? <Volume1 size={14} /> : <Volume2 size={14} />}
                            </button>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={volume}
                                onChange={(e) => setVolume(parseFloat(e.target.value))}
                                className="w-full h-1 bg-forest-bg-elevated rounded-lg appearance-none cursor-pointer accent-forest-accent-main"
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Minimized Button (The Spinning Disc) */}
            {!isOpen && (
                <div className="flex items-center">
                    {!hasInteracted && (
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0, transition: { delay: 1 } }}
                            exit={{ opacity: 0, x: 20 }}
                            className="mr-4 px-3 py-2 bg-forest-bg-elevated/80 backdrop-blur text-forest-text-secondary text-xs font-medium rounded-xl rounded-tr-none shadow-lg border border-forest-bg-elevated pointer-events-none whitespace-nowrap hidden sm:block"
                        >
                            Listen to some of my favorite songs!
                        </motion.div>
                    )}

                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        whileHover={{ scale: 1.1 }}
                        onClick={toggleOpen}
                        className="relative group w-14 h-14"
                    >
                        <motion.div
                            animate={{ rotate: isPlaying ? 360 : 0 }}
                            transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                            className="w-full h-full rounded-full bg-black border-2 border-forest-bg-elevated shadow-lg flex items-center justify-center overflow-hidden"
                        >
                            <img src={currentTrack.cover} alt="Mini Cover" className="w-full h-full object-cover opacity-60" />
                            <div className="absolute w-2 h-2 bg-white rounded-full z-10" />
                        </motion.div>

                        {/* Playing Indicator Badge */}
                        {isPlaying && (
                            <span className="absolute -top-1 -right-1 flex h-3 w-3">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-forest-accent-main opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-forest-accent-main"></span>
                            </span>
                        )}
                    </motion.button>
                </div>
            )}
        </div>
    );
};

export default VinylPlayer;
