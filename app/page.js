'use client';

import { Logo } from './components/Logo';
import { NextLogo } from './components/NextLogo';
import { HEADER_DETAILS } from '../config/static-data.js';
import { List } from './components/List';
import { ContactForm } from './components/ContactForm';
import { EmojiList } from './components/EmojiList';

export default function Home() {
  return (
    <div className="grid grid-col-3 items-center">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {HEADER_DETAILS.authMenu[0].navText === 'Login' ? (
          <Logo logoUrl="/images/logo.png" nhh="TravLog" />
        ) : (
          <NextLogo logoUrl="/next.svg" logoText="NextJS" />
        )}

        <List />
        <ContactForm />
        <EmojiList />
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
