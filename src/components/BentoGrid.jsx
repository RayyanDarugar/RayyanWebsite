import React from 'react';
import { MapPin, Mail, Linkedin, Github, Download, ArrowRight, Code, Terminal, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';
import { resumeData } from '../data/resume';
import SpotlightCard from './SpotlightCard';

const BentoGrid = () => {
    return (
        <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-4 gap-4 h-full min-h-[600px]">

                {/* 1. Main Intro Card (Large) - Spans 4 cols, 2 rows */}
                <SpotlightCard className="md:col-span-4 md:row-span-2 p-8 group transition-all duration-500 hover:border-forest-accent-main/30">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-forest-accent-main/10 rounded-full blur-3xl -mr-16 -mt-16 transition-transform duration-700 group-hover:scale-110"></div>

                    <div className="relative z-10 flex flex-col justify-between h-full">
                        <div>
                            <div className="inline-flex items-center px-3 py-1 rounded-full bg-forest-bg-elevated text-forest-accent-soft text-xs font-medium mb-6">
                                <span className="w-2 h-2 bg-forest-accent-main rounded-full mr-2 animate-pulse"></span>
                                Available for opportunities
                            </div>
                            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-forest-text-primary tracking-tight mb-4">
                                {resumeData.basics.name}
                            </h1>
                            <p className="text-xl text-forest-text-secondary/90 font-light max-w-lg">
                                {resumeData.basics.title}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3 mt-8">
                            <Link to="/contact" className="inline-flex items-center px-6 py-3 bg-forest-accent-main text-white rounded-xl font-medium hover:bg-forest-accent-main/90 transition-all hover:scale-[1.02] shadow-lg shadow-forest-accent-main/20">
                                Let's Talk <ArrowRight size={18} className="ml-2" />
                            </Link>
                            <button className="inline-flex items-center px-6 py-3 bg-forest-bg-elevated text-forest-text-primary rounded-xl font-medium hover:bg-forest-bg-elevated/80 transition-all hover:scale-[1.02]">
                                <Download size={18} className="mr-2" /> Resume
                            </button>
                        </div>
                    </div>
                </SpotlightCard>

                {/* 2. Location Card (Small) - Spans 2 cols, 1 row */}
                <SpotlightCard className="md:col-span-2 md:row-span-1 p-6 flex flex-col justify-center items-center text-center group hover:border-forest-accent-soft/30 transition-all duration-300">
                    {/* <div className="absolute inset-0 bg-gradient-to-br from-forest-bg-elevated/0 to-forest-bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div> */}
                    <div className="bg-forest-bg-elevated/50 p-3 rounded-full mb-3 text-forest-accent-soft group-hover:scale-110 transition-transform duration-300">
                        <MapPin size={24} />
                    </div>
                    <h3 className="text-forest-text-primary font-medium z-10">{resumeData.basics.location}</h3>
                    <p className="text-xs text-forest-text-muted mt-1 z-10">Based in Sunny CA</p>
                </SpotlightCard>

                {/* 3. Social Stacks (Small) - Spans 2 cols, 1 row */}
                <div className="md:col-span-2 md:row-span-1 bg-forest-bg-elevated/30 border border-forest-bg-elevated rounded-3xl p-6 flex items-center justify-around group hover:bg-forest-bg-elevated/50 transition-all duration-300">
                    <a href={`mailto:${resumeData.basics.email}`} className="p-3 bg-forest-bg-secondary rounded-2xl text-forest-text-secondary hover:text-forest-accent-main hover:scale-110 transition-all duration-300 shadow-sm border border-forest-bg-elevated">
                        <Mail size={24} />
                    </a>
                    <a href={resumeData.basics.linkedin} target="_blank" rel="noreferrer" className="p-3 bg-forest-bg-secondary rounded-2xl text-[#0077b5] hover:scale-110 transition-all duration-300 shadow-sm border border-forest-bg-elevated">
                        <Linkedin size={24} />
                    </a>
                    <a href="https://github.com/RayyanDarugar" target="_blank" rel="noreferrer" className="p-3 bg-forest-bg-secondary rounded-2xl text-white hover:scale-110 transition-all duration-300 shadow-sm border border-forest-bg-elevated">
                        <Github size={24} />
                    </a>
                </div>

                {/* 4. About Summary (Medium) - Spans 3 cols, 2 rows */}
                <SpotlightCard className="md:col-span-3 md:row-span-2 p-8 flex flex-col justify-between hover:border-forest-accent-gold/20 transition-all duration-300">
                    <div>
                        <h3 className="text-forest-text-muted uppercase tracking-wider text-xs font-bold mb-4 flex items-center">
                            <Coffee size={14} className="mr-2 text-forest-accent-gold" /> About Me
                        </h3>
                        <p className="text-forest-text-secondary leading-relaxed text-lg">
                            {resumeData.basics.summary}
                        </p>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-2">
                        {resumeData.interests.slice(0, 4).map((interest, i) => (
                            <span key={i} className="px-3 py-1 bg-forest-bg-elevated rounded-lg text-xs text-forest-text-muted">
                                {interest}
                            </span>
                        ))}
                    </div>
                </SpotlightCard>

                {/* 5. Tech Stack / Skills (Medium) - Spans 3 cols, 2 rows */}
                <SpotlightCard className="md:col-span-3 md:row-span-2 p-8 hover:border-forest-accent-soft/30 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-br from-forest-bg-secondary to-forest-bg-elevated/20 opacity-50"></div>
                    <div className="relative z-10">
                        <h3 className="text-forest-text-muted uppercase tracking-wider text-xs font-bold mb-6 flex items-center">
                            <Terminal size={14} className="mr-2 text-forest-accent-soft" /> Tech & Tools
                        </h3>

                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <h4 className="text-sm font-bold text-forest-text-primary mb-3">Technical</h4>
                                <ul className="space-y-2">
                                    {resumeData.skills.technical.slice(0, 4).map(skill => (
                                        <li key={skill} className="flex items-center text-sm text-forest-text-secondary">
                                            <Code size={14} className="mr-2 text-forest-accent-main/70" /> {skill}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-forest-text-primary mb-3">Tools</h4>
                                <ul className="space-y-2">
                                    {resumeData.skills.tools.slice(0, 4).map(tool => (
                                        <li key={tool} className="flex items-center text-sm text-forest-text-secondary">
                                            <span className="w-1.5 h-1.5 bg-forest-accent-gold/70 rounded-full mr-2"></span> {tool}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </SpotlightCard>

            </div>
        </div>
    );
};

export default BentoGrid;
