import React from 'react';
import { BlogPost } from '@/app/types'

const PostDetails: React.FC<{ postId: string }> = async ({ postId }) => {
    const response = await fetch(
        `${process.env.NEXT_API_URL}/posts/${postId}`
    )
    const post: BlogPost = await response.json()
    const { title = '', image = '', publishDate, text = '' } = post

    const formattedDate = new Date(publishDate).toLocaleDateString() || ''

    return (
        <div className='flex flex-col max-w-[30%] m-auto gap-4'>
            <h1 className='text-4xl font-bold text-center'>{title}</h1>
            <img src={image} alt={title} className='object-cover'/>
            <p className='text-xl'>{text}</p>
            <p className='text-lg font-bold'>Publication date: <span className='font-normal'>{formattedDate}</span></p>
        </div>
    );
};

export default PostDetails