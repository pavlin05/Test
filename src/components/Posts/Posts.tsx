import React from 'react';
import { BlogPost } from '@/app/types'
import Link from 'next/link'

const Posts: React.FC = async () => {
    const response = await fetch(`${process.env.NEXT_API_URL}/posts`);
    const posts: BlogPost[] = await response.json() || []

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-12'>
            {posts.map((post) =>
                <Link
                    id={post.id.toString()}
                    href={`/posts/${post.id}`}
                    className='flex flex-col gap-2 border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-4'
                >
                    <img src={post.image} alt={post.title} className="rounded-t-lg object-cover"/>
                    <div className='flex flex-col p-4 gap-4'>
                        <h5 className='text-sm font-bold'>{post.title}</h5>
                        <p className='text-xs'>{post.excerpt}</p>
                    </div>
                </Link>
            )}
        </div>
    );
};

export default Posts;