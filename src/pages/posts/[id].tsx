// pages/posts/[id].tsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

type Post = {
  id: number;
  title: string;
  body: string;
};

const PostDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchPost = async () => {
      try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        if (!res.ok) throw new Error('Post non trovato');
        const data: Post = await res.json();
        setPost(data);
      } catch (error) {
        console.error('Errore nel recupero del post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) return <p>Caricamento...</p>;
  if (!post) return <p>Post non trovato</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
