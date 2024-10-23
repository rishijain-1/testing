import React from 'react';

import Layout from '@layout/Layout';
import Footer from '@layout/Footer/Footer';
import Navbar from '@layout/Header/Navbar';
import Articles from '@components/Blogs/Articles';
import Header from '@components/Common/Header';
import axiosInstance from 'src/services/axiosInstance';

const Blogs = ({ posts, categories }) => {
  return (
    <Layout title="Blog" desc="This is blog page">
      <Navbar insurance />
      <Header title="Our Latest News and Blogs" />
      <Articles posts={posts} categories={categories} />
      <Footer />
    </Layout>
  );
};

export async function getServerSideProps() {
  try {
    const [postsResponse, categoriesResponse] = await Promise.all([
      axiosInstance.get('/posts', {
        params: {
          per_page: 20,
          page: 1,
          status: 'publish',
        },
      }),
      axiosInstance.get('/categories', {
        params: {
          per_page: 10,
          order: 'desc',
          orderby: 'count',
        },
      }),
    ]);

    return {
      props: {
        posts: postsResponse.data,
        categories: categoriesResponse.data,
      },
    };
  } catch (error) {
    return {
      props: {
        posts: [],
        categories: [],
      },
    };
  }
}

export default Blogs;
