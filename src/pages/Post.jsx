import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Tag, Share2, Bookmark } from 'lucide-react';
import { blogPosts } from '../data/posts';

const Post = () => {
    const { slug } = useParams();
    const post = blogPosts.find(p => p.slug === slug);

    if (!post) {
        return <Navigate to="/blog" replace />;
    }

    // Simple content renderer for demo purposes
    const renderContent = (content) => {
        return content.split('\n').map((line, index) => {
            if (line.startsWith('# ')) {
                return <h1 key={index} className="text-3xl font-bold text-forest-text-primary mt-8 mb-4">{line.replace('# ', '')}</h1>;
            }
            if (line.startsWith('## ')) {
                return <h2 key={index} className="text-2xl font-bold text-forest-text-primary mt-6 mb-3">{line.replace('## ', '')}</h2>;
            }
            if (line.trim() === '') {
                return <br key={index} />;
            }
            if (line.match(/^\d+\./)) { // List item
                return <div key={index} className="ml-4 mb-2 font-medium text-forest-text-secondary">{line}</div>;
            }
            return <p key={index} className="mb-4 text-forest-text-secondary leading-relaxed text-lg">{line}</p>;
        });
    };

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <Link to="/blog" className="inline-flex items-center text-forest-text-muted hover:text-forest-accent-main transition-colors mb-8">
                <ArrowLeft size={18} className="mr-2" /> Back to Blog
            </Link>

            <article className="animate-fade-in">
                <header className="mb-8">
                    <div className="flex items-center space-x-4 text-sm text-forest-text-muted mb-4">
                        <span className="flex items-center"><Calendar size={16} className="mr-1" /> {post.date}</span>
                        <span className="text-forest-text-muted/50">|</span>
                        <span className="text-forest-accent-soft font-medium">5 min read</span>
                    </div>

                    <h1 className="text-3xl md:text-5xl font-bold text-forest-text-primary mb-6 leading-tight">
                        {post.title}
                    </h1>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {post.tags.map(tag => (
                            <span key={tag} className="inline-flex items-center text-sm font-medium text-forest-accent-main bg-forest-bg-elevated px-3 py-1 rounded-full">
                                <Tag size={14} className="mr-1" />
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex items-center justify-between border-y border-forest-bg-elevated py-4">
                        <div className="flex space-x-4">
                            <button
                                className="flex items-center text-forest-text-secondary hover:text-forest-accent-gold transition-colors"
                                onClick={() => alert('Shared to LinkedIn!')}
                            >
                                <Share2 size={20} className="mr-2" /> Share
                            </button>
                            <button
                                className="flex items-center text-forest-text-secondary hover:text-forest-accent-gold transition-colors"
                                onClick={() => alert('Saved to reading list (local storage placeholder)!')}
                            >
                                <Bookmark size={20} className="mr-2" /> Save
                            </button>
                        </div>
                    </div>
                </header>

                <div className="prose prose-lg prose-invert max-w-none mb-12">
                    {renderContent(post.content)}
                </div>

                {/* Comments Section Placeholder */}
                <div className="mt-16 pt-8 border-t border-forest-bg-elevated">
                    <h3 className="text-2xl font-bold text-forest-text-primary mb-4">Discussion</h3>
                    <div className="bg-forest-bg-secondary p-8 rounded-lg text-center border border-forest-bg-elevated">
                        <p className="text-forest-text-muted mb-4">
                            Comments powered by Giscus/Disqus would load here.
                        </p>
                        <p className="text-sm text-forest-text-muted/50">
                            (Configuration required in Post.jsx)
                        </p>
                    </div>
                </div>
            </article>
        </div>
    );
};

export default Post;
