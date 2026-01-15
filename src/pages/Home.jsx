import React from 'react';
import { Download, ArrowRight, MapPin, Mail, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import ResumeSection from '../components/ResumeSection';
import { resumeData } from '../data/resume';

const Home = () => {
    return (
        <div className="animate-fade-in">
            {/* Hero Section */}
            <section className="bg-forest-bg-primary py-20 px-4 sm:px-6 lg:px-8 text-center border-b border-forest-bg-elevated">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-6xl font-bold text-forest-text-primary mb-4 tracking-tight">
                        {resumeData.basics.name}
                    </h1>
                    <p className="text-xl md:text-2xl text-forest-text-secondary mb-6 font-light max-w-2xl mx-auto leading-relaxed">
                        {resumeData.basics.title}
                    </p>

                    <div className="flex flex-col items-center justify-center space-y-2 mb-8 text-forest-text-muted text-sm md:text-base">
                        <div className="flex items-center space-x-6">
                            <span className="flex items-center"><MapPin size={16} className="mr-1" /> {resumeData.basics.location}</span>
                            <a href={`mailto:${resumeData.basics.email}`} className="flex items-center hover:text-forest-accent-main transition-colors"><Mail size={16} className="mr-1" /> Contact</a>
                            <a href={resumeData.basics.linkedin} target="_blank" rel="noreferrer" className="flex items-center hover:text-forest-accent-main transition-colors"><Linkedin size={16} className="mr-1" /> LinkedIn</a>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link
                            to="/blog"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-forest-accent-main hover:bg-forest-accent-main/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:shadow-forest-accent-main/20"
                        >
                            Read My Blog <ArrowRight size={18} className="ml-2" />
                        </Link>
                        <Link
                            to="/contact"
                            className="inline-flex items-center justify-center px-6 py-3 border-2 border-forest-accent-main text-base font-medium rounded-lg text-forest-accent-main bg-transparent hover:bg-forest-accent-main/10 transition-all duration-200"
                        >
                            Contact Me
                        </Link>
                    </div>
                </div>
            </section>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* About Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-forest-text-primary mb-6 text-center border-b-2 border-forest-bg-elevated pb-2 inline-block mx-auto min-w-[200px]">About Me</h2>
                    <div className="bg-forest-bg-secondary p-8 rounded-xl shadow-sm border border-forest-bg-elevated">
                        <p className="text-lg text-forest-text-secondary leading-relaxed font-light">
                            {resumeData.basics.summary}
                        </p>
                    </div>
                </section>

                {/* Education Section (Custom for WBB) */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-forest-text-primary mb-6 border-b-2 border-forest-bg-elevated pb-2">
                        Education
                    </h2>
                    {resumeData.education.map((edu, idx) => (
                        <div key={idx} className="bg-forest-bg-secondary p-8 rounded-xl border border-forest-bg-elevated shadow-sm mb-6 last:mb-0">
                            <div className="flex flex-col md:flex-row md:justify-between md:items-baseline mb-4">
                                <h3 className="text-2xl font-bold text-forest-text-primary">{edu.program}</h3>
                                <span className="text-forest-accent-soft font-medium bg-forest-bg-elevated px-3 py-1 rounded text-sm">Exp. {edu.expectedGraduation}</span>
                            </div>
                            <p className="text-forest-text-secondary mb-6 italic">{edu.description}</p>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                {edu.institutions.map((inst, i) => (
                                    <div key={i} className="bg-forest-bg-primary p-4 rounded-lg border border-forest-bg-elevated text-center">
                                        <div className="font-bold text-forest-text-primary mb-1">{inst.name}</div>
                                        <div className="text-sm text-forest-accent-main font-medium mb-1">{inst.degree}</div>
                                        <div className="text-xs text-forest-text-muted uppercase tracking-wider">{inst.location}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-3 pt-4 border-t border-forest-bg-elevated">
                                <div className="flex flex-col sm:flex-row sm:items-baseline">
                                    <span className="font-bold text-forest-text-secondary min-w-[100px]">Honors:</span>
                                    <span className="text-forest-text-muted">{edu.honors.join(", ")}</span>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-baseline">
                                    <span className="font-bold text-forest-text-secondary min-w-[100px]">Coursework:</span>
                                    <span className="text-forest-text-muted">{edu.coursework.join(", ")}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {/* Experience Section */}
                <ResumeSection title="Experience" items={resumeData.experience} />

                {/* Leadership Section */}
                <ResumeSection title="Leadership" items={resumeData.leadership} />

                {/* Skills Section */}
                <section className="mb-16">
                    <h2 className="text-2xl font-bold text-forest-text-primary mb-6 border-b-2 border-forest-bg-elevated pb-2">
                        Skills
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="bg-forest-bg-secondary p-6 rounded-lg border border-forest-bg-elevated shadow-sm">
                            <h3 className="font-bold text-forest-text-primary mb-4 border-b border-forest-bg-elevated pb-2">Tools</h3>
                            <div className="flex flex-wrap gap-2">
                                {resumeData.skills.tools.map(skill => (
                                    <span key={skill} className="bg-forest-bg-elevated text-forest-text-secondary px-2 py-1 rounded text-sm font-medium hover:text-forest-accent-soft transition-colors">{skill}</span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-forest-bg-secondary p-6 rounded-lg border border-forest-bg-elevated shadow-sm">
                            <h3 className="font-bold text-forest-text-primary mb-4 border-b border-forest-bg-elevated pb-2">Technical</h3>
                            <div className="flex flex-wrap gap-2">
                                {resumeData.skills.technical.map(skill => (
                                    <span key={skill} className="bg-forest-bg-elevated text-forest-text-secondary px-2 py-1 rounded text-sm font-medium hover:text-forest-accent-soft transition-colors">{skill}</span>
                                ))}
                            </div>
                        </div>
                        <div className="bg-forest-bg-secondary p-6 rounded-lg border border-forest-bg-elevated shadow-sm">
                            <h3 className="font-bold text-forest-text-primary mb-4 border-b border-forest-bg-elevated pb-2">Business</h3>
                            <div className="flex flex-wrap gap-2">
                                {resumeData.skills.business.map(skill => (
                                    <span key={skill} className="bg-forest-bg-elevated text-forest-text-secondary px-2 py-1 rounded text-sm font-medium hover:text-forest-accent-soft transition-colors">{skill}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Interests Section */}
                <section className="mb-12">
                    <h2 className="text-2xl font-bold text-forest-text-primary mb-6 border-b-2 border-forest-bg-elevated pb-2">
                        Interests & Activities
                    </h2>
                    <div className="flex flex-wrap gap-3">
                        {resumeData.interests.map((interest, idx) => (
                            <span key={idx} className="inline-block px-4 py-2 bg-forest-bg-secondary border border-forest-bg-elevated rounded-full text-forest-text-secondary shadow-sm hover:border-forest-accent-main hover:text-forest-accent-main transition-all cursor-default">
                                {interest}
                            </span>
                        ))}
                    </div>
                </section>

            </div>
        </div>
    );
};

export default Home;
