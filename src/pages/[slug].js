import React from 'react';
import { useRouter } from 'next/router';
import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import Header from '@components/Common/Header';
import SingleSlugArticle from '@components/Blogs/SingleSlugArticle';
import axiosInstance from 'src/services/axiosInstance';

const Post = ({ post }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <Layout title={post.title.rendered}>
      <Navbar classOption="navbar-light" />
      <Header title={post.title.rendered} />
      <SingleSlugArticle post={post} />
      <Footer />
    </Layout>
  );
};

export async function getStaticPaths() {
  try {
    const res = await axiosInstance.get('/posts'); 
    const posts = await res.data; 

    const paths = posts.map((post) => ({
      params: { slug: post.slug },
    }));

    return { paths, fallback: true }; 
  } catch (error) {
    console.error('Failed to fetch posts:', error);
    return { paths: [], fallback: true }; 
  }
}

export async function getStaticProps({ params }) {
  try {
    const res = await axiosInstance.get(`/posts?slug=${params.slug}`);
    const post = await res.data; 

    if (!post.length) {
      return {
        notFound: true,
      };
    }

    return {
      props: {
        post: post[0], 
      },
      revalidate: 10, 
    };
  } catch (error) {
    console.error('Failed to fetch post:', error);
    return {
      notFound: true, 
    };
  }
}

export default Post;
