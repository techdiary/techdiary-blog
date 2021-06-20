import React from 'react'
import Head from 'next/head';
import Layout from 'components/Layout';
import Date from "../../components/Date"
import { getAllPostIds, getPostData } from '../../../lib/posts';


function Post({postData}) {
  return (
    <Layout>
      <Head>
        {postData.title}
      </Head>
      <div className="container max-w-prose mx-auto pt-20 ">
        <div className="block mb-8">
          <div className="font-serif text-6xl font-semibold text-teal-a400">
            {postData.title}
          </div>
        </div>
        <div className="block">
          <div className="text-right text-sm antialiased font-light font-mono hover:text-teal-a400">
            <Date dateString={postData.date} />
          </div>
        </div>
        <div className="block">
          <div className="prose prose-blue">
            {postData.contentHTML && <div dangerouslySetInnerHTML={{ __html: postData.contentHTML }} />}
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticPaths() {
  // Return a list of possible value for id
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  }
}


export async function getStaticProps({ params }) {
  // Fetch necessary data for the blog post using params.id
  const postData = await getPostData(params.id);

  return {
    props: {
      postData
    }
  }

}

export default Post

