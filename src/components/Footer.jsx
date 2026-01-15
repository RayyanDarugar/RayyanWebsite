import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer id="site-footer" className="bg-forest-bg-secondary text-forest-text-muted py-8 mt-auto border-t border-forest-bg-elevated">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-sm">© {new Date().getFullYear()} Rayyan Darugar. All rights reserved.</p>
                </div>

                <div className="flex space-x-6">
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-forest-accent-main transition-colors text-forest-text-secondary">
                        <Github size={20} />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-forest-accent-main transition-colors text-forest-text-secondary">
                        <Linkedin size={20} />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-forest-accent-main transition-colors text-forest-text-secondary">
                        <Twitter size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
