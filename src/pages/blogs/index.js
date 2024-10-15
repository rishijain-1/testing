import React from 'react';

import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import Articles from '@components/Blogs/Articles';
import Header from '@components/Common/Header';
import axiosInstance from 'src/services/axiosInstance';

const Blogs = ({ posts }) => {
  
  return (
    <Layout title="Blog" desc="This is blog page">
      <Navbar />
      <Header
        title="Our Latest News and Blogs"
        desc="Completely integrate equity invested partnerships without revolutionary systems. Monotonectally network pandemic e-services via bricks-and-clicks information."
      />
      <Articles posts={posts} />
      <Footer />
    </Layout>
  );
};

// Fetching blog posts using Server-Side Rendering (SSR)
export async function getServerSideProps() {
  try {
    const response = await axiosInstance.get('/posts', {
      params: {
        per_page: 20,
        page: 1,
        status: 'publish',
      },
    });

    return {
      props: {
        posts: response.data,
      },
    };
  } catch (error) {
    return {
      props: {
        posts: [], // Pass an empty array if there's an error
      },
    };
  }
}

export default Blogs;
