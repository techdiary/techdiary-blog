import React from 'react';
import { getSortedPostsData } from '../../lib/posts';
import Layout from '../components/Layout';
import Container from 'components/Container';

function HomePage({allPostsData}) {
  return (
    <Layout allPostsData={allPostsData}>
      <Container allPostsData={allPostsData}/>
    </Layout>
  )
}

export default HomePage

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

// Welcome to next.Js
// <Link href="/posts/[pid]" as="/posts/first">
//   My first post
// </Link>