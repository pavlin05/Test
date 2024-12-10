// pages/index.tsx
import Link from 'next/link';
import { useEffect, useState } from 'react';

type Post = {
  id: number;
  title: string;
};

const Home = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data: Post[] = await res.json();
        setPosts(data.slice(0, 10)); // Mostra solo i primi 10 post
      } catch (error) {
        console.error('Errore nel recupero dei post:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Caricamento...</p>;

  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
