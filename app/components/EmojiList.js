'use client';

import { endpoint } from '@/config/static-data';
import { useEffect, useState } from 'react';
import { EmojiListItem } from './EmojiListItem';

export function EmojiList() {
  const [emojiData, setEmojiData] = useState(null);
  const [isSucesssful, setIsSuccessful] = useState(false);

  const fetchEmojis = async () => {
    try {
      const response = await fetch(endpoint);

      const responseData = await response.json();
      setEmojiData(responseData);
      setIsSuccessful(responseData.meta.status === 200);
    } catch (error) {
      console.error('Error fetching data');
      setIsSuccessful(false);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      fetchEmojis();
    }, 5000);
  }, []);

  console.log('emojiData', emojiData);
  console.log('isSuccessful', isSucesssful);

  // if (!isSucesssful) {
  //   return <div>Loading...</div>;
  // }

  if (!emojiData) {
    return <div>Loading...</div>;
  } else {
    return (
      <ul className="grid grid-cols-6">
        {emojiData.data.map((emojiItem) => {
          return <EmojiListItem emoji={emojiItem} key={emojiItem.id} />;
        })}
      </ul>
    );
  }
}
