'use client';
import { useRouter } from 'next/navigation';
import { ContactForm } from '../components/ContactForm';
import { EmojiList } from '../components/EmojiList';

export default function Discover() {
  const router = useRouter();
  return (
    <div>
      <ContactForm />
      <EmojiList />
      <button onClick={() => router.push('/special-deals')}>Test</button>
    </div>
  );
}
