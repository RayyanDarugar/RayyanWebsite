import React from 'react';
import ResumeSection from '../components/ResumeSection';
import AnimatedResume from '../components/AnimatedResume';
import BentoGrid from '../components/BentoGrid';
import { resumeData } from '../data/resume';

const Home = () => {
    return (
        <div className="animate-fade-in">
            {/* Hero / Bento Grid Section - Replaces old Hero & About */}
            <section className="mb-8 pt-4">
                <BentoGrid />
            </section>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

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

                {/* Experience Section (Animated) */}
                <AnimatedResume title="Experience" items={resumeData.experience} />

                {/* Leadership Section (Animated) */}
                <AnimatedResume title="Leadership" items={resumeData.leadership} />

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
