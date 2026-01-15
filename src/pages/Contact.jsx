import React from 'react';
import ContactForm from '../components/ContactForm';
import { Mail, Linkedin, Github } from 'lucide-react';

const Contact = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Left Column: Info */}
                <div>
                    <h1 className="text-4xl font-bold text-forest-text-primary mb-6">Let's Connect</h1>
                    <p className="text-xl text-forest-text-secondary/80 mb-8 leading-relaxed">
                        I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
                    </p>

                    <div className="space-y-8">
                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-forest-bg-elevated text-forest-accent-main border border-forest-bg-elevated">
                                    <Mail size={24} />
                                </div>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-forest-text-primary">Email</h3>
                                <p className="mt-1 text-forest-text-muted">
                                    <a href="mailto:rdarugar@usc.edu" className="hover:text-forest-accent-main transition-colors">
                                        rdarugar@usc.edu
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[#0077b5]/20 text-[#0077b5] border border-[#0077b5]/30">
                                    <Linkedin size={24} />
                                </div>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-forest-text-primary">LinkedIn</h3>
                                <p className="mt-1 text-forest-text-muted">
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-forest-accent-main transition-colors">
                                        Connect on LinkedIn
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start">
                            <div className="flex-shrink-0">
                                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-forest-bg-elevated text-white border border-forest-bg-elevated">
                                    <Github size={24} />
                                </div>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-forest-text-primary">GitHub</h3>
                                <p className="mt-1 text-forest-text-muted">
                                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-forest-accent-main transition-colors">
                                        Follow my work
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Form */}
                <div>
                    <div className="bg-forest-bg-elevated/20 rounded-2xl p-2 border border-forest-bg-elevated/50">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
