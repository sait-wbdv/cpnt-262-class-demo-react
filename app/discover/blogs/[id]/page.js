'use client';

import { useEffect, useState } from 'react';

export default function BlogPost({ params }) {
  const [post, setPost] = useState(null);
  const [id, setId] = useState(null);
  const [isSuccessful, setIsSuccessful] = useState(false);

  async function unwrapParams() {
    const idResult = await params;

    setId(idResult.id);
  }
  useEffect(() => {
    unwrapParams();
  }, [params]);

  const fetchPost = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );

      const responseData = await response.json();
      setPost(responseData);
      setIsSuccessful(responseData.meta.status === 200);
    } catch (error) {
      setIsSuccessful(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [id]);

  console.log(id);

  return (
    <div>
      <p>{post?.body}</p>
    </div>
  );
}
