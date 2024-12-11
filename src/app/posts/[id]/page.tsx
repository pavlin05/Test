import React from 'react';
import PostDetails from '@/components/PostDetails'

const PostDetailsPage: React.FC<{ params: Promise<{ id: string }> }> = async ({ params }) => {
    const id = (await params).id;
    return <PostDetails postId={id}/>
};

export default PostDetailsPage