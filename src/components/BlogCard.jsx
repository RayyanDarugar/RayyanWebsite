import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Tag } from 'lucide-react';

const BlogCard = ({ post }) => {
    return (
        <article className="bg-forest-bg-secondary rounded-lg shadow-sm border border-forest-bg-elevated overflow-hidden hover:shadow-md hover:border-forest-accent-main/30 transition-all duration-300 flex flex-col h-full group">
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-sm text-forest-text-muted mb-3">
                    <Calendar size={16} className="mr-2" />
                    <span>{post.date}</span>
                </div>

                <h3 className="text-xl font-bold text-forest-text-primary mb-3 line-clamp-2 group-hover:text-forest-accent-soft transition-colors">
                    <Link to={`/blog/${post.slug}`}>
                        {post.title}
                    </Link>
                </h3>

                <p className="text-forest-text-secondary mb-4 line-clamp-3">
                    {post.excerpt}
                </p>

                <div className="mt-auto pt-4 border-t border-forest-bg-elevated flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map(tag => (
                            <span key={tag} className="inline-flex items-center text-xs font-medium text-forest-accent-main bg-forest-bg-elevated px-2 py-1 rounded">
                                <Tag size={12} className="mr-1" />
                                {tag}
                            </span>
                        ))}
                    </div>

                    <Link
                        to={`/blog/${post.slug}`}
                        className="inline-flex items-center text-forest-accent-main font-medium hover:text-forest-accent-soft transition-colors text-sm"
                    >
                        Read <ArrowRight size={16} className="ml-1" />
                    </Link>
                </div>
            </div>
        </article>
    );
};

export default BlogCard;
