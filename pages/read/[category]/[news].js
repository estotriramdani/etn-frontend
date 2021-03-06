import React from 'react';
import { toast } from 'react-toastify';
import Gap from '../../../src/components/atoms/gap';
import HomeLayout from '../../../src/components/layouts/HomeLayout';
import { DetailNews } from '../../../src/components/moleculs';

export default function News({ dataPost }) {
  const newDataPost = dataPost.data;

  const handleSavePost = () => {
    if (window.localStorage.getItem('EtnSavedPost') === null) {
      window.localStorage.setItem('EtnSavedPost', '[]');
    }
    let savedPost = JSON.parse(window.localStorage.getItem('EtnSavedPost'));
    savedPost.push(newDataPost);
    window.localStorage.setItem('EtnSavedPost', JSON.stringify(savedPost));
    toast.success('Post berhasil disimpan!');
  };

  return (
    <>
      <HomeLayout title={newDataPost.title}>
        <h2 className="heading-2" style={{ textTransform: 'capitalize' }}>
          {newDataPost.category}
        </h2>
        <Gap height={23} />
        <DetailNews
          title={newDataPost.title}
          image={newDataPost.image}
          slug={newDataPost.slug}
          author={newDataPost.author.name}
          body={newDataPost.body}
          category={newDataPost.category}
          created_at={`${new Date(newDataPost.createdAt).getFullYear()}-${
            new Date(newDataPost.createdAt).getMonth() + 1
          }-${new Date(newDataPost.createdAt).getDate()} ${new Date(
            newDataPost.createdAt
          ).getHours()}:${new Date(newDataPost.createdAt).getMinutes()}`}
          key={newDataPost.slug}
          savePost={handleSavePost}
        />
      </HomeLayout>
    </>
  );
}

export async function getStaticPaths() {
  const res = await fetch(
    'https://etn-news-api.vercel.app/v1/blog/posts?perPage=1000&currentPage=1'
  );
  const dataPosts = await res.json();

  const paths = dataPosts.data.map((post) => ({
    params: {
      category: post.category,
      news: post.slug,
    },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps(context) {
  const news = context.params.news;
  const category = context.params.category;

  const res = await fetch(
    `https://etn-news-api.vercel.app/v1/blog/post/${news}`
  );
  const dataPost = await res.json();

  // Pass post data to the page via props
  return { props: { dataPost } };
}
