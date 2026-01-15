import React from 'react';

const ResumeSection = ({ title, items }) => {
    return (
        <div className="mb-12">
            <h2 className="text-2xl font-bold text-forest-text-primary mb-6 border-b-2 border-forest-bg-elevated pb-2">
                {title}
            </h2>
            <div className="space-y-10">
                {items.map((item) => (
                    <div key={item.id} className="relative pl-8 border-l-2 border-forest-bg-elevated">
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-forest-accent-main border-2 border-forest-bg-primary"></div>

                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                            <div>
                                <h3 className="text-xl font-bold text-forest-text-primary leading-tight">
                                    {item.role}
                                </h3>
                                <h4 className="text-lg font-medium text-forest-accent-main mt-1">
                                    {item.company || item.organization}
                                </h4>
                            </div>
                            <div className="flex flex-col sm:items-end mt-2 sm:mt-0 min-w-max ml-0 sm:ml-4">
                                <span className="text-sm font-medium text-forest-accent-main px-2 py-1 bg-forest-bg-elevated rounded mb-1 whitespace-nowrap">
                                    {item.startDate} – {item.endDate}
                                </span>
                                {item.location && (
                                    <span className="text-xs text-forest-text-muted font-medium flex items-center">
                                        {item.location}
                                    </span>
                                )}
                            </div>
                        </div>

                        <div className="text-forest-text-secondary leading-relaxed mt-3 text-base">
                            {item.bullets ? (
                                <ul className="list-disc list-outside ml-4 space-y-1">
                                    {item.bullets.map((bullet, idx) => (
                                        <li key={idx} className="pl-1 marker:text-forest-text-muted">{bullet}</li>
                                    ))}
                                </ul>
                            ) : (
                                <p>{item.description}</p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ResumeSection;
