import React from 'react';
import BlogCard from '../components/BlogCard';
import { blogPosts } from '../data/posts';

const Blog = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-forest-text-primary mb-4">Writings</h1>
                <p className="text-xl text-forest-text-secondary/80">
                    Thoughts on product, technology, and building.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogPosts.map((post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
        </div>
    );
};

export default Blog;
