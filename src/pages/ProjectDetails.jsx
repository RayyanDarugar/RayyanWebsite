import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data/projects';
import { ArrowLeft, Play } from 'lucide-react';

const ProjectDetails = () => {
    const { id } = useParams();
    const project = projects.find(p => p.id === id);

    if (!project) {
        return <Navigate to="/projects" replace />;
    }

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 animate-fade-in">
            {/* Back Button */}
            <Link to="/projects" className="inline-flex items-center text-forest-accent-main hover:text-forest-accent-gold transition-colors mb-8">
                <ArrowLeft size={20} className="mr-2" /> Back to Projects
            </Link>

            {/* Header */}
            <header className="mb-16">
                <h1 className="text-4xl md:text-5xl font-bold text-forest-text-primary mb-6">
                    {project.title}
                </h1>
                <p className="text-xl text-forest-text-secondary leading-relaxed max-w-3xl">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-6">
                    {project.technologies.map(tech => (
                        <span key={tech} className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-forest-bg-elevated text-forest-text-muted border border-forest-bg-elevated">
                            {tech}
                        </span>
                    ))}
                </div>
            </header>

            {/* Gallery Grid */}
            {project.gallery && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                    {project.gallery.map((item, index) => (
                        <div key={index} className="group relative bg-forest-bg-secondary rounded-2xl overflow-hidden border border-forest-bg-elevated shadow-lg hover:border-forest-accent-main/30 transition-all duration-300">
                            {/* Video Container */}
                            <div className="aspect-video relative bg-black">
                                <video
                                    src={item.url}
                                    className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                                    controls
                                    playsInline
                                    alt={item.title}
                                />
                            </div>

                            {/* Caption */}
                            <div className="p-4 bg-forest-bg-secondary border-t border-forest-bg-elevated">
                                <h3 className="text-lg font-bold text-forest-text-primary group-hover:text-forest-accent-main transition-colors">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ProjectDetails;
