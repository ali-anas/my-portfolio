import React from 'react';
import Head from 'next/head';
import BaseLayout from '../components/layouts/BaseLayout';

export default function Home() {
  return (
    <div>
      {/* <BaseLayout /> */}
      <BaseLayout>
        <h1>I'm on index page</h1>
      </BaseLayout>
      <main>
        <h1>
          My Portfolio!
        </h1>
      </main>
    </div>
  )
}
