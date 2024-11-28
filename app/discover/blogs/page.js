'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Blogs() {
  const [posts, setPosts] = useState(null);
  const [isSuccessful, setIsSuccessful] = useState(false);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts'
      );

      const responseData = await response.json();
      setPosts(responseData);
      setIsSuccessful(responseData.meta.status === 200);
    } catch (error) {
      setIsSuccessful(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  console.log(posts);
  return (
    <div>
      <h1>Blog Posts</h1>
      {posts?.map((post) => (
        <Link key={post.id} href={`/discover/blogs/${post.id}`}>
          <h2>{post.title}</h2>
        </Link>
      ))}
    </div>
  );
}
