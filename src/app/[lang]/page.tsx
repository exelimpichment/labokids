'use client';

import HomeHero from './home/homeHero';

export default function Home() {
  return (
    <>
      <HomeHero />
      <button
        type="button"
        onClick={() => {
          throw new Error('Sentry Frontend Error');
        }}
      >
        Throw error
      </button>
    </>
  );
}
