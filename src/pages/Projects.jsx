import React, { useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import SpotlightCard from '../components/SpotlightCard';
import { projects } from '../data/projects';
import { Github, ExternalLink, Play, Tag } from 'lucide-react';

const Projects = () => {
    const location = useLocation();

    // Handle scroll to hash
    useEffect(() => {
        if (location.hash) {
            const id = location.hash.replace('#', '');
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [location]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
            <h1 className="text-4xl font-bold text-forest-text-primary mb-6">Projects</h1>
            <p className="text-xl text-forest-text-secondary/80 mb-12 max-w-2xl">
                A selection of things I've built, broken, and fixed.
            </p>

            <div className="grid grid-cols-1 gap-12">
                {projects.map((project) => (
                    <SpotlightCard
                        key={project.id}
                        className="p-0 overflow-hidden group" // p-0 allows media to be full width if needed, or specific layout
                    >
                        <div id={project.id} className="flex flex-col lg:flex-row h-full">

                            {/* Media Section */}
                            <div className="lg:w-1/2 bg-forest-bg-primary/50 border-b lg:border-b-0 lg:border-r border-forest-bg-elevated min-h-[300px] relative flex items-center justify-center overflow-hidden">
                                {project.mediaType === 'video' ? (
                                    <div className="w-full h-full relative group">
                                        {/* Placeholder video - autoplay muted loop for 'preview' feel */}
                                        <video
                                            src={project.mediaUrl}
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                                            muted
                                            loop
                                            playsInline
                                            autoPlay
                                        />
                                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                            <div className="w-16 h-16 bg-forest-bg-secondary/80 backdrop-blur rounded-full flex items-center justify-center text-forest-accent-main shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 scale-75 group-hover:scale-100">
                                                <Play fill="currentColor" size={24} />
                                            </div>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="w-full h-full relative group">
                                        <img
                                            src={project.mediaUrl}
                                            alt={project.title}
                                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500 transform group-hover:scale-105"
                                        />
                                    </div>
                                )}
                            </div>

                            {/* Content Section */}
                            <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                                <div>
                                    <h2 className="text-2xl font-bold text-forest-text-primary mb-3">
                                        {project.title}
                                    </h2>
                                    <p className="text-forest-text-secondary leading-relaxed mb-6">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.technologies.map(tech => (
                                            <span key={tech} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-forest-bg-elevated text-forest-text-muted border border-forest-bg-elevated">
                                                <Tag size={12} className="mr-1" /> {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex gap-4 pt-6 border-t border-forest-bg-elevated">
                                    {project.hasDetailsPage ? (
                                        <Link
                                            to={`/projects/${project.id}`}
                                            className="inline-flex items-center px-4 py-2 bg-forest-accent-main text-white rounded-lg hover:bg-forest-accent-main/90 transition-colors shadow-lg shadow-forest-accent-main/20"
                                        >
                                            <ExternalLink size={16} className="mr-2" /> View Gallery
                                        </Link>
                                    ) : (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center px-4 py-2 bg-forest-accent-main text-white rounded-lg hover:bg-forest-accent-main/90 transition-colors shadow-lg shadow-forest-accent-main/20"
                                        >
                                            <ExternalLink size={16} className="mr-2" /> Live Demo
                                        </a>
                                    )}
                                    <a
                                        href={project.repo}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center px-4 py-2 bg-forest-bg-elevated text-forest-text-primary rounded-lg hover:bg-forest-bg-elevated/80 transition-colors text-sm"
                                    >
                                        <Github size={16} className="mr-2" /> Source
                                    </a>
                                </div>
                            </div>
                        </div>
                    </SpotlightCard>
                ))}
            </div>
        </div>
    );
};

export default Projects;
