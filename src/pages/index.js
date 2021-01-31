import React from 'react';
import Link from 'next/link';

function HomePage() {
  return (
    <div>
      Welcome to next.Js
      <Link href="/posts/[pid]" as="/posts/first">
        My first post
      </Link>
    </div>
  )
}

export default HomePage
